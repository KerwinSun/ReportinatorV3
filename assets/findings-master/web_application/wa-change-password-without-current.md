WA-X Change User Details without Existing Password
====================================

Description
-----------
The change password functionality does not require the user to enter their existing password before being able to set a new value.
This allows an attacker who has compromised a user’s session to update their password, maintaining persistent access and preventing the user from authenticating to the system in the future.

Additionally, the change email address functionality does not require the user’s current password.
This allows an attacker to change the registered email address, then leverage the "forgot password” workflow to reset the user’s password.

Reproduction Details
--------------------
Login and attempt to change the user’s email address or password, noting that the change occurs without requiring the user’s password.

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – If an attacker has compromised an active session, then they can change the user’s password and deny the victim future access to their account.
This allows the attacker to gain future access to the victim’s account.

Recommendation
--------------
Lateral Security recommends requiring users to re-enter their password when making changes to sensitive information, such as email address, phone number or password.
