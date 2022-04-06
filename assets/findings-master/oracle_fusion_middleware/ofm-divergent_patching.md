OFM-X Divergent Patching
========================

Description
-----------
The running kernels on the Oracle Enterprise Linux hosts are the Oracle UEK (Unbreakable Enterprise Kernel) variant. However, the hosts are being patched against the upstream vendor's (RedHat) kernel. This has created a mismatch as the patching process is not providing a UEK kernel.

No patching process currently exists for third-party software which includes Apache Tomcat, Oracle WebLogic, Oracle HTTP Server, Oracle Database, and Oracle SOA. This software has been installed manually and is not backed by any software management solution. As such, future patches would have to be applied manually across the hosts individually.

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – The process used to patch the hosts is not effective. Some host software might have critical vulnerabilities and never be patched. This could lead to a compromise of internal systems and a loss of sensitive data.

Recommendation
--------------
Ensure that a patching policy exists which mandates all of the following:
  * Patches deemed to be "important" or "critical" by either the operating system or third-party software vendors must be implemented as quickly as possible. This should be conducted separately from any regular patch cycle in order to minimise the potential exposure period.
  * Include Oracle UEK kernel packages into the managed YUM repository.
  * Investigate whether it is possible to manage third-party software installations through the package repository of the operating system vendor. This will create a consistent method for both installing and updating the software. 
  * All third party software installations that are not native to the operating system installation should be documented. Regular checks for software updates should be conducted. All patches must be applied as rapidly as possible.
  * Ensure systems are rebooted after kernel upgrades have been performed.