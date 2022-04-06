WHR-X Antivirus Definitions Out of Date
=======================================

Description
-----------
At the time of the review in ***Month***, the Virus and Spyware Protections definitions on the Symantec Endpoint protection software were from ***Date***, ***two*** months prior to the review. As a result, the server will not be protected against new malware or variants of malware introduced during that period.

Reproduction Details
--------------------
Open the ***Symantec Endpoint Protection*** console and view the date on the last definition update.

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SITE***

Severity
--------
Medium – A new or recently altered piece of malware could infect the server without being detected or quarantined by the ***Symantec Endpoint Protection*** software on the server.

This finding indicates a lack of adherence to NZISM 14.1.7.

Recommendation
--------------
Ensure that the Antivirus receives definition updates on a daily basis, and that alerts are logged centrally and actioned appropriately. Any failures to update definitions or failure of the antivirus software should generate an alert and be investigated. In addition, Lateral Security recommends the use of host IDS software to monitor critical system and application files on the server, and report any unauthorised changes to these files.
