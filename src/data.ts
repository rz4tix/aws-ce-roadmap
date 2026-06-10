import { Curriculum } from './types';

export const curriculum: Curriculum = {
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Foundations (W1–4)",
      weeks: [
        {
          id: "w1",
          title: "Week 1",
          focus: "Linux, Networking & Git Basics",
          tasks: [
            {
              name: "Linux Directory Structure & Navigation",
              description: "Navigate a Linux filesystem using cd, ls, pwd, find, and grep. Understand standard FHS (Filesystem Hierarchy Standard).",
              tags: ["Concept", "Linux"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Bash Scripting & Cron",
              description: "Write a bash script to backup a specific folder and schedule it using cron to run daily at midnight. Use systemd to check service statuses.",
              tags: ["Tool", "Linux"],
              hours: 3,
              freeTier: true
            },
            {
              name: "OSI Model & TCP/IP",
              description: "Trace a network request from the browser to a server, mapping it to the OSI model. Learn IP addressing and CIDR notation.",
              tags: ["Concept", "Networking"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Subnetting & BGP Basics",
              description: "Calculate subnets for a /16 VPC. Understand the basics of BGP (Border Gateway Protocol) and how routers exchange information.",
              tags: ["Concept", "Networking"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Git & GitHub Workflows",
              description: "Setup a local git repository, create feature branches, simulate a merge conflict, and resolve it using a trunk-based development strategy.",
              tags: ["Tool", "Git"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Setup an EC2 Ubuntu instance using Free Tier. Configure a bash script to monitor disk usage and commit your script to a GitHub repository using Git CLI.",
          resources: ["Linux Journey", "AWS EC2 Documentation", "Git SCM Docs"]
        },
        {
          id: "w2",
          title: "Week 2",
          focus: "AWS IAM & Organizations",
          tasks: [
            {
              name: "IAM Users, Groups & Roles",
              description: "Create an IAM Admin group, add a user with MFA. Create an IAM Role for EC2 with read-only S3 access.",
              tags: ["Concept", "AWS Core", "Certification"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Identity Policies & Boundaries",
              description: "Write a custom JSON policy enforcing 'Least Privilege'. Attach a permission boundary to prevent privilege escalation.",
              tags: ["Security", "AWS Core"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Attribute-Based Access Control (ABAC)",
              description: "Implement IAM ABAC using AWS tags. Configure a policy that allows action only if the Principal tag matches the Resource tag.",
              tags: ["Security", "Advanced"],
              hours: 2,
              freeTier: true
            },
            {
              name: "AWS Organizations & SCPs",
              description: "Set up AWS Organizations. Create a Service Control Policy (SCP) to deny the creation of resources outside approved regions (e.g., us-east-1).",
              tags: ["Security", "Organization"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Implement a multi-account organization structure conceptually. Apply an SCP restricting regions, and configure an IAM Role granting developers temporary assumption access using ABAC tags.",
          resources: ["AWS IAM User Guide", "AWS Organizations Documentation"]
        },
        {
          id: "w3",
          title: "Week 3",
          focus: "VPC & Advanced Networking",
          tasks: [
            {
              name: "VPC Architecting",
              description: "Create a custom VPC with 2 Public Subnets and 2 Private Subnets across different Availability Zones for High Availability.",
              tags: ["Concept", "AWS Core", "Certification"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Routing & Gateways",
              description: "Configure an Internet Gateway (IGW) for public routing, and deploy a NAT Gateway (warning: incurs cost) to allow private subnet outbound access.",
              tags: ["Networking", "AWS Core"],
              hours: 3,
              freeTier: false
            },
            {
              name: "Transit Gateway & Peering",
              description: "Connect two separate VPCs using VPC Peering. Understand Transit Gateway use cases for hub-and-spoke topologies.",
              tags: ["Networking", "Architecture"],
              hours: 2,
              freeTier: false
            },
            {
              name: "Security Groups & NACLs",
              description: "Secure subnets with stateless NACLs and stateful Security Groups. Implement 'Zero Trust' network boundaries.",
              tags: ["Security", "Networking"],
              hours: 2,
              freeTier: true
            },
            {
              name: "VPC Flow Logs",
              description: "Enable VPC Flow Logs, publish them to CloudWatch Logs, and use CloudWatch Log Insights to query rejected traffic.",
              tags: ["Observability", "AWS Core"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Deploy a highly available network foundation: Custom VPC spanning 2 AZs, public/private subsets, strict Security Groups, and Flow Logs capturing all REJECT events to CloudWatch.",
          resources: ["AWS VPC Documentation", "A Cloud Guru - VPC Deep Dive"]
        },
        {
          id: "w4",
          title: "Week 4",
          focus: "EC2 & Scalable Compute",
          tasks: [
            {
              name: "EC2 Instance Types & Pricing",
              description: "Spin up a T2/T3 micro. Compare On-Demand, Reserved, and Spot pricing models. Request a Spot instance using the CLI.",
              tags: ["Compute", "FinOps", "Certification"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Launch Templates & ASG",
              description: "Create an EC2 Launch Template with an Apache web server userdata script. Attach it to an Auto Scaling Group spanning multiple AZs.",
              tags: ["Compute", "HA"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Application Load Balancer (ALB)",
              description: "Deploy an ALB, configure Target Groups pointing to your ASG, and perform a load test to trigger an automatic scale-out event.",
              tags: ["Networking", "HA"],
              hours: 3,
              freeTier: false
            },
            {
              name: "Network Load Balancer (NLB) & Global Accelerator",
              description: "Understand Layer 4 load balancing using NLB. Review AWS Global Accelerator for multi-region active-active architectures.",
              tags: ["Architecture", "Networking"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Self-healing Web Cluster: Create an ALB that routes traffic to an ASG of spot instances. Terminate an instance manually and observe the ASG automatically replace it.",
          resources: ["AWS EC2 Guide", "AWS Elastic Load Balancing Docs", "AWS SAA-C03 Study Guide"]
        }
      ]
    },
    {
      id: "phase-2",
      title: "Phase 2: AWS Core Services (W5–10)",
      weeks: [
        {
          id: "w5",
          title: "Week 5",
          focus: "Storage, CDN & DNS",
          tasks: [
            {
              name: "S3 Deep Dive",
              description: "Host a static website on S3. Explore S3 Standard, IA, Glacier. Set up a lifecycle policy to archive objects after 30 days.",
              tags: ["Storage", "AWS Core"],
              hours: 2,
              freeTier: true
            },
            {
              name: "S3 Security & Replication",
              description: "Enable S3 Versioning and Cross-Region Replication (CRR). Generate a pre-signed URL using the AWS CLI for temporary file access.",
              tags: ["Security", "Storage"],
              hours: 3,
              freeTier: true
            },
            {
              name: "CloudFront & ACM",
              description: "Deploy a CloudFront CDN distribution pointing to your S3 bucket. Request a public TLS certificate via ACM (requires a domain name).",
              tags: ["Security", "Networking"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Route 53 Policies",
              description: "Configure Route 53 A and CNAME records. Implement latency-based and failover routing policies.",
              tags: ["Networking", "Certification"],
              hours: 2,
              freeTier: false
            }
          ],
          miniProject: "Global Static Website: Host a static React/HTML site on S3, distributed globally via CloudFront with a custom domain using Route 53, secured by ACM.",
          resources: ["AWS S3 Docs", "AWS CloudFront Guide"]
        },
        {
          id: "w6",
          title: "Week 6",
          focus: "Databases (RDS, Aurora, NoSQL)",
          tasks: [
            {
              name: "RDS Multi-AZ & Read Replicas",
              description: "Deploy a PostgreSQL RDS instance. Enable Multi-AZ for failover. Create a Read Replica to offload read traffic.",
              tags: ["Database", "HA"],
              hours: 3,
              freeTier: false
            },
            {
              name: "Amazon Aurora Architecture",
              description: "Study Aurora's storage architecture. Understand Aurora Serverless v2 scaling and Global Database capabilities.",
              tags: ["Database", "Architecture"],
              hours: 2,
              freeTier: true
            },
            {
              name: "DynamoDB Modeling",
              description: "Create a DynamoDB table with Partition and Sort keys. Query data using the AWS CLI. Understand provisioned vs on-demand capacity.",
              tags: ["Database", "NoSQL"],
              hours: 3,
              freeTier: true
            },
            {
              name: "ElastiCache (Redis)",
              description: "Deploy an ElastiCache Redis cluster. Conceptually integrate it in front of RDS to cache frequent queries.",
              tags: ["Database", "Performance"],
              hours: 2,
              freeTier: false
            }
          ],
          miniProject: "Data Tier Setup: Deploy an RDS MySQL Multi-AZ instance in private subnets, configure appropriate Security Groups, and create an ElastiCache node to act as a session store.",
          resources: ["AWS RDS & Aurora FAQs", "DynamoDB Developer Guide"]
        },
        {
          id: "w7",
          title: "Week 7",
          focus: "Serverless Compute",
          tasks: [
            {
              name: "Lambda Fundamentals",
              description: "Write a Node.js/Python Lambda function. Configure execution roles and timeout limits. Test using the AWS console.",
              tags: ["Compute", "Serverless"],
              hours: 2,
              freeTier: true
            },
            {
              name: "API Gateway Integration",
              description: "Create an HTTP API Gateway and connect it to your Lambda function as a proxy integration. Test the endpoint via Postman/curl.",
              tags: ["Networking", "Serverless"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Lambda Concurrency & VPCs",
              description: "Configure Reserved Concurrency. Connect Lambda to a private VPC to access an RDS instance using an ENI.",
              tags: ["Architecture", "Compute"],
              hours: 2,
              freeTier: true
            },
            {
              name: "API Gateway Auth & Throttling",
              description: "Implement API Gateway Usage Plans and API Keys to throttle usage. Integrate a Lambda Authorizer.",
              tags: ["Security", "Serverless"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Serverless REST API: Build an API Gateway routing to a Lambda function that performs basic CRUD operations against a DynamoDB table.",
          resources: ["AWS Serverless Developer Guide"]
        },
        {
          id: "w8",
          title: "Week 8",
          focus: "Decoupling & Event-Driven Architecture",
          tasks: [
            {
              name: "SQS Queues & Dead Letter Queues",
              description: "Create a Standard and FIFO SQS queue. Configure a Dead-Letter Queue (DLQ) to catch failed message processing.",
              tags: ["Messaging", "Architecture"],
              hours: 2,
              freeTier: true
            },
            {
              name: "SNS Topics & Fan-out",
              description: "Create an SNS Topic. Subscribe an email address and an SQS queue to demonstrate the Fan-out architectural pattern.",
              tags: ["Messaging", "Architecture"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Amazon EventBridge",
              description: "Set up an EventBridge rule that triggers a Lambda function whenever an EC2 instance changes state to 'terminated'.",
              tags: ["Compute", "Event-Driven"],
              hours: 2,
              freeTier: true
            },
            {
              name: "AWS Step Functions",
              description: "Design a Step Functions State Machine that orchestrates a multi-step Lambda workflow using Choice and Wait states.",
              tags: ["Orchestration", "Serverless"],
              hours: 3,
              freeTier: true
            }
          ],
          miniProject: "Order Processing Workflow: Create an Event-driven flow where an SNS topic receives an 'order', fans out to an SQS queue, which triggers a Lambda to process the order, and logs to DynamoDB.",
          resources: ["AWS Integration Services Docs"]
        },
        {
          id: "w9",
          title: "Week 9",
          focus: "Advanced Security & VPC Endpoints",
          tasks: [
            {
              name: "AWS KMS & Envelope Encryption",
              description: "Create a Customer Managed Key (CMK) in KMS. Use the AWS CLI to encrypt and decrypt a local file employing envelope encryption.",
              tags: ["Security", "AWS Core"],
              hours: 2,
              freeTier: false
            },
            {
              name: "Secrets Manager vs SSM Parameter Store",
              description: "Store a database password in Secrets Manager (supports auto-rotation). Store an API key in SSM Parameter Store (SecureString). Fetch both via CLI.",
              tags: ["Security", "DevOps"],
              hours: 2,
              freeTier: true
            },
            {
              name: "VPC Endpoints (PrivateLink)",
              description: "Create a VPC Gateway Endpoint for S3 and an Interface Endpoint for Secrets Manager to keep traffic off the public internet.",
              tags: ["Networking", "Security"],
              hours: 3,
              freeTier: false
            },
            {
              name: "Security Hub & GuardDuty",
              description: "Enable GuardDuty to detect anomalous behavior. Review Security Hub findings against AWS Foundational Security Best Practices.",
              tags: ["Security", "Observability"],
              hours: 2,
              freeTier: false
            }
          ],
          miniProject: "Secure Private Architecture: Configure an EC2 instance in a private subnet with NO internet access. Give it SSM access via an Interface Endpoint and decrypt an SSM Parameter.",
          resources: ["AWS KMS Crypto Details", "AWS PrivateLink Docs"]
        },
        {
          id: "w10",
          title: "Week 10",
          focus: "Docker & Container Basics",
          tasks: [
            {
              name: "Dockerizing an Application",
              description: "Write a Dockerfile for a basic Node.js or Python API. Build the image locally and run the container mapping port 8080.",
              tags: ["Tool", "DevOps"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Multi-stage Builds",
              description: "Optimize your Dockerfile using multi-stage builds to compile code in one stage and package only the binary/dist in a minimal Alpine image.",
              tags: ["Tool", "Optimization"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Docker Security Best Practices",
              description: "Modify the Dockerfile to run as a non-root user. Scan the image locally for vulnerabilities using Trivy or Docker Scan.",
              tags: ["Security", "DevOps"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Amazon ECR",
              description: "Create an Amazon Elastic Container Registry. Authenticate docker to AWS, tag your local image, and push it to ECR.",
              tags: ["DevOps", "Containers"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Secure Container Pipeline: Package an application in an optimized, root-less multi-stage Docker container and publish it to Amazon ECR.",
          resources: ["Docker Official Docs", "Amazon ECR User Guide"]
        }
      ]
    },
    {
      id: "phase-3",
      title: "Phase 3: DevOps & Security (W11–16)",
      weeks: [
        {
          id: "w11",
          title: "Week 11",
          focus: "Terraform Foundations",
          tasks: [
            {
              name: "Terraform State & Providers",
              description: "Write a main.tf to provision an S3 bucket and EC2 instance. Understand AWS Provider configuration and state files.",
              tags: ["Tool", "IaC"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Remote State & Locking",
              description: "Migrate your local Terraform state to use an S3 backend with a DynamoDB table for state locking to support team collaboration.",
              tags: ["Tool", "IaC"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Terraform Modules",
              description: "Refactor your code into a reusable Terraform module for VPC creation. Use variables and outputs to pass data.",
              tags: ["Tool", "IaC"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Terraform Workspaces",
              description: "Utilize Terraform Workspaces to deploy multiple environments (dev, prod) using the same code base.",
              tags: ["Tool", "IaC"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "IaC Foundation: Build a reusable VPC module and deploy distinct 'dev' and 'prod' VPCs using Terraform Workspaces and Remote State.",
          resources: ["HashiCorp Learn", "Terraform AWS Provider Docs"]
        },
        {
          id: "w12",
          title: "Week 12",
          focus: "ECS Fargate & Container Orchestration",
          tasks: [
            {
              name: "ECS Clusters & Task Definitions",
              description: "Define an ECS Task Definition mapping to the ECR image created in W10. Configure container ports and environment variables.",
              tags: ["Containers", "AWS Core"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Fargate Services",
              description: "Deploy the Task Definition as an ECS Service using the Fargate launch type, integrating it with the VPC subnets and Security Groups.",
              tags: ["Containers", "Serverless"],
              hours: 3,
              freeTier: false
            },
            {
              name: "ALB Integration with ECS",
              description: "Attach an ALB to your ECS Service. Ensure Fargate tasks automatically register their dynamic IP addresses with the Target Group.",
              tags: ["Networking", "Containers"],
              hours: 3,
              freeTier: false
            },
            {
              name: "ECS Auto Scaling",
              description: "Configure Target Tracking scaling policies for your ECS Service based on CPU Utilization.",
              tags: ["Compute", "HA"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Serverless Container App: Deploy your ECR Docker image onto ECS Fargate. Front it with an ALB and configure auto-scaling. Do all of this using Terraform.",
          resources: ["AWS ECS Workshop"]
        },
        {
          id: "w13",
          title: "Week 13",
          focus: "CI/CD: GitHub Actions",
          tasks: [
            {
              name: "GitHub Actions Basics",
              description: "Create a .github/workflows directory. Write a workflow to test code on every Pull Request to the main branch.",
              tags: ["Tool", "CI/CD"],
              hours: 2,
              freeTier: true
            },
            {
              name: "OIDC AWS Authentication",
              description: "Configure OpenID Connect (OIDC) between GitHub Actions and AWS IAM, avoiding the use of long-lived access keys.",
              tags: ["Security", "CI/CD"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Matrix Builds & SAST",
              description: "Implement a Matrix build strategy to run tests concurrently. Integrate a SAST tool (e.g., SonarCloud, Checkov) into the pipeline.",
              tags: ["DevOps", "Security"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Automated Deployments (CD)",
              description: "Add a 'deploy' job that pushes a new Docker image to ECR and forces an ECS Service redeployment using the AWS CLI.",
              tags: ["CI/CD", "Containers"],
              hours: 3,
              freeTier: true
            }
          ],
          miniProject: "End-to-End Pipeline: Build a GitHub Actions workflow that lints code, runs security checks via OIDC, builds a Docker image, pushes to ECR, and deploys to ECS.",
          resources: ["GitHub Actions Docs", "Checkov IaC Scanning"]
        },
        {
          id: "w14",
          title: "Week 14",
          focus: "CodePipeline & StackSets",
          tasks: [
            {
              name: "AWS CodePipeline & CodeBuild",
              description: "Create a native AWS CI/CD pipeline using CodeCommit/GitHub, CodeBuild, and CodeDeploy for ECS.",
              tags: ["DevOps", "CI/CD"],
              hours: 3,
              freeTier: true
            },
            {
              name: "CloudFormation & StackSets",
              description: "Translate a snippet of Terraform to AWS CloudFormation. Deploy a StackSet to provision resources across multiple regions/accounts.",
              tags: ["IaC", "Organization"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Blue/Green Deployments",
              description: "Configure a Blue/Green deployment for your ECS service using CodeDeploy and ALB target group swapping.",
              tags: ["DevOps", "Architecture"],
              hours: 3,
              freeTier: false
            }
          ],
          miniProject: "AWS Native Delivery: Establish a CodePipeline that watches a GitHub repo, builds the artifacts via CodeBuild, and executes a Blue/Green release to ECS via CodeDeploy.",
          resources: ["AWS CodePipeline User Guide"]
        },
        {
          id: "w15",
          title: "Week 15",
          focus: "Kubernetes Basics",
          tasks: [
            {
              name: "Kubernetes Architecture",
              description: "Study Control Plane vs Worker nodes, Kubelet, Etcd. Install Minikube or kind locally.",
              tags: ["Concept", "K8s"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Pods & Deployments",
              description: "Create a k8s Deployment YAML for an Nginx container. Scale the deployment using the kubectl CLI.",
              tags: ["Containers", "K8s"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Services & Networking",
              description: "Expose your Deployment using a ClusterIP and a NodePort Service. Understand internal DNS resolution in K8s.",
              tags: ["Networking", "K8s"],
              hours: 2,
              freeTier: true
            },
            {
              name: "ConfigMaps & Secrets",
              description: "Externalize application configuration via ConfigMaps. securely mount K8s Secrets as environment variables.",
              tags: ["Security", "K8s"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Local Cluster Playground: Launch kind locally, deploy a 3-replica web app via Deployment, pass environment vars via ConfigMaps, and securely fetch simulated API keys from Secrets.",
          resources: ["Kubernetes.io Docs"]
        },
        {
          id: "w16",
          title: "Week 16",
          focus: "Advanced Kubernetes Workloads",
          tasks: [
            {
              name: "RBAC & Service Accounts",
              description: "Implement Role-Based Access Control in K8s. Create a separate ServiceAccount and bind it to a restrictive Role using RoleBinding.",
              tags: ["Security", "K8s"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Ingress Controllers",
              description: "Set up an Ingress Controller (like Nginx). Define Ingress resources to route HTTP traffic based on URL paths.",
              tags: ["Networking", "K8s"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Helm Charts",
              description: "Install Helm. Package your K8s YAMLs into a Helm Chart with customizable values.yaml. Deploy via Helm.",
              tags: ["Tool", "DevOps"],
              hours: 2,
              freeTier: true
            },
            {
              name: "HPA (Horizontal Pod Autoscaler)",
              description: "Configure HPA to monitor CPU metrics and automatically scale your deployment pods up and down.",
              tags: ["Architecture", "K8s"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Packaged K8s App: Refactor your K8s architecture into a Helm Chart, configure Ingress routing, and rely on HPA to scale pods conditionally based on load metrics.",
          resources: ["Helm Documentation", "Kubernetes Ingress Docs"]
        }
      ]
    },
    {
      id: "phase-4",
      title: "Phase 4: Production-Ready EKS, OpenTelemetry & SRE (W17–24)",
      weeks: [
        {
          id: "w17",
          title: "Week 17",
          focus: "Amazon EKS I (Control Plane, Nodes & IAM)",
          tasks: [
            {
              name: "EKS Cluster Provisioning (eksctl)",
              description: "Deploy an Amazon EKS cluster using eksctl. Review the AWS provisioned control plane elements vs the managed node groups.",
              tags: ["EKS", "K8s"],
              hours: 3,
              freeTier: false
            },
            {
              name: "IRSA (IAM Roles for Service Accounts)",
              description: "Map a Kubernetes ServiceAccount to an AWS IAM Role using an OIDC provider. Grant a pod secure access to S3 without passing keys.",
              tags: ["Security", "EKS"],
              hours: 3,
              freeTier: false
            },
            {
              name: "VPC CNI & Networking",
              description: "Understand the Amazon VPC CNI plugin. Observe how K8s pods get native VPC IP addresses. Manage subnets carefully.",
              tags: ["Networking", "EKS"],
              hours: 2,
              freeTier: false
            }
          ],
          miniProject: "Secure EKS Deployment: Spin up an EKS cluster, configure IRSA for a microservice, and prove the microservice can securely read/write to S3 solely using its ServiceAccount.",
          resources: ["EKS Workshop", "AWS IRSA Guide"]
        },
        {
          id: "w18",
          title: "Week 18",
          focus: "EKS II & AWS CDK",
          tasks: [
            {
              name: "AWS Load Balancer Controller",
              description: "Install the AWS LB Controller in EKS. Create Ingress resources that natively provision AWS ALBs.",
              tags: ["Networking", "EKS"],
              hours: 3,
              freeTier: false
            },
            {
              name: "Persistent Volumes (PVCs)",
              description: "Implement stateful workloads. Map K8s PVCs to AWS EBS volumes dynamically via the EBS CSI Driver.",
              tags: ["Storage", "EKS"],
              hours: 2,
              freeTier: false
            },
            {
              name: "AWS CDK Introduction",
              description: "Initialize an AWS CDK (TypeScript) project. Provision an S3 bucket and DynamoDB table. Synthesize CloudFormation templates.",
              tags: ["Tool", "IaC"],
              hours: 2,
              freeTier: true
            },
            {
              name: "CDK L2/L3 Constructs",
              description: "Utilize CDK high-level constructs to deploy an ECS Fargate cluster or an ALB with minimal lines of code.",
              tags: ["Tool", "IaC"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "EKS edge & state: Provision stateful sets mounted to EBS via PVCs, exposed publicly using an AWS ALB tied directly to an EKS Ingress object.",
          resources: ["AWS CDK Developer Guide"]
        },
        {
          id: "w19",
          title: "Week 19",
          focus: "Observability (SRE & ADOT)",
          tasks: [
            {
              name: "CloudWatch Metrics, Alarms & Logs",
              description: "Create custom CloudWatch metrics, configure Alarms tied to SNS, and aggregate logs logically in CloudWatch Logs.",
              tags: ["Observability", "Operations"],
              hours: 2,
              freeTier: true
            },
            {
              name: "AWS X-Ray & Tracing",
              description: "Instrument a small API with AWS X-Ray to track request tracing across multiple services (e.g., API Gateway to Lambda).",
              tags: ["Observability", "Developers"],
              hours: 2,
              freeTier: true
            },
            {
              name: "OpenTelemetry (ADOT)",
              description: "Deploy the AWS Distro for OpenTelemetry (ADOT) collector in EKS to universally pipe logs/metrics/traces to CloudWatch and X-Ray.",
              tags: ["Observability", "SRE"],
              hours: 3,
              freeTier: false
            },
            {
              name: "SRE Foundations & Chaos Eng",
              description: "Define SLIs and SLOs. Calculate an Error Budget. Conceptually explore AWS Fault Injection Simulator (FIS).",
              tags: ["Concept", "SRE"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Deep Observability Platform: Use ADOT to pipe metrics and distributed traces horizontally across a microservice application into CloudWatch dashboards.",
          resources: ["ADOT Official Documentation", "SRE Book (Google)"]
        },
        {
          id: "w20",
          title: "Week 20",
          focus: "Security Posture, WAF & Disaster Recovery",
          tasks: [
            {
              name: "AWS WAF & Shield",
              description: "Attach AWS WAF to CloudFront or an ALB. Configure rules to block SQL Injection, XSS, and rate limit aggressive IPs over time.",
              tags: ["Security", "Network"],
              hours: 2,
              freeTier: false
            },
            {
              name: "Network Firewall",
              description: "Understand AWS Network Firewall. Setup stateful VPC inspection endpoints to monitor outbound access.",
              tags: ["Security", "Architecture"],
              hours: 2,
              freeTier: false
            },
            {
              name: "AWS Backup",
              description: "Implement central data protection. Create a strict AWS Backup plan capturing RDS, EBS, and DynamoDB daily with a 30-day retention scheme.",
              tags: ["Storage", "Disaster Recovery"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Disaster Recovery Patterns",
              description: "Compare Pilot Light, Warm Standby, and Multi-Site Active/Active strategies utilizing Route 53 failover.",
              tags: ["Architecture", "Certification"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Perimeter Defense & DR: Defend an ALB using AWS WAF rate-limiting. Apply an AWS Backup plan over your core stateful VPC assets.",
          resources: ["AWS Security Guide"]
        },
        {
          id: "w21",
          title: "Week 21",
          focus: "FinOps & Cost Optimization",
          tasks: [
            {
              name: "Cost Explorer & Allocation Tags",
              description: "Navigate AWS Cost Explorer. Implement mandatory Resource Tags (e.g., Environment=Prod, CostCenter=A1) to granularly filter billing costs.",
              tags: ["FinOps", "Governance"],
              hours: 2,
              freeTier: true
            },
            {
              name: "AWS Budgets",
              description: "Create a Zero-Spend budget (for dev accounts) and an aggregate monthly AWS Budget. Trigger an SNS alert at 80% forecast.",
              tags: ["FinOps", "Governance"],
              hours: 2,
              freeTier: true
            },
            {
              name: "RIs, Savings Plans & Spot",
              description: "Analyze the mathematical break-even point of Compute Savings Plans vs Reserved Instances. Implement Spot fleets using Terraform.",
              tags: ["FinOps", "Compute"],
              hours: 2,
              freeTier: true
            },
            {
              name: "Trusted Advisor & Compute Optimizer",
              description: "Use right-sizing tools natively provided by AWS. Review Trusted Advisor checks for security and cost optimizations.",
              tags: ["FinOps", "Operations"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "FinOps Board: Build a tagging enforcement SCP, set up AWS Budgets, and analyze current architectures for right-sizing recommendations via Compute Optimizer.",
          resources: ["AWS FinOps Guide", "Pricing Calculator"]
        },
        {
          id: "w22",
          title: "Week 22",
          focus: "SAA-C03 Assessment & Mock Scenario",
          tasks: [
            {
              name: "SAA-C03 Domain Review: Security/Resilience",
              description: "Map all learned services against the AWS SAA-C03 exam guide domains. Revisit VPC peering, IAM SCPs, and Route53 routing.",
              tags: ["Certification", "Review"],
              hours: 3,
              freeTier: true
            },
            {
              name: "SAA-C03 Domain Review: Cost/Performance",
              description: "Revisit S3 Storage tiers, DynamoDB provisioning vs on-demand, caching via ElastiCache, and ALB configurations.",
              tags: ["Certification", "Review"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Mock Client Simulation (Internal)",
              description: "Answer architectural constraints: 'Client wants an RTO of 1 hr and RPO of 5 mins across regions. How do we build this?'",
              tags: ["Architecture", "Interview"],
              hours: 2,
              freeTier: true
            }
          ],
          miniProject: "Assessment check week. Take a 65-question practice exam (e.g., TutorialsDojo or A Cloud Guru). Grade yourself to prepare for the final cert.",
          resources: ["TutorialsDojo SAA-C03 Practice Exams"]
        },
        {
          id: "w23",
          title: "Week 23",
          focus: "Capstone Project",
          tasks: [
            {
              name: "Architecture & Repo Setup",
              description: "Draft your Terraform directory structure. Prepare GitHub repository. Plan the 3-tier architecture components.",
              tags: ["Project", "Architecture"],
              hours: 2,
              freeTier: false
            },
            {
              name: "Terraform IaC (VPC to DB)",
              description: "Deploy the Base network, Security groups, RDS Aurora Multi-AZ, and an ElastiCache Redis cluster via Terraform.",
              tags: ["Project", "IaC"],
              hours: 4,
              freeTier: false
            },
            {
              name: "Edge & Application Tier",
              description: "Provision Route53, CloudFront, WAF, ALB, and an ECS Fargate cluster using GitHub Actions pipelines for CD deployment.",
              tags: ["Project", "Delivery"],
              hours: 4,
              freeTier: false
            },
            {
              name: "Observability & Load Testing",
              description: "Ensure CloudWatch metrics stream continuously. Use an open-source tool like 'Artillery' or 'Locust' to run load tests against the CloudFront domain aiming for 1000 RPS.",
              tags: ["Project", "Testing"],
              hours: 3,
              freeTier: false
            }
          ],
          miniProject: "CAPSTONE: 3-tier Prod App. Route53 → CloudFront → WAF → ALB → ECS Fargate → RDS Aurora Multi-AZ → ElastiCache Redis. CI/CD via GitHub Actions. Load tested.",
          resources: ["AWS Architecture Center"]
        },
        {
          id: "w24",
          title: "Week 24",
          focus: "Final Review & Certification Readiness",
          tasks: [
            {
              name: "Capstone Documentation",
              description: "Write a high-quality README.md for your Capstone project. Include Architecture diagrams (Draw.io/Lucidchart), cost estimations, and setup instructions.",
              tags: ["Documentation", "Portfolio"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Interview Preparation",
              description: "Practice answering Behavioral 'STAR' format questions linked to your Capstone. Be prepared to explain load test bottlenecks.",
              tags: ["Career", "Interview"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Final SAA-C03 Practice",
              description: "Take one final simulated practice test. Review missed questions intimately. Verify compliance with AWS Well-Architected Framework.",
              tags: ["Certification", "Study"],
              hours: 3,
              freeTier: true
            },
            {
              name: "Clean up & Tear Down",
              description: "Execute 'terraform destroy' to remove all Capstone infrastructure. Verify billing panels to ensure no lingering charges.",
              tags: ["FinOps", "Cleanup"],
              hours: 1,
              freeTier: true
            }
          ],
          miniProject: "Polish your portfolio repository and finalize scheduling logic for your AWS Certified Solutions Architect - Associate examination.",
          resources: ["Candidate Guide", "AWS Well-Architected Framework Documentation"]
        }
      ]
    }
  ]
};
