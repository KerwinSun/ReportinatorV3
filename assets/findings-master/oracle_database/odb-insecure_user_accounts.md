ODB-X Insecure User Accounts
============================

Description
-----------
The following user account issues were identified:  
  * The database instance has a user account named "test". This account has minimal privilege. However, if this account is a test account it may have an insecure password. 

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – User accounts should be documented and managed appropriately to ensure inappropriate or unauthorised access is not permitted. Oracle Database has been vulnerable to privilege escalation vulnerabilities.

Recommendation
--------------
The identified account is not likely to be needed for normal operation and should therefore be removed. 