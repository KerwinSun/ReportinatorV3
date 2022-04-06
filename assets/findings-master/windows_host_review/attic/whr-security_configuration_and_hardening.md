WHR-X Security Configuration and Hardening
==========================================

Description
-----------

There are several security configuration settings and changes on the server that would improve the security of the operating system build.

***OBVIOUSLY CHANGE THESE***

These settings are as follows:

* Rename the 'Guest' Account
* Set 'User Account Control: Admin Approval Mode for the Built-in Administrator account' to 'Enabled'.
* Set 'Interactive logon: Number of previous logons to cache (in case domain controller is not available)' to '0'
* Set 'Interactive logon: Do not display last user name' to 'Enabled'
* Set 'Microsoft network client: Digitally sign communications (always)' to 'Enabled'
* Set 'Microsoft network server: Digitally sign communications (always)' to 'Enabled'
* Set 'Network security: Allow Local System to use computer identity for NTLM' to 'Enabled'
* Set the User right 'Access this Computer from the Network' to 'Administrators, Authenticated Users'
* Set the User right 'Bypass Traverse Checking' to 'Administrators, Users, Backup Operators, Local Service, Network Service'
* Set the User right 'Allow log on locally' to 'Administrators'
* Set 'Turn off Autoplay on:' to 'Enabled:All drives'
* TCP/IP Stack Hardening in line with the MSS Settings in the CIS Security Guide for Windows Server 2012 section 1.1.3.10

Reproduction Details
--------------------

To see the services running on the system, issue the following command. Note that the services enumerated in the description are running.

```
auditpol /get /category:*
```

Systems Affected
----------------

  * ***SYSTEM***

Severity
--------

Low – While none of these will lead to an immediate compromise of the system or network, without hardening, the chances of an attack being successful are higher.

Recommendation
--------------

Audit and harden the Operating Systems of the server in line with the CIS Windows Server 2012 Benchmark or the Microsoft Security Configuration guide for Windows Server 2012. Ensure that the required settings are documented, and that any deviations from the standards are noted and have a proper business justification.
