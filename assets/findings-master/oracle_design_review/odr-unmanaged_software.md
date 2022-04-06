ODR-X Unmanaged Software
========================

Description
-----------
Some software examined is not managed by the software repository that has been explicitly set up for the environment. This software includes:
  * Oracle HTTP Server
  * WebLogic
  * Apache Tomcat

Installation "answer" files may be provided to hasten the process, but an administrator must initiate the installation. Updates to the above installed software must be manually tracked and correlated against hotfixes or new releases provided by the software vendor.

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – This process is prone to human error and would likely delay implementation of critical patches.

Recommendation
--------------
Amend the build process to install the software directly from a software repository. Consider automatically installing updates from the vendor which patch critical vulnerabilities.