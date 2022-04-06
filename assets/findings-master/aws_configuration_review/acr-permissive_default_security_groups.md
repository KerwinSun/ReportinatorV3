ACR-X Permissive Default Security Groups
========================================

Description
-----------
The default security groups have not been amended to disallow traffic to any IP address. By default, these security groups will allow all egress traffic and traffic between instances in the same security group.

Reproduction Details
--------------------
To see that the default security groups remain permissive, issue the following command in each region.

    aws ec2 describe-security-groups --filters Name=group-name,Values='default'

Notice that an IpRange of 0.0.0.0/0 is configured.

Severity
--------
Low – Allowing all egress traffic and traffic between instances multiplies attack vectors and does not follow the good practice of least privilege.
The following CIS Benchmark recommendation has not been followed:
  * 4.4 Ensure the default security group of every VPC restricts all traffic

Recommendation
--------------
Remove all inbound and outbound rules in the default security groups. Monitor VPC Flow Logs to see what traffic is required by the implementation. Explicitly allow this traffic with security groups.
