O365-X Insufficient Data Loss Prevention
========================================

Description
-----------
Insufficient steps have been taken to prevent data loss from the implementation. The following features in Office 365 have not been enabled.
* Client Rules Forwarding Block has not been enabled.
* Information Rights Management (IRM) is not used.

Client Rules Forwarding Block prevents users from setting rules which automatically forward emails to address outside the organisation.
* https://blogs.technet.microsoft.com/office365security/mitigating-client-external-forwarding-rules-with-secure-score/

IRM helps prevent data loss via email by controlling who can access data stores in emails.
* https://technet.microsoft.com/en-us/library/dn792011.aspx

Reproduction Details
--------------------
To see that Client Rules Forwarding Block and IRM have ot been enabled, visit the following link.
* https://securescore.microsoft.com/

Severity
--------
Medium – Data from email communications might be exfiltrated through automatic forwarding rules. Without classifying data through IRM, all rights management will be managed by human actions.

This finding indicates a lack of adherence to the following New Zealand Information Security Manual control.
* NZISM 15.2.10. Automatic forwarding of emails
  * https://www.nzism.gcsb.govt.nz/ism-document/#1734
* NZISM 22.1.24. Unauthorised Access
  * https://www.nzism.gcsb.govt.nz/ism-document#4760

Recommendation
--------------
Consider enabling Client Rules Forwarding Block and IRM in the Office 365 configuration.
