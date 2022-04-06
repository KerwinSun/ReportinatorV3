ASA-X Unrestrictive Rules
=========================

Description
-----------
Several network access control lists are too permissive. This exposes sensitive services such as administrative interfaces and allows the use of insecure services, such as those which use clear-text protocols. ***See Appendix B for a list of the unrestrictive rules recorded during this review.***

In addition, no rule exists to restrict access to the control pane as a “catch all”.
```
access-list <name> in interface <Interface_name> control-plane
```
Reproduction Details
--------------------
Observe the lines enumerated in the description and appendix of this issue in the configuration of the devices.

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – If network access control lists are too permissive, sensitive subnets and their services can be more easily attacked. This could lead to a compromise of the affected environments.

Recommendation
--------------
The rules should be made more restrictive, defining source, destination, and service if no business justification exists for their permissiveness.

