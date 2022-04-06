WA-X No Account Lockout
=======================

Description
-----------
After attempting to log into the application with an incorrect password a large number of times, it was identified there is no account lockout implemented on the login screen. This means if a valid user name is obtained (which are not considered secret) a malicious user can attempt to brute force a password. In the current state, hundreds of passwords can be attempted per minute.

For perspective, based on unrelated password databases leaked to the Internet the top 10,000 passwords represent 99.8% of user passwords. This means an account’s password can likely be brute forced in little time, even if variations of the passwords are tried (inserting capital letters, substituting letters for numbers, etc).

Reproduction Details
--------------------
To reproduce this issue attempt to log in to the application with an invalid password over twenty times. Observe the account is not locked out.

Systems Affected
----------------
The following ***host is/hosts are** affected by this issue:
  * ***SITE***

Severity
--------
Medium – ***DESCRIBE THE BUSINESS IMPACT OF ACCOUNTS BEING COMPROMISED***

Recommendation
--------------
Lateral Security recommends an account lockout is implemented on the login screen. In order to prevent denial of service attacks, the account should automatically unlock after a fixed period of time and as further incorrect password attempts are made, the account lockout time should increase.
