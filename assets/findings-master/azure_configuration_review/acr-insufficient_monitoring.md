ACR-X Insufficient Monitoring
=============================

Description
-----------
Sufficient monitoring has not been configured within the Azure account. Monitoring facilitates governance, compliance and auditing of the AWS environment. The following steps have not been taken.
* Standard tier has not been enabled for some subscriptions, so those subscriptions will not benefit from threat and anomaly detection and intelligence.
* Automatic provisioning has not been enabled for some subscriptions.
* Alerts have not been configured for events which might indicate malicious activity
* Traffic Manager has not been correctly configured to monitor endpoints

Reproduction Details
--------------------
To see that standard tier has not been enabled for some subscriptions, browse to the following location.
* Security Center -> Security Policy -> [name of subscription] -> pricing tier

To see that automatic provisioning has not been enabled, browse to the following location.
* Security Center -> Security Policy -> [name of subscription] -> data collection

To see that alerts have not been configured, view the Azure Alerts configuration.

To see that endpoints are degraded, browse to the following location.
* Traffic Manager -> [profile name]

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – If sufficient monitoring is not configured, then events which indicate malicious activity might go unnoticed. This could lead to further exploitation of the environment by an attacker than what would have otherwise occurred.

Recommendation
--------------
Consider enabling standard tier for all subscriptions. Enable automatic provisioning to more closely monitor events on VMs. Configure Traffic Manager so that useful alerts are sent to administrators when an endpoint has failed.
* https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-monitoring

Ensure that the alerts and other recommendations of a well-known security benchmark are followed during configuration of the account. See sections 2 and 5 of the Microsoft Azure Foundations Benchmark for more information.
* https://www.cisecurity.org/cis-benchmarks/
