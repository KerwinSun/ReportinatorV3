ACR-X Disabled Just-In-Time Access
==================================

Description
-----------
Just-in-time access has not been configured for some subscriptions. It allows an authorised user to access administrative interfaces for limited timespans, which have been defined in policy. This helps to reduce the exposure of these sensitive interfaces to attackers. Access is invoked by the authorised user with the portal or from PowerShell.

Reproduction Details
--------------------
To see that just-in-time access control has not been enabled, browse to the following location.
* Security Center -> Recommendations -> Apply Just-In-Time network access control

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – Not using this feature will not endanger the implementation if access to administrative interfaces is limited by other means. If no other means have been enabled, then this will leave the interfaces vulnerable to certain attacks. Leaving this feature disabled contravenes the recommendation of the vendor.

Recommendation
--------------
Configure just-in-time access if a business requirement for remote administrative access exists. Consider limiting exposure to administrative interfaces through a VPN, to which access is itself limited and monitored.
