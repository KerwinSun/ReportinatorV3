ACR-X No Cloudtrail Logging
===========================

Description
-----------
CloudTrail records AWS API calls, however this logging functionality is not turned on. If this were turned on, actions taken by users could be reviewed as well as the resources which have been accessed. This information is stored in S3 buckets.

Reproduction Details
--------------------
From the AWS Management Console, click on CloudTrail. Notice that the "Get Started Now" button is displayed.

Severity
--------
Info – This does not represent a vulnerability in the configuration. However, it is being raised because some events within the VPC will go unrecorded. These events could be an important indication of malicious activity within the VPC environment.

Recommendation
--------------
Lateral Security recommends that CloudTrail logging be enabled within the VPC. More information on CloudTrail can be found at the following link:
  * https://aws.amazon.com/cloudtrail/