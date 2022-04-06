ACR-X User Attached IAM Policies
================================

Description
-----------
IAM policies are attached to users instead of being attached to groups and roles. This increases the complexity of managing privileges in the account. The following users have policies attached.
  * [include users]

Reproduction Details
--------------------
For each user returned by the command:

    aws iam list-attached-user-policies

View the output of:
```
iam list-attached-user-policies --user-name <user>
```
and:
```
aws iam list-user-policies --user-name <user>
```

Severity
--------
Low – If policies are attached directly to users, then chances increase that some users will retain unintended privileges.

The following CIS benchmark recommendation has not been followed:
* 1.16 Ensure IAM policies are attached only to groups or roles

Recommendation
--------------
Ensure that policies are attached to role and groups, and that users are assigned to these.
