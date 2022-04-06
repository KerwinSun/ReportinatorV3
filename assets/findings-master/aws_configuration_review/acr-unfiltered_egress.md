ACR-X Unfiltered Egress
=======================

Description
-----------
The security groups assigned to the running instances within the VPC configuration do not contain any outbound filtering and therefore all traffic originating from those instances to the Internet is allowed.

Reproduction Details
--------------------
From the AWS Management Console, click on VPC. From the resulting left menu, click on Security Groups. For each security group returned, notice that the Outbound tab indicates that no traffic is restricted.

Severity
--------
Low – Unless outbound traffic is filtered, the implementation will allow connections from within the VPC to any host outside the VPC. This could be used by an attacker to exfiltrate sensitive data to a destination of his or her choosing.

Recommendation
--------------
Use egress filters within security groups to prevent connections to hosts on the Internet which will not be needed. In other words, if only certain hosts will be connecting to certain services, ensure that data going out from those services will only reach those hosts. Lateral Security understands that some services might require unrestricted egress. However, many can be restricted or denied.