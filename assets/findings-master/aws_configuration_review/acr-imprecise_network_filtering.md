ACR-X Imprecise Network Filtering
=================================

Description
-----------
Several security groups did not filter by port. Services run on configured ports. Filtering by port helps ensure that only intended services are available among security groups.
* security groups

Reproduction Details
--------------------
To see that some security groups do not filter by port, issue the following command. Look for the security groups enumerated in the description.
```
aws ec2 describe-security-groups --region <region>
```

Severity
--------
Low – Were a service, which was meant to be exposed only within its security group, vulnerable to exploitation, then the attack surface of that vulnerability would be increased by the number of systems outside the security group which can reach it. This configuration does not follow the security principle of defence in depth and least privilege.

Recommendation
--------------
Configure security groups to allow access by host, protocol, and port. Security groups should be one defensive layer, along with network ACLs and system firewalls.
