WHR-X No Host Based Firewall
============================

Description
-----------
A host based firewall has not been enabled. Host based firewalls are an important part of defence in depth, working in tandem with a network firewall to ensure that communication, unrequired by an implementation, is blocked. Host based firewalls also help prevent the spread of a successful attack if network penetration has been achieved.

Reproduction Details
--------------------
Review the "Windows Firewall with Advanced Security" application.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – If an attacker can compromise a system within the same security zone, network, or some other domain that has access to this reviewed system, compromise of the latter system might be possible.

This finding indicates a lack of adherence to:

* NZISM 14.1. Standard Operating Environments

Recommendation
--------------
Ensure that systems are configured with a host-based firewall, which permits only required traffic, both inbound and outbound. Restricting network access on network firewalls as well as on host systems adheres to the defence in depth security doctrine.
