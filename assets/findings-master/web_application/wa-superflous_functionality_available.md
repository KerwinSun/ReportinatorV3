WA-X Excessive Functionality Available
======================================

Description
-----------
Lateral Security identified functionality which needlessly increases the attack surface of the application. Redundant functionality can be accumulated by an application through a number of means, such as:
* Endpoints added as test or development aides.
* Deprecated functionality which has been superseded but can still be interacted with.
* Functionality or sample applications added by libraries, frameworks or exposed through the default configuration of the underlying software platform.

In this instance, the functionality identified was:
* ***FILL ME IN***

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
Medium – The exposure of unnecessary functionality provides a great attacker surface than strictly necessary for the functioning of the application. This could allow an attacker to attempt to identify vulnerabilities within the extraneous functionality. Deprecated or development-related functionality is typically tracked less effectively than core application functionality and as such may not receive as much attention in terms of security vulnerability assessment and hardening.

Recommendation
--------------
It is recommended that the application only expose the functionality required to achieve its objectives and that further content and functional endpoints are removed from the solution. Wherever possible, this should be achieved via deletion rather than a software toggle to reduce the threat of future misconfiguration exposing the content in future.
