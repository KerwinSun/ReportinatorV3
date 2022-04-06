ACR-X Unrestricted Network ACL
==============================

Description
-----------
The current network access control list (NACL) configuration allows all traffic to pass into and out from the VPC subnet. NACLs provide packet filtering on the network before any internal hosts are reached. NACLs are an additional layer of defence when used in conjunction with Security Groups and only NACLs can be used to explicitly deny traffic.

Reproduction Details
--------------------
To see that NACLs restrict neither ingress nor egress network traffic, issue the following command:

``` aws ec2 describe-network-acls --region [region] --query 'NetworkAcls[*].[NetworkAclId,VpcId,Entries[?(CidrBlock==`0.0.0.0/0`)]]'```

Severity
--------
Low – Using NACLs are a part of defence in depth. Omission of NACLs forces the VPC to rely on the security provided by security groups and host firewalls. Misconfiguration or omission of either of these final layers could render the implementation vulnerable to attack.

Recommendation
--------------
Write NACLs which match those of the security groups. Include NACLs which restrict outgoing traffic to only what is needed by the implementation. More information on NACLs can be found below.
  * http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html
