SDR-X Insufficient Password Policy
==================================

Description
-----------
Password policy includes the creation, changing, and expiration of passwords within an organisation or implementation. The design does not describe password policy concerning:
  * Password length
  * Password complexity
  * Password expiration
  * How often passwords may be changed
  * Password reuse

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Medium – If a password could be guessed or brute forced, then the implementation remains vulnerable to compromise. This could lead to corruption of data, exfiltration of data, and ultimately to reputation damage to the organisation.

Recommendation
--------------
Password policy should mandate that passwords:
  * Have a minimum length of 10 characters consisting of at least 3 character classes or
  * Have a minimum length of 16 characters with no complexity requirements
  * Be changed every 90 days
  * Not be changed more often than 1 time a day
  * Be changed upon password reset
  * Not be the same within 8 resets
