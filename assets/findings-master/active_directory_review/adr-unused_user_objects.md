ADR-5 Unused User Objects
=========================

Description
-----------
Several user accounts were identified which are likely not needed for normal operation. These include accounts which have never recorded a log in or have not recorded a log in in the last six months.

Severity
--------
Low – If an attacker were to guess or acquire the password to one of the above accounts, then the intrusion may go unnoticed.

Recommendation
--------------
Conduct auditing of accounts which have not been recorded logins within a specific period to limit the number of redundant accounts and reduce the attack surface of the directory. Perform this auditing routinely.

