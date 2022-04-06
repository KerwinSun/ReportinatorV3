ASA-X Insecure Timeouts
=======================

Description
-----------
Some administrative services will not automatically terminate sessions which have had no activity after a recommended defined timeout period. ***The SSH interface has a long timeout of 30 minutes. The console and HTTPS interfaces have no timeout set.***

Reproduction Details
--------------------
Search for the following strings in the configuration.
```
ssh timeout
console timeout
```
For HTTPS, no “class-map” has been defined with a default connection timeout of 10 minutes or fewer.

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – If recommended timeouts are not configured, then the chances that an attacker might gain control of an open administrative session increases. The ease of this attack would somewhat depend on the physical security of the console.

Recommendation
--------------
Reduce SSH timeout to 10 minutes from 30.
```
ssh timeout 10
```
The console had no timeout. This should be set to 10 minutes.
```
console timeout 10
```
No HTTPS server session timeout was set. This should be set to 10 minutes. See the link below for more information.
* https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/68332-pix7x-connection-timeout.html
