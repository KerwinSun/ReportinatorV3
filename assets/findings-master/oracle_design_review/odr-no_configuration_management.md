ODR-X No Configuration Management
=================================

Description
-----------
The provided documentation does not explicitly detail the post-installation configuration that must be implemented. Currently, a manual process must be conducted to complete the following tasks:
  * Configuration of rsyslog.
  * Installation and configuration of a monitoring solution and instances of third-party software (such as OHS and Weblogic).
  * Manual modification of OHS configuration files. It is unclear how the necessary details are currently stored and managed.
  * General system hardening efforts, with the exception of additional configuration conducted through Kickstart scripts.
  * Custom configuration of third-party software to conduct the server's role.

In the event that a system requires replacement or a rebuild, the process is manual with no central documentation of the necessary changes.

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – The rebuild process will likely take a substantially long time. A successful attack which forces a rebuild would have a greater overall impact on the solution due to downtime. Without an automated system in place, rebuild documentation becomes essential to recover from a security event in a timely manner.

Recommendation
--------------
Modern Unix-based systems rely on both build scripts and configuration management to quickly build a host when required. Build scripts limit the amount of human intervention required. It is debatable whether the creation and management of such a system is worthwhile for a limited number of systems. Systems such as Puppet are seen as industry-standard solutions, but they are not likely to be suitable for more complex Oracle software installations such as Oracle Database and WebLogic.

If an automated approach is not to be conducted, then sufficiently detailed documentation on the system build process must be created.

Consider estimating the required time to rebuild the solution from scratch and identify the documentation that must be finalised for it to occur. If the rebuild time is potentially unacceptable, possibly due to SLA metrics, consider implementing a configuration management process.
