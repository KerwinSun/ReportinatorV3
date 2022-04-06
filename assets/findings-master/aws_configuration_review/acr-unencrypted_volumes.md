ACR-X Unencrypted Volumes
=========================

Description
-----------
The instances in the implementation do not use EBS encryption. EBS encryption provides a means to encrypt host block devices.

Reproduction Details
--------------------
Issue the following command using the AWS CLI.
    aws ec2 describe-volumes

Note that “Encrypted” is set to false for all volumes.

Severity
--------
Low – If the underlying drives were rotated out due to failure, end-of-life, or another reason by the cloud provider, then sensitive data might be acquired by an attacker by means of salvage. Encrypting storage also helps mitigate the negative consequences of hardware theft.

Recommendation
--------------
Lateral Security recommends that all instances be configured to use encrypted volumes. Please see the link below for more information:
  * http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html