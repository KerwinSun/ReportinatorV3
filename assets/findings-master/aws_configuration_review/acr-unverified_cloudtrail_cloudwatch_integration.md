ACR-X Unverified CloudTrail CloudWatch Integration
==================================================

Description
-----------
Lateral Security could not verify that CloudTrail had been integrated into CloudWatch. CloudWatch can perform realtime monitoring of the events captured by CloudTrail.

Reproduction Details
--------------------
Issue the following command.
```
aws cloudtrail get-trail-status --name <trail name>
```
This returns an error.

Severity
--------
Info – This is being raised as an informational issue because a good practice could not be verified. If CloudTrail events are not monitored by CloudWatch, then some of these events, which might indicate malicious activity, may go unnoticed.

The following CIS benchmark recommendation might not have been followed:
  * 2.4 Ensure CloudTrail trails are integrated with CloudWatch Logs

Recommendation
--------------
Consider integrating CloudTrail into CloudWatch. An appropriate retention period has been set. By default, CloudWatch will retain logs indefinitely. For more information, see the CIS AWS Foundations Benchmark.
  * https://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf
