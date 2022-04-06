ACR-X Insufficient Password Policy
==================================

Description
-----------
The AWS account does not have a sufficient password policy set. The Identity and Access Management password policy enables the following controls to be enforced, but these have not been set to the values recommended by the CIS benchmark.
  * MinimumPasswordLength has been set to 8
  * PasswordReusePrevention has been set to 3

Reproduction Details
--------------------
To see that the password policy does not meet recommendations, issue the following command.
    aws iam get-account-password-policy

Severity
--------
Medium – Password content requirements increase the overall security of your AWS environment by enforcing the creation of strong user passwords. If good password requirements are not set, an attacker can more easily brute force logins. The following CIS benchmark recommendations have not been followed:
  * 1.9 Ensure IAM password policy requires minimum length of 14 or greater
  * 1.10 Ensure IAM password policy prevents password reuse

Recommendation
--------------
Lateral Security recommends that:
  * the password minimum length requirement exceed the recommendation of CIS by requiring at least 16 characters
  * the password reuse requirement prevent the use of the last 24 passwords
