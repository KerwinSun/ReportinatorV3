ACR-X Infrequent Access Key Rotation
====================================

Description
-----------
Access keys within the AWS account are infrequently rotated. Access keys are used by applications, such as the CLI or SDK, to make requests to AWS. Rotating these keys frequently reduces the chance that a compromised key can be used by an attacker.

The following user’s key has not been rotated in the last 90 days.
* access key name

Reproduction Details
--------------------
To see that some keys have not been rotated in the last 90 days, issue the following commands.
```
aws iam get-credential-report --query 'Content' --output text | base64 --decode
```

Severity
--------
Low – Unrotated keys increase the chances that a compromised key can be used to gain control of resources within the environment. Rotating keys reduces this window of opportunity.

The following CIS benchmark recommendation has not been followed:
* 1.4 Ensure access keys are rotated every 90 days or less
* 2.8 Ensure rotation for customer created CMKs is enabled

Recommendation
--------------
Ensure that access keys are rotated every 90 days. Keys which are not used should be deleted from the account.
