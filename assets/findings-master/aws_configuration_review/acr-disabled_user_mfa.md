ACR-X Disabled User MFA
=======================

Description
-----------
Multi-factor authentication (MFA) is any authentication configuration which requires two or more factors before requested access is granted. Examples of MFA include tokens or SMS codes sent to users. MFA is disabled for:
* users

Reproduction Details
--------------------
To see the users with MFA disabled, issue the following command and look under the “mfa\_active” column for a setting of “false”.
```
aws iam get-credential-report --query 'Content' --output text | base64 -d
```

Severity
--------
Low – If multi-factor authentication is not required for an account, then a compromised password could lead to a compromise of the environment. This configuration reduces the security of the AWS configuration.

The following CIS benchmark recommendation has not been followed:
* 1.2 Ensure multi-factor authentication (MFA) is enabled for all IAM users that have a console password

Recommendation
--------------
Ensure that all users are required to use MFA for authentication to the AWS environment and it resources.
