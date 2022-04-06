WHR-X Weak File Permissions
===========================

Description
-----------
Multiple directories were identified with weak permissions. The antivirus software contained logs which were world-writable by all users on the systems. 
These were found in numerous locations under:
  * location...

Reproduction Details
--------------------
Review the permissions applied to ***LOCATION***.

Systems Affected
----------------
  * ***SERVER***

Severity
--------
Low – If an attacker were to gain low-level privileges on the servers using an exploit which the antivirus software alerted on, then they could erase evidence of that.

Recommendation
--------------
Lateral Security recommends ensuring that all folders are assigned the minimum required permissions for the operation of the server. In this case removing write access to the log folders and instead granting only the necessary application users or groups access is recommended.