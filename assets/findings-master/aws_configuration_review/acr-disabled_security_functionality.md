ACR-X Disabled Security Functionality
=====================================

Description
-----------
The following functionality within AWS is not enabled:
  * AWS Config records resource configurations, allowing a review of the history of configuration changes within the environment, as well as compliance auditing
  * AWS Inspector performs automated security assessments

Reproduction Details
--------------------
To see that AWS Config is not enabled, issue the following command.

    aws configservice get-status

The status of AWS Inspector can be seen by clicking on the Inspector link in the AWS Console.

Severity
--------
Low – This finding does not indicate that an exploitable vulnerability exists within the environment. However, not enabling AWS Config reduces visibility of events, which makes it more difficult to detect malicious events.

If AWS Inspector is not enabled, then easily detectable insecurities within the environment may go unnoticed.

The following CIS benchmark recommendation have not been followed:
  * 2.5 Ensure AWS Config is enabled in all regions

Recommendation
--------------
Enable AWS Config in all regions. Ensure global resources are included in the record. See the CIS AWS Foundations Benchmark for more information.

Consider enabling AWS Inspector and monitoring its findings on a routine basis.


