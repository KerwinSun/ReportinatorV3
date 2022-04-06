ACR-X No MFA Delete
===================

Description
-----------
S3 buckets with versioning enabled can be set to require multi-factor authentication before an object can be deleted. This functionality has not been enabled for any buckets in the environment.

Reproduction Details
--------------------
To see that no buckets employ MFA on deletion, issue the following command.

    for i in `aws s3api list-buckets --query "Buckets[*].Name" --output text`; do
        aws s3api get-bucket-versioning --bucket $i --query 'MFADelete' --output text
    done

This returns, “None”, for each bucket.

Severity
--------
Low – If MFA delete is not enabled, the accidental deletion of objects is more likely to occur. Leaving this feature disabled also lowers the difficulty for an attacker with valid credentials to delete sensitive objects.

Recommendation
--------------
Ensure that MFA delete has been enabled for the S3 buckets which contain sensitive information.
