ASA-X No Timestamps
===================

Description
-----------
In the current configuration of the device, logged events will not include timestamps. Timestamps provide important information that helps correlate events on multiple devices and the order in which those events took place.

Reproduction Details
--------------------
To verify that timestamps are not enabled, note that the following string is missing from the configuration.
```
logging timestamp
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Without timestamps, determining when events occurred relative to events elsewhere on the network can be unreliable. This increases auditing difficulty.

Recommendation
--------------
Configure the device to include timestamps for all logging messages. This can be done with the "service timestamps" directive. Please see Logging Best Practices in the Cisco Guide to Hardening for more information.
* http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html
