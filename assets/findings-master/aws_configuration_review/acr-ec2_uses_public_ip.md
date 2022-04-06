ACR-X EC2 Uses Public IP
========================

Description
-----------
An EC2 instance has an elastic IP configured for its use. An elastic IP is a public IP address. However, the instance does not have a security group assigned to it which would allow this IP to be reached from the Internet.

Reproduction Details
--------------------
From the AWS Management Console, click on EC2. From the resulting left menu, click on Instances. Notice that an instance has a public IP address assigned to it.

In the lower pane, look for the Security Groups section. Click view rules. Notice that no public IP sources are allowed by the assigned security groups.

Severity
--------
Info – This does not represent a vulnerability in the configuration. However, it is being raised because some events within the VPC will go unrecorded. These events could be an important indication of malicious activity within the VPC environment.

Recommendation
--------------
If not needed, the public IP address should be unassigned to the instance. Services can likely be provided through other means. For example, administration could be done through the VPN and web connections could be made through the ELB.