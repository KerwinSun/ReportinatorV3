WHR-X No Host IDS software on Servers
=====================================

Description
-----------
While the servers were found to have Symantec Endpoint Protection (SEP) antivirus installed and active and performing regular scans, the Host based IDS component of SEP is not installed for the servers. There was no additional host-based intrusion detection software installed. Host-based IDS monitors the integrity of system objects such as critical system or application files, identifies any changes to those objects and generates an alert or report for investigation. 
 
Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – While the servers have current antivirus software installed to protect against known malware, there is no mechanism for identifying changes to critical system files or other system objects. As a result, a malicious user or attacker could make changes to the system without detection.

Recommendation
--------------
Lateral Security recommends that the servers are configured with the organisation's standard antivirus product, configured to run on-access scans and regular full scans of the file system. Ensure that the Antivirus solution receives definition updates on a daily basis, and that alerts are logged centrally and actioned appropriately. In addition, Lateral Security recommends the use of host IDS software to monitor critical system and application files on the server, and report any unauthorised changes to these files.
