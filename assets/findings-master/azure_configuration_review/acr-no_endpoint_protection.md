ACR-X No Endpoint Protection
============================

Description
-----------
Endpoint protection has not been detected on at least one VM. As a result, this VM might not be protected against malware. Malware detection events will not be reported to Security Center.

Reproduction Details
--------------------
To see VMs which do not have endpoint protection, browse to the following location:
* Security Center -> Compute -> VMs and computers

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – Malware could infect the server without being detected, quarantined, or reported. This could lead to downtime, data loss or corruption, or reputational damage.

Recommendation
--------------
Ensure that endpoint protection is installed, that malware definitions are updated daily, and that alerts are logged centrally and monitored. Any failures to update definitions or failure of the antivirus software should generate an alert and be investigated. In addition, Lateral Security recommends the use of host IDS software to monitor critical system and application files on the VMs, and report any unauthorised changes to these files. For more information, see the link below.
* https://docs.microsoft.com/en-us/azure/security-center/security-center-install-endpoint-protection
