WA-X Information Disclosure
===========================

Description
-----------
Lateral Security identified several information disclosure issues with the web servers. The information disclosed assists in understanding the application environment and software.

Information revealed includes the following:
  * ***Server: Apache/1.2***
  * ***Fill me in***

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN***

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SITE***

Severity
--------
Info – The information revealed does not define the exact version of the technologies in use, so this data is of somewhat limited value to an attacker.

***If the information does identify versions and this leads to identification of vulnerabilities, increase the severity.***

An attacker may use this information to further plan more sophisticated attacks or identify the potential exploitability of vulnerabilities which are known to the attacker.

Recommendation
--------------
Ensure that the web server and its software components are configured to remove or restrict disclosing any system and version information as well as any verbose error information.
Any unused functionality and resources should be completely removed from the web server. Ensure that strict access rules apply to the functionality or resources that must be in
place, in order to prevent unauthorised access to it. Manually review all contents of the published web root to ensure only necessary files exist and accessible.

***More information about configuring this in IIS can be found at:***
