variable "project_name" {
  type = string
}

variable "aws_region" {
  type    = string
  default = "eu-north-1"
}

variable "domain_name" {
  type        = string
  description = "Site domain (e.g., www.example.com). Leave empty to use the default CloudFront domain."
  default     = ""
}

variable "acm_certificate_arn" {
  type        = string
  description = "ACM certificate in us-north-1 for domain_name. Leave empty when no custom domain is used."
  default     = ""
}

variable "github_org" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "branch" {
  type    = string
  default = "main"
}
