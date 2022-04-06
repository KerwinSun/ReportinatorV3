ACR-X Exposed Instances
=======================

Description
-----------
Several elastic compute cloud (EC2) instances are exposed to the Internet.
* instances
Several relational database service (RDS) instances are exposed to the Internet.
* instances

Reproduction Details
--------------------
To see the EC2 instances which are publicly exposed, issue the following commands.
```
aws ec2 describe-instances --region <region> --query 'Reservations[*].Instances[?PublicIpAddress]'
```
To see the RDS instances which are publicly exposed, issue the following commands and look for databases with the string, "PubliclyAccessible": true.
```
aws rds describe-db-instances --region <region>
```

Severity
--------
Low – Instances often contain sensitive data, so are kept on private networks behind firewalls and NACLs. If these instances were misconfigured to allow an attacker to gain access to their data, or if a vulnerability were found in the services, then sensitive data might be disclosed or altered.

Recommendation
--------------
Put the instances on a secured, private network and only allow access to approved clients with security groups and NACLs.
