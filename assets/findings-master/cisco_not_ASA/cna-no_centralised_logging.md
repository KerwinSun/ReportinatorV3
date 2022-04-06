CNA-X No Centralised Logging
============================

Description
-----------
The configuration does not include a central log host. A central log host provides a facility for duplicate logging off-host, thereby increasing defence-in-depth and easing auditing.

Reproduction Details
--------------------
In the configuration, look for a line with the following string. This line is not present.
    logging host

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – Were a device to become compromised, logs which might indicate the compromise or how the compromise occurred could be erased or otherwise tampered with on the device. Devices are not often monitored individually. So, this might suggest that events are not being monitored at all. Logs on a device do not persist after a reboot unless the device contains non-volatile storage and is configured to keep the logs.

This finding indicates a lack of adherence to NZISM 16.5.12.

Recommendation
--------------
Lateral Security recommends that all device events be sent to a central log host and that the log host be configured to notify staff when events, which might point to a network compromise, occur. Please see Logging Best Practices in the Cisco Guide to Hardening for more information on logging best practices.