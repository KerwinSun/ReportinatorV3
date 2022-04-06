WHR-X IIS Insecure Communication
================================

Description
-----------
The web server configuration does not secure communication for all websites:

* Some websites do not require transport layer security, which would affect any Basic authentication.
* Form submitted information will not require transport layer security.

Reproduction Details
--------------------
To see that some websites to not require Transport Layer Security, issue the following command in PowerShell:
```
Get-Website
```
To see that form submitted information will not require transport layer security, issue the following command in PowerShell.
```
Get-WebConfiguration -filter /system.web/authentication/forms
```

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – If data is sent unencrypted to the web server, then an attacker might capture and exfiltrate or alter the data. The organisation could suffer reputational damage from malicious use or leaks of the data.

Recommendation
--------------
All websites which submit information via forms should require transport layer security. Websites which authenticate with basic authentication should also.
