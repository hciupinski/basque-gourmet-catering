variable "project_name" { type = string }
variable "aws_region" { type = string  default = "eu-central-1" }
variable "domain_name" { type = string  description = "Site domain (e.g., www.example.com)" }
variable "acm_certificate_arn" { type = string description = "ACM cert in us-east-1 for domain_name" }
variable "github_org" { type = string }
variable "github_repo" { type = string }
variable "branch" { type = string default = "main" }