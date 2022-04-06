DR-X Technical Testing Recommended
==================================

Description
-----------
Based on the security analysis carried out by Lateral Security, a number of technical testing assurance activities are recommended. The following diagram provides context on the environment:

***Insert diagrams***

The following testing is recommended:
  * Firewall rulebase review - this will ensure that the firewall rules between zones only allow the minimum traffic required for the implementation. In particular, management traffic is expected, along with database traffic from the application VLAN to the database VLAN. HTTPS traffic is expected in to the application VLAN.
  * Web application penetration testing - this will identify any potential vulnerabilities within the web application.
  * Mobile application penetration testing and/or code review - this will identify any vulnerabilities within the mobile application. Of particular concern is ensuring that data is encrypted while cached on the device.
  * Data warehouse hardening review - this should ensure that other tenants using the data warehouse cannot gain access to the data for the application.

*** These are obviously examples, fill these out as appropriate ***

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Info – This observation is raised to capture recommended technical testing as determined from the Security Design Review.


Recommendation
--------------

