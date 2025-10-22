#  AWS Cloud Practitioner Journey – Lab 3 Completed!

## Amazon EC2 Instance Management

I’m thrilled to share that I’ve completed Lab 3, which focused on Amazon EC2 Instance Management.  
This lab provided hands-on experience with configuring, protecting, monitoring, and scaling EC2 instances — all key skills in cloud infrastructure management.

---

###  What I Accomplished

#### Task 1 – EC2 Instance Creation
- Launched a new EC2 web server with termination protection enabled to prevent accidental deletion.

#### Task 2 – Instance Logs
- Retrieved system logs to monitor, debug, and troubleshoot the EC2 instance.

#### Task 3 – Security Group Update
- Modified the web server’s security group to allow inbound HTTP traffic, making the site publicly accessible.

#### Task 4 – Instance Resizing & Stop Protection
- Resized the EC2 instance to simulate scaling capacity.  
- Enabled stop protection to prevent unintended shutdowns.

#### Task 5 – Explore Limits
- Explored EC2 service limits and learned how AWS enforces constraints to maintain service reliability.

#### Task 6 – Stop & Restart
- Tested stop protection, verified behavior on repeated attempts, and confirmed successful restart procedures.

---
##  Simple EC2 User Data Script

To automate web server setup, I used a lightweight EC2 User Data script.  
It installs Apache, starts the service, and serves a simple “Hello” webpage automatically at instance launch.

```bash
#!/bin/bash
dnf install -y httpd
systemctl enable httpd
systemctl start httpd
echo '<html><h1>Hello From Your Web Server!</h1></html>' > /var/www/html/index.html

