ACR-X Unencrypted Disks
=======================

Description
-----------
The VMs in the implementation do not use encrypted disks. Encrypted disks provide a means to encrypt VM block devices and include those for the operating system and data.

Reproduction Details
--------------------
To see that some VM disks are not encrypted, browse to the following location.
* Virtual Machines -> [name of VM] -> Disks

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – If the underlying drives were rotated out due to failure, end-of-life, or another reason by the cloud provider, then sensitive data might be acquired by an attacker by means of salvage. Encrypting storage also helps to mitigate the negative consequences of hardware theft.
The severity of this finding is increased because the client does not have control over the underlying infrastructure.

Recommendation
--------------
Lateral Security recommends that all VMs be configured to use encrypted disks. For more information, see the links below:
* https://docs.microsoft.com/en-us/azure/security-center/security-center-apply-disk-encryption
* http://aka.ms/encryptionvminstructions
