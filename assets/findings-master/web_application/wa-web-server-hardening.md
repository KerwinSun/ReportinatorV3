WA-X Web Server Hardening
=========================

Description
-----------
The web server displayed behaviour that leads Lateral Security to believe that it has not undergone security hardening. Many of the default features present can be disabled to improve security. If left enabled, these features could cause security issues in the future and aid attackers by providing additional information and methods of attack. 

The following are general recommendations around web server hardening:
* Review and remove unnecessarily hosted files.
* Disable unused features such as SSI, CGI, and web server modules.
* Ensure that the web server is run by a user with limited access.
* Disable headers that identify the software in-use and version (e.g.: Web Server, Operating System etc.)
* Disable directory listing.
* Disable unused HTTP request methods such as TRACE, TRACK and CONNECT.
* Disable support for the HTTP 1.0 protocol.
* Ensure the ETag header does not include Inodes.
* Check Session Timeout, Request Limits, and Request Body Size are configured appropriately.
* Consider adding appropriate web server security modules.
* Ensure appropriate logging is enabled and configured securely.

Reproduction Details
--------------------
The behaviours observed that lead to this recommendation were:
* Directory Listing was enabled for the application at the following URLs:
* https://example.com/file-share/
* Web server and Operating system versions were found both in headers and in error pages:
* https://example.com/error.aspx

Systems Affected
----------------
The following systems are affected by these issues:
* ***SITE***
Additionally, this may affect other out-of-scope applications that are hosted on the same machine.

Severity
--------
Low – A lack of web server hardening does not constitute a vulnerability, but it does increase both the attack surface and provide useful information to an attacker. For example, directory listings give attackers more information about the system and can leak sensitive information. While version numbers allow attackers and automated tools to more precisely exploit applications when vulnerabilities are found. 

Recommendation
--------------
Lateral Security recommends that an appropriate hardening guide for the web server be followed such as those provided by Center for Internet Security here:
* https://www.cisecurity.org/cis-benchmarks/
***In this case Lateral Security recommends that directory listing be disabled, and any version information removed.*** A review and web server hardening exercise should be carried out to ensure that the server has been configured securely according to a reputable benchmark.
