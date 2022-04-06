WHR-X Weak File Permissions
===========================

Description
-----------
***Explain the directories and permissions identified***

Reproduction Details
--------------------
Review the permissions applied to ***LOCATION***.

Systems Affected
----------------
  * ***SERVER***

Severity
--------
High – An attacker that gained access as an unprivileged user could overwrite the ***APPLICATION*** binaries and effectively gain the ability to execute arbitrary code with the privileges of any user who logged in to the system afterwards.

Recommendation
--------------
Lateral Security recommends ensuring that all folder are assigned the minimum required permissions for the operation of the server. In this case, removing the ***GROUP*** group from having write access to the folders and instead granting the appropriate application user or groups access is recommended.
