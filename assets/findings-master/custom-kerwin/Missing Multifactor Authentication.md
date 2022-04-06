Missing Multifactor Authentication
=================================

Description
-----------
Multifactor authentication (MFA) is security control which prevents the compromise of credentials directly resulting in the compromise of user accounts. This is commonly achieved by requiring the user to supply static data (username, password) with dynamic data (HOTP/TOTP token) to prevent replay attacks and provide additional verification of the user’s identity. 

Lateral Security observed a lack of multifactor authentication associated with App developer accounts. 

Reproduction Details
--------------------
Log in to the portal with a Party Secretaries account, noting that Multifactor controls are not enforced.

Systems Affected
----------------
The following affected by this issue:
* *test.api.msd.govt.nz

Severity
--------
Low – Multifactor Authentication is an effective security control against the use of compromised accounts details to access protected resources. It should be noted that the low privileges associated with the account reduces the overall severity of account compromise. However, an option to enable Multifactor Authentication should still be available as a means of hardening the system. 

Recommendation
--------------
Lateral Security recommends supporting Multifactor Authentication controls for all account types.