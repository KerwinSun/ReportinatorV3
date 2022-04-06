ACR-X Insufficient Auditing
===========================

Description
-----------
Insufficient auditing occurs within the Azure account.
* Network Watcher is disabled. Network Watcher provides information about the network. Since Network Watcher is disabled, flow logs are also disabled. Flow logs give an overview of the traffic entering and exiting a network.
* Activity logs are not retained. Activity log records events at the subscription level, concerning service health and operational data.
* At least some key vaults will not retain logs. Key vault logs give visibility over how keys and secrets are accessed.

Reproduction Details
--------------------
To see that Activity Logs are not retained, browse to the following location.
* Activity log -> Export -> Retention

To see that Network Watcher flow is not enabled, browse to the following location.
* Network Watcher -> NSG flow logs

To see that KeyVault logs are not retained, browse to the following location.
* Key vault -> key -> Diagnostic Logs -> Edit Settings -> Then verify that archive to a storage account is set and AuditEvent is set with a retention of 180 days.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – This finding has been raised because some events within the account are not monitored. These events would be an important indication of malicious activity within the account environment. If malicious activity remains unmonitored and unrecorded, then incident response will be delayed. Such a scenario might lead to severe reputational damage, were the discovery to occur by service disruption to customers or sensitive information disclosure to the public.
Network activity in other regions might indicate malicious activity. This is more certain if only one region is being used.

Recommendation
--------------
Ensure that activity logs are retained for at least 1 year. KeyVault logs should be retained for at least half a year.
Ensure that NSG Flow Logs have been enabled in all regions and monitor these logs for anomalous traffic. Anomalies should be investigated as this might be an indication of environment compromise.
* https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-nsg-flow-logging-portal
