WHR-X No BitLocker Encryption
=============================

Description
-----------
Full disk encryption is not enabled. Some data on the systems remains unsecured at rest. Data at rest is that which remains stored on a medium, usually a hard drive or another block device. Microsoft provides a solution, known as BitLocker, for encrypting data at rest.

Reproduction Details
--------------------
To see that BitLocker is not enabled, issue the following command in PowerShell.
```
get-bitlockervolume
```

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – Securing data at rest helps prevent the loss of sensitive data after the physical hardware has been disposed of due to end of life or failure. Encrypting storage also helps mitigate the negative consequences of hardware theft. If hardware, which contains sensitive data is released to the public, the data could be used to harm the reputation of the organisation.

Recommendation
--------------
Ensure that BitLocker drive encryption has been enabled on the host. See the link below for more information on enabling BitLocker.
  * https://docs.microsoft.com/en-nz/windows/security/information-protection/bitlocker/bitlocker-how-to-deploy-on-windows-server
