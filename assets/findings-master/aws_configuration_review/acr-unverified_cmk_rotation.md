ACR-X Unverified Customer Master Key Rotation
=============================================

Description
-----------
Lateral Security could not verify that a customer master key is set to rotate. Customer master keys are used by services within an AWS account to encrypt data. Rotating the keys in the key management service helps prevent older keys from accessing newer data.

Reproduction Details
--------------------
Issue the following command using the AWS CLI.

    aws kms get-key-rotation-status --key-id [key-id]

Lateral Security received the following error.

***include error***

Severity
--------
Info – This is being raised as an informational issue because a good practice could not be verified.

Recommendation
--------------
Issue the command included in the reproduction details as a user with sufficient privileges. Verify that the key is set to rotate.
