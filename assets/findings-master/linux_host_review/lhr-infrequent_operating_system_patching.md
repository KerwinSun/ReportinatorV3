LHR-X Infrequent Operating System Patching
==========================================

Description
-----------
The system operating system receives patches from the vendor infrequently. Patching is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Signals Directorate to help prevent compromise. Below are samples from each reviewed system, which show the most recently applied patch and patch date.

*** Update this ***

SYSTEM
\[package\] \[date\]

Reproduction Details
--------------------
To reproduce this issue, issue the following command.

DEBIAN	egrep '( install | upgrade )' /var/log/dpkg.log
RED HAT	rpm -qa --last

***At least four critical security advisories have been published since these systems have received updates.***
https://access.redhat.com/errata/#/?q=&p=1&sort=portal_publication_date%20desc&rows=10&documentKind=PortalProduct&portal_severity=Critical&portal_advisory_type=Security%20Advisory

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – ***The likelihood is high that the reviewed systems are affected by at least four vulnerabilities, which the vendor has raised as critical.*** Were an attacker to successfully exploit an unpatched system, the system could be compromised. The system could then be used as a platform to launch other attacks within the environment.

This does not comply with NZISM 12.4.

Recommendation
--------------
Ensure that the systems are patched and that a patching policy clearly delegates patch release monitoring and patch application responsibility. All critical vulnerabilities should be patched within 48 hours of their publication. Perform regular audits of these processes.
