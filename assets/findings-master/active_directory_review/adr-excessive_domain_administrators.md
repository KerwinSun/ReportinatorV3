ADR-X Excessive Domain Administrators
=====================================

Description
-----------

The following is a list of accounts with Domain Administrator privileges. Domain administrator privileges should be limited to accounts which strictly require it. As such, the number of accounts identified is excessive.

Severity
--------
High – The number of domain administrator accounts is significant. If an attacker were to gain local administrative access on a host that a domain administrator has logged in to, the attacker could freely harvest the Windows token and conduct privilege escalation. The attacker would have the privilege of a domain administrator.

Recommendation
--------------
Conduct a review of all accounts, which have domain administrator privileges. Identify the requirement for each account needing such access. Where possible, reduce the privilege of accounts. This is particularly prevalent for any service accounts.
