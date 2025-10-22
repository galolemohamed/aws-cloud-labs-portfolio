#!/bin/bash
# Install Apache web server
dnf install -y httpd

# Enable and start Apache service
systemctl enable httpd
systemctl start httpd

# Create a simple HTML file
echo '<html><h1>Hello From Your Web Server!</h1></html>' > /var/www/html/index.html
