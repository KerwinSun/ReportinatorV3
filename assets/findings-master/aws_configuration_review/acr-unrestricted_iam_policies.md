ACR-X Unrestricted IAM Policies
===============================

Description
-----------
IAM policies define the access which is granted to principals in the AWS environment. Some of these polices have not been carefully restricted to allow only access which is needed by these principals.

The following policies allow full administrative privileges:
* list policies

Reproduction Details
--------------------
To see that some policies have been created with full administrative privileges, issue the following commands. For each policy listed by the command,
```
aws iam list-policies --output text
```
issue the following command:
```
aws iam get-policy-version --output text --policy-arn <POLICY> --version-id <POLICY_VERSION> --query "PolicyVersion.Document.Statement[?Effect == 'Allow’]"
```
Look for statements like "\*" Allow "\*".

Severity
--------
Low – Were a user or resource acting with the privileges granted by one of these policies compromised, then the entire AWS environment would be vulnerable. This configuration does not follow the principle of least privilege.

The following CIS benchmark recommendation has not been followed:
* 1.24 Ensure IAM policies that allow full "*:*" administrative privileges are not created

Recommendation
--------------
Carefully define policies so that attached principals may only perform actions required by the implementation. Never create or attach policies with full administrative privileges.
