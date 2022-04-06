LHR-X Unencrypted Data at Rest
==============================

Description
-----------
Full disk encryption is not enabled. Data is unsecured at rest. Data at rest is stored data, usually a hard drive or another block device. This form of data contrasts with data in transit, such as through a network, and data in use, such as through a central processing unit.
Several solutions can provide storage encryption on Linux. The following are some of the most common.
  * Loop-AES
  * dm-crypt +/- LUKS
  * TrueCrypt
  * VeraCrypt
  * eCryptfs
  * EncFs

Reproduction Details
--------------------
To see that storage encryption has not been deployed, issue the following command, which indicates that all file systems are backed by regular block devices.
```
lsblk -a -i
```
The following command output indicates that no common solution is running on the systems
```
ps -ef
```
The following command output indicates that dmcrypt has not been configured.
```
cat /etc/crypttab
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Securing data at rest helps prevent the loss of sensitive data after the physical hardware has been disposed of due to end of life or failure. If hardware, which contains sensitive data is released to the public, the data could be used to harm the reputation of the organisation.

Recommendation
--------------
Ensure that sensitive data is encrypted at rest. This should be performed as a preliminary to and in tandem with actions governed by media destruction policy.
