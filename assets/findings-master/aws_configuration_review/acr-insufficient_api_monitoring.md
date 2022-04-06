ACR-X Insufficient API Monitoring
=================================

Description
-----------
CloudTrail records API calls made in the AWS account. These calls include those made through the command line interface and the Management Console. CloudTrail facilitates governance, compliance and auditing of the AWS environment. Some important API calls are not being monitored by CloudTrail.

The information recorded by CloudTrail is stored in an S3 bucket. Access and modifications to this bucket are not being logged.

Reproduction Details
--------------------
To see that access to the bucket is not logged, issue the following command.
    aws s3api get-bucket-logging --bucket [bucket]
This returns nothing.

To see that recommended calls are not filtered for monitoring, issue the following command.
    aws logs describe-metric-filters --log-group-name [TrailLogGroup]
This will return:
    "metricFilters": []

Severity
--------
Medium – This finding has been raised because some events within the account are not monitored. These events would be an important indication of malicious activity within the account environment. If malicious activity remains unmonitored and unrecorded, then incident response will be delayed. Such a scenario might lead to sever reputational damage, were the discovery to occur by service disruption to customers or sensitive information disclosure to the public.

The following recommendations have not been followed:
  * 2.6 Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket
  * 3.1 Ensure a log metric filter and alarm exist for unauthorized API calls
  * 3.2 Ensure a log metric filter and alarm exist for Management Console sign-in without MFA
  * 3.3 Ensure a log metric filter and alarm exist for usage of "root" account
  * 3.4 Ensure a log metric filter and alarm exist for IAM policy changes
  * 3.5 Ensure a log metric filter and alarm exist for CloudTrail configuration changes
  * 3.6 Ensure a log metric filter and alarm exist for AWS Management Console authentication failures
  * 3.7 Ensure a log metric filter and alarm exist for disabling or scheduled deletion of customer created CMKs
  * 3.8 Ensure a log metric filter and alarm exist for S3 bucket policy changes
  * 3.9 Ensure a log metric filter and alarm exist for AWS Config configuration changes
  * 3.10 Ensure a log metric filter and alarm exist for security group changes
  * 3.11 Ensure a log metric filter and alarm exist for changes to Network Access Control Lists (NACL)
  * 3.12 Ensure a log metric filter and alarm exist for changes to network gateways
  * 3.13 Ensure a log metric filter and alarm exist for route table changes
  * 3.14 Ensure a log metric filter and alarm exist for VPC changes

Recommendation
--------------
Lateral Security recommends that more API calls be monitored by CloudTrail. Access to the S3 bucket which stores CloudTrail logs should be logged. See the CIS benchmark for more information.
 * https://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf
