ACR-X No Centralised Log Facility
=================================

Description
-----------
Diagnostic settings have not been configured to accept log data from VMs. Diagnostic settings can be configured to act as a centralised log host. It can also be used to send alerts when certain recorded conditions are met.

Reproduction Details
--------------------
To see that no centralised log facility has been configured for the VMs, browse to the following location.
* More services -> type “Diagnostic settings”

No VMs have been configured.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – Were a VM compromised, the attacker might erase or manipulate local logs, hindering incident response. This finding indicates that VMs might not be actively monitored, since VMs would have to be monitored individually. Without centralised logging, the synthesis of events from multiple VMs and devices within the environment into a timeline becomes more difficult.

Recommendation
--------------
Lateral Security recommends that Diagnostic settings be configured to accept VM event logging for collection and analysis. VMs should likewise be configured to send these logs. For more information, see the link below.
* https://docs.microsoft.com/en-us/azure/security/azure-log-audit
