WA-X Administrative Interface Accessible
========================================

Description
-----------
Administrative interfaces or login pages were found to be exposed to the Internet. To limit the attack surface of the system, it is good practice to ensure that only the functionality which is required during normal operation is accessible. Administrative content is typically only utilised by a small subset of users and as such should not be exposed publicly where avoidable.

The administrative content was available at the following URL:
  * ***URL***

Reproduction Details
--------------------
To reproduce this issue, browse to the URL noted in the description section.

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium – The exposure of administrative functionality provides a greater attack surface than strictly necessary for the functioning of the application. This could allow an attacker to attempt to identify vulnerabilities within systems governing authentication to the administrative content or within the administrative functionality itself. Without an authentication bypass vulnerability, it is pertinent to note that this typically requires an attacker to guess, intercept or otherwise obtain the credentials to gain administrative access to the site.

Recommendation
--------------
Lateral Security recommends that access to administrative content be limited using robust network controls such as IP whitelisting to a predefined whitelist of source IP addresses or TLS client authentication. Additionally, placing the administrative interface on a different subdomain from the main web site, with appropriately scoped session cookies, should be considered.

Two-factor authentication should be strongly considered as an additional control which would significantly limit the impact of credentials becoming compromised.
