SDR-X Insufficient Database Security Policy
===========================================

Description
-----------
The design does not detail the steps taken to secure the database. It neither enumerates roles nor defines the privileges which will be assigned. Database hardening is not detailed in the design.

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Low – Without sufficient documentation, it is impossible to determine whether security requirements have been met. If roles are not defined, then it remains unclear whether the appropriate roles will be created after sign off. Roles might have too much authority or there might be too many, unnecessarily increasing the attack surface of the implementation.

Recommendation
--------------
The design should enumerate the roles which will be needed by the applications of the implementation. These roles should be strictly defined. Policy should describe when application users should be added and removed from these roles.
Database hardening should occur. Care should be given to the configuration of the TNS listener interface. Strong encryption should be enabled. The CIS Oracle has good recommendations for hardening of the Oracle database.
  * https://benchmarks.cisecurity.org/downloads/multiform/index.cfm
