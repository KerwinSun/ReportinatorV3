O365-X Insufficient Auditing
============================

Description
-----------
Insufficient auditing has been conducted in the environment. Recording events and frequent auditing of those records gives an organisation visibility over the environment. Visibility enables the organisation to remain aware of configuration changes which can reduce the security of the environment and who made the changes.
The following components of the Office 365 environment have not been reviewed at least once a week.
* audit data (audit log or activity API)
* signs-ins after multiple failures report
* role changes
* mailbox forwarding rules
* malware detections report
* account provisioning activity report
* non-global administrators

The following components of the Office 365 environment have not been reviewed at least once a week.
* mailbox access by non-owners report

The following Office 365 capability has not been enabled.
* enable mailbox auditing for all users
* malware notifications

Risky sign-ins, which indicate bad logging attempts, such as from outside the country, are not enabled.

Reproduction Details
--------------------
To see that some components have not been reviewed as often as is recommended by the vendor, visit the following link.
* https://securescore.microsoft.com/

To see that malware notifications have not been enabled for users and administrators, browse to the following location.
* protection.office.com -> Threat management -> Policy -> Anti-malware

To see that Risky sign-ins have not been enabled, browse to the following location in the Azure portal.
* Azure Active Directory -> Risky sign-ins

Severity
--------
Medium – Insufficient auditing makes awareness of compromise and locating the source of compromise more improbable.

This finding indicates a lack of adherence to the following New Zealand Information Security Manual controls.
* NZISM 7.2.12. Reporting information security incidents
  * https://www.nzism.gcsb.govt.nz/ism-document#1184
* NZISM 15.2.12. Email server maintenance activities
  * https://www.nzism.gcsb.govt.nz/ism-document#1734
* NZISM 16.5.14. Event log auditing
  * https://www.nzism.gcsb.govt.nz/ism-document#1983

This finding indicates a lack of adherence to the following vendor recommendation.
* Enable mailbox audit logging

Recommendation
--------------
Ensure that recorded events are audited weekly and bi-weekly, as enumerated in the description of this issue. Audit policy should clearly delegate monitoring responsibility. The metrics recommended by the SecureScore website should be enabled. Revisit this website after these recommendations have been followed.
Ensure that administrators are notified of malware being sent to the organisation so that appropriate mitigation steps can be taken. Consider warning users.
