ACR-X Insufficient VPC Flow Logging
===================================

Description
-----------
VPC Flow Logs have been enabled for one region, but not for other regions. VPC Flow Logs give an overview of the traffic entering and exiting a VPC.

Reproduction Details
--------------------
To see that other regions are not using VPC Flow Logs, issue the following command for each region.
```
aws ec2 describe-flow-logs
```
"FlowLogStatus": "ACTIVE" is only shown in [region].

Severity
--------
Medium – Network activity in other regions might indicate malicious activity. This is more likely if only one region is being used by the implementation.
The following CIS Benchmark recommendation has not been followed:
* 4.3 Ensure VPC flow logging is enabled in all VPCs

Recommendation
--------------
Ensure that VPC Flow Logs have been enabled in all regions and monitor these logs for anomalous traffic.
