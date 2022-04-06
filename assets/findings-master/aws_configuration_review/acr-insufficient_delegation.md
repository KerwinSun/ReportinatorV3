ACR-X Insufficient Delegation
=============================

Description
-----------
Any user with full control of IAM can control any other part of the AWS account. No IAM Master and IAM Manager roles have been configured to divide and delegate the configuration privileges that IAM allows.

Reproduction Details
--------------------
To see that no IAM Master and IAM Manager roles have been configured, issue the following command.
```
aws iam list-roles
```
If the roles were configured, their attached policies could be reviewed with the following command.
```
aws iam get-role-policy --role-name <role name>
```

Severity
--------
Low – If IAM configuration privileges are not divided and delegated to separate roles, then the chances for a user with IAM access to escalate their privileges to those equal to the root account increase.
The following CIS benchmark recommendation has not been followed:
1.18 Ensure IAM Master and IAM Manager roles are active

Recommendation
--------------
Create two new roles, IAM Master and IAM Manager. In addition, both policies should require MFA.
```
"Condition": {"Bool": {"aws:MultiFactorAuthPresent": "true"}}
```
No user or group should be able to assume both roles. Refer to the CIS benchmark for the policies which should be attached. For more information, see:
* https://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf
