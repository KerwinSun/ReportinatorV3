ACR-X No Centralised Log Facility
=================================

Description
-----------
CloudWatch is not configured to accept log data from instances in the VPC. CloudWatch can be configured to act as a centralised log host. It can also be used to send alerts when certain recorded conditions are met.

Reproduction Details
--------------------
From the AWS Management Console, click on Identity and Access Management. From the resulting left menu, click on Roles. One role exists. Click on it. Look for the following line, which indicates that a logging resource exists in the configuration. During testing, it was not found.

    "arn:aws:logs:*:*:*"

Severity
--------
Info – This does not represent a vulnerability in the configuration. However, it is being raised because a lack of a centralised log host in the implementation does not meet best practice.

Recommendation
--------------
Lateral Security recommends that CloudWatch be enabled and that all EC2 instances be configured to send host event logging to that facility for collection and analysis.

More information can be found at the links below:
  * https://aws.amazon.com/cloudwatch/
  * http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CWL_GettingStarted.html