WA-X Server-Side Request Forgery
===============================

Description
-----------
Server-side request forgery (SSRF) is a vulnerability where an end user can cause the server to perform outbound requests to additional resources. This allows attackers to request resources from the perspective of the server, leveraging any IP whitelisting that the server has been granted, internal network addresses the server can reach, and often includes local filesystem access as well. Depending on the implementation it may also allow an attacker to read or update sensitive resources.

Reproduction Details
--------------------
***SITE SPECIFIC***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
High/Medium – An attacker could exploit this vulnerability to obtain access to sensitive data, leveraging the connections and trust relationships available to the server. This could allow the attacker to use the target host to pivot to other associated hosts.

Recommendation
--------------
Lateral Security recommends either disabling this functionality or limiting the accepted URIs to a strict whitelist of intended hosts.
***The specific recommendation depends on the details of the vulnerability***
