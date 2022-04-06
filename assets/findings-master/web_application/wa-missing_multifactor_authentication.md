WA-X Missing Multifactor Authentication
=============

Description
-----------
Multifactor authentication (MFA) is security control which prevents the compromise of credentials directly 
resulting in the compromise of user accounts. 
This is commonly achieved by requiring the user to supply static data (username, password) with dynamic data (HOTP/TOTP token) to prevent 
replay attacks and provide additional verification of the user’s identity.


Reproduction Details
--------------------
Log in to the portal, noting that Multifactor controls are not enforced.


Systems Affected
----------------
The following ***application(s) / host(s) is/are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – Multifactor Authentication is an effective security control against the use of compromised accounts details to access protected resources. 
*** PROVIDE IMPACT EXAMPLES FOR THE SPECIFIC CONTEXT***

Recommendation
--------------
Lateral Security recommends ***enforcing/supporting***  Multifactor Authentication controls for ***all/administrative*** accounts.

