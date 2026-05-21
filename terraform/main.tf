terraform {
  required_version = ">= 1.6.0"

  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

provider "local" {}

resource "local_file" "deployment_notes" {
  filename = "${path.module}/deployment-notes.txt"

  content = <<EOT
SecureTaskOps Terraform placeholder.

This folder is ready for future cloud infrastructure:
- app service
- database
- networking
- container registry
- deployment environment
EOT
}
