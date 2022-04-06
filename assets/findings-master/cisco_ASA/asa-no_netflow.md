ASA-X No Netflow
================

Description
-----------
Netflow event logging is not enabled. Netflow event logging provides improved visibility of the traffic passing through a firewall. It can increase the chances of detecting unusual traffic entering or exiting the network.

Reproduction Details
--------------------
No lines exist in the configuration which begin with the following string.
```
flow-export
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – The absence of Netflow event logging will reduce the chances of detecting some forms of anomalous traffic. This might mean that attacks which would otherwise be caught will go undetected.

Recommendation
--------------
Enable Netflow event logging to improve the chances that attacks will be brought to the attention of network administrators. For more information on configuring Netflow, see the link below.
* https://www.cisco.com/c/en/us/td/docs/security/asa/special/netflow/guide/asa_netflow.html
