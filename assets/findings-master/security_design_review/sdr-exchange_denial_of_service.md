SDR-X Exchange Denial of Service
================================

Description
-----------
Active Directory password policy includes account lockout after 5 invalid logon attempts. Active Directory logon is exposed to the Internet through both Active Sync and Outlook Web Access (OWA) as well as the connectivity to the wireless network. Incorrect logon attempts to Exchange services will result in the corresponding Active Directory Account being locked out.

Reference
---------
***Which section of which document are we referring to?***

Severity
--------
High – An attacker could perform a denial of service attack. Repeated attempts to authenticate to Outlook or ActiveSync will lock out Active Directory accounts. This would lead to a loss of staff productivity and a denial of service to customers.

Recommendation
--------------
Limit authentication against Active Directory to trusted devices. Unsuccessful logon attempts through the Exchange should be set to one fewer than the Active Directory Account Lockout setting to prevent a denial of service while still preventing unlimited password attempts.