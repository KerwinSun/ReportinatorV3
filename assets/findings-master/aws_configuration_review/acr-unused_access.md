ACR-X Unused Access
===================

Description
-----------
Some users have not accessed their accounts within at least the previous 90 days. Unused access indicates that some access might not be necessary.

The following users have not recently logged in.
* users

Reproduction Details
--------------------
To see which users have not recently logged in or used their access keys, issue the following command.
```
aws iam get-credential-report --query 'Content' --output text | base64 --decode
```

Severity
--------
Low – Unused access increases the attack surface of the environment because it provides another vector (valid credentials) of attack.

The following CIS benchmark recommendation has not been followed:
* 1.3 Ensure credentials unused for 90 days or greater are disabled

Recommendation
--------------
All unrequired access should be revoked. If users no longer require access, their accounts should be removed. If access keys are not needed, these should be deleted.
