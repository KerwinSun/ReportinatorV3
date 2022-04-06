LHR-X Disabled SELinux
======================

Description
-----------
*** if it is permissive, change this description and the title above ***

Security-enhanced Linux (SELinux) is not enabled. SELinux provides additional security to a system by restricting the system resources that each system process may use. These restrictions can prevent specific classes of attacks. A well-configured SELinux may halt some privilege escalation exploits.

Because SELinux is disabled, the system defaults to a "permissive" state.

Reproduction Details
--------------------
To verify that SELinux is not enabled, issue the following command:

    getenforce

The following excerpt is from the SELinux configuration file:

    *** SELINUX=disabled ***

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – This configuration does not follow the information assurance concept of defence in depth. A disabled SELinux may leave the system vulnerable to mitigable exploits found in other software.

This finding indicates a lack of adherence to NZISM 14.2.4.

Recommendation
--------------
SELinux defines access controls for the applications, processes, and files on a system. It uses security policies, which are a set of rules that tell SELinux what can or cannot be accessed. A policy must be created for each process. The vendor should provide these policies, when possible. For further information on SELinux and its implementation, please refer to the official, operating system vendor manual.
