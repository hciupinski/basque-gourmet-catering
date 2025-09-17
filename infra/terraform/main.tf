terraform {
  required_providers { aws = { source = "hashicorp/aws" version = ">= 5.0" } }
}

provider "aws" { region = var.aws_region }

resource "aws_s3_bucket" "site" {
  bucket        = "${var.project_name}-site"
  force_destroy = true
}

resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site.id
  rule { object_ownership = "BucketOwnerPreferred" }
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket                  = aws_s3_bucket.site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "${var.project_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  comment             = var.project_name
  default_root_object = "index.html"
  aliases             = [var.domain_name]

  origin {
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id   = "s3-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-site"
    viewer_protocol_policy = "redirect-to-https"
    compress = true
    forwarded_values { query_string = false cookies { forward = "none" } }
  }

  restrictions { geo_restriction { restriction_type = "none" } }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

resource "aws_s3_bucket_policy" "allow_cf" {
  bucket = aws_s3_bucket.site.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Sid       = "AllowCloudFrontServicePrincipalReadOnly",
      Effect    = "Allow",
      Principal = { Service = "cloudfront.amazonaws.com" },
      Action    = ["s3:GetObject"],
      Resource  = ["${aws_s3_bucket.site.arn}/*"],
      Condition = { StringEquals = { "AWS:SourceArn" = aws_cloudfront_distribution.cdn.arn } }
    }]
  })
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

resource "aws_iam_role" "deploy" {
  name = "${var.project_name}-deploy-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = { Federated = aws_iam_openid_connect_provider.github.arn },
      Action   = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = { "token.actions.githubusercontent.com:aud": "sts.amazonaws.com" },
        StringLike   = { "token.actions.githubusercontent.com:sub": "repo:${var.github_org}/${var.github_repo}:ref:refs/heads/${var.branch}" }
      }
    }]
  })
}

resource "aws_iam_role_policy" "deploy" {
  name = "${var.project_name}-deploy-policy"
  role = aws_iam_role.deploy.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      { Effect: "Allow", Action: ["s3:PutObject", "s3:DeleteObject", "s3:ListBucket"], Resource: [aws_s3_bucket.site.arn, "${aws_s3_bucket.site.arn}/*"] },
      { Effect: "Allow", Action: ["cloudfront:CreateInvalidation", "cloudfront:GetDistribution"], Resource: [aws_cloudfront_distribution.cdn.arn] }
    ]
  })
}