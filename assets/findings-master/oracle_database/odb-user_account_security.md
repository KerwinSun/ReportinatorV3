ODB-X User Account Security
===========================

Description
-----------
A single user account profile of "DEFAULT" exists within the database instances. The following user account security options are set: 
  * Passwords may be reused indefinitely. 
  * Unlimited number of sessions per user account. 

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Allowing passwords to be reused defeats the purpose of forcing passwords to be changed. Users can choose the same password or from among several passwords when a password change occurs. This weakened the security provided by authentication mechanisms and might enable an attacker to more easily enter a system.

If the number of sessions allowed per user is not restricted, the host could be more susceptible to a denial of service attack. This occurs when a user opens too many sessions, exhausting the memory of the host.

Recommendation
--------------
Consider setting restrictions on password reuse. Investigate whether it is appropriate to limit the number of open sessions for particular accounts. In particular, administrative accounts would most likely benefit from such a restriction.
