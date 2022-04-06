CNA-X No Timestamps
===================

Description
-----------
Events, which are to be logged, will not include timestamps. Timestamps provide important information that helps correlate events on multiple devices and the order in which those events took place.

Reproduction Details
--------------------
To verify that timestamps are not enabled, note that the following string is missing from the configuration.
service timestamps

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Without timestamps, finding when events occurred relative to events elsewhere on the network requires guesswork. This increases auditing difficulty.

This finding indicates a lack of adherence to NZISM 16.5.11.

Recommendation
--------------
Configure the device to include timestamps for all logging messages. This can be done with the "service timestamps" directive. Please see Logging Best Practices in the Cisco Guide to Hardening for more information.
  * http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html
