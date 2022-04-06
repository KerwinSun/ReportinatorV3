ACR-X Infrequently Patched Hosts
================================

Description
-----------
The virtual machines (VMs) are missing system updates from the vendor. Patching is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Signals Directorate to help prevent compromise.

Reproduction Details
--------------------
To see that some systems are missing vendor updates, browse to the following location:
* Security Center -> Compute -> VMs and computers

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
High – Some of the missing updates might include patches for privilege escalation and arbitrary code execution. This finding might indicate that routine patching is not occurring or that some components in the environment have not been included in the patching policy.

Recommendation
--------------
Ensure that systems are patched and that a patching policy clearly delegates patch release monitoring and patch application responsibility. All critical vulnerabilities should be patched within 48 hours of their publication. Perform regular audits of these processes. For more information, see the link below.
* https://docs.microsoft.com/en-us/azure/security-center/security-center-apply-system-updates
