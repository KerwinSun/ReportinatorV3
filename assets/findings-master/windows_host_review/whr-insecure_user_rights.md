WHR-X Insecure User Rights
==========================

Description
-----------

Some user rights settings which might provide more functionality than necessary.

* All users (Everyone), including Pre-Windows 2000 access, on the network can connect to services, such as shares and printers, and can log on locally.
* Non-administrative users may log on locally and through remote desktop.
* Local accounts have not been explicitly denied access from the network.
* Print operators have not been denied the ability to load device drivers.
* Non-administrative users may shut down the system.

Reproduction Details
--------------------

Issue the following command from PowerShell.

```
secedit /export /cfg C:\temp\secedit.inf /log C:\temp\secedit.log
```

Review the section [Privilege Rights] in secedit.inf. See the following link to aide translation of SID to description.

* https://msdn.microsoft.com/en-us/library/cc980032.aspx

Systems Affected
----------------

  * ***SYSTEM***

Severity
--------

Medium – These configuration settings do not meet the recommended good business practice. Changing these settings to be in-line with a security benchmark will further harden the system by reducing possible attack vectors.

This finding indicates a lack of adherence to:

* NZISM 14.1. Standard Operating Environments
* NZISM 16.1. Identification and Authentication

Recommendation
--------------

Change the following settings via group policy. Verify that these settings do not break intended functionality.

* Set "Access this computer from the network" to "Administrators"
* Set "Allow log on through Remote Desktop Services" to "Administrators" and "Remote Desktop Users"
* Set "Deny access to this computer from the network" to "Guests, Local account"
* Set "Load and unload device drivers" to "Administrators"
* Set "Shut down the system" to "Administrators"
