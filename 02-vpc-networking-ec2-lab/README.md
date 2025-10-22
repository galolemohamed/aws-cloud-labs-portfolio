# 🌐 AWS Cloud Practitioner Journey Update – Lab 2 Completed!

## VPC, Networking, and EC2 Infrastructure Setup

I’m excited to share that I’ve successfully completed Lab 2 in my AWS Cloud Practitioner learning path!  
This lab was a deep dive into building the foundational networking and compute resources that power applications on AWS.

---

### ✅ What I Accomplished

#### Task 1 – VPC Creation
- Designed and deployed a custom Virtual Private Cloud (VPC) to logically isolate AWS resources.

#### Task 2a – Subnets
- Created both:
  - Public Subnet: `lab-subnet-public1-us-east-1a`
  - Private Subnet: `lab-subnet-private1-us-east-1a`
- Implemented proper network segmentation for enhanced security and scalability.

#### Task 2b – Route Table Associations
- Configured routing tables to control network traffic:
  - `lab-rtb-public` → routes traffic through an Internet Gateway (lab-igw) for public access.
  - `lab-rtb-private1-us-east-1a` → routes through a NAT Gateway (lab-nat-public1-us-east-1a) for secure outbound access.

#### Task 3 – Security Group
- Created a Web Server Security Group that allows only controlled inbound and outbound traffic.

#### Task 4a & 4b – EC2 Instance Deployment
- Launched an EC2 instance (Web Server) within the new VPC.
- Configured networking and security to make the hosted website accessible via a browser.

---

