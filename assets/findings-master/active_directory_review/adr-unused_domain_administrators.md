ADR-X Unused Domain Administrators
==================================

Description
-----------
Domain administrators can administer the domain and can create new user accounts, register computers, and change security settings. There are domain administrators in Active Directory which have not logged in for 6 months or more. This means that those accounts are not used any longer or that the people assigned those accounts do not need those permissions on a regular basis.

Severity
--------
High – The chances are increased that a domain administrator account will be compromised by having more domain administrator accounts in Active Directory. While some people require domain administrator credentials as part of the regular administration of the network, the number of accounts should be limited.

Recommendation
--------------
Conduct a review of all accounts which have domain administrator privilege. Identify the requirement for each account needing such access. Where possible, reduce the privilege of accounts. This is particularly prevalent for any service accounts.
