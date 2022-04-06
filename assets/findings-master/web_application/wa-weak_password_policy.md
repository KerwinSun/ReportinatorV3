WA-X Weak Password Policy
=========================

Description
-----------
Username and password policies are a key security control to protect against user introduced weaknesses. The login system poses the following requirements / restrictions on the user’s password:

***Must be 5-10 characters long, and must contain two categories from: 
* Uppercase
* Lowercase
* Number
* Special Character***

***These requirements encourage users to take the simplest available option, selecting weak passwords due to maximum length restrictions.
Maximum password length restrictions are frequently used where applications do not hash the provided passwords before storage.
If this is the case for the platform, then it is strongly recommended that a password hashing algorithm which is designed to withstand offline brute force attacks, such as BCrypt or SCrypt is used.***

Reproduction Details
--------------------
Review the password policy presented when creating registering a password. Attempt to set a weak password and observe that it is allowed. 

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – Restricting the maximum length for a user’s password enforces a limit for the strongest possible password strength, which given typical user password selection methods, results in greater predictability of values. This weakness is also applicable should the credential database be compromised, providing attackers a smaller brute-force candidate space.


Recommendation
--------------
NZISM recommends a password policy enforcing either:
A minimum password length of 16 characters with no complexity requirement; or
a minimum password length of ten characters, consisting of at least three of the following character sets:
* lowercase characters (a-z);
* uppercase characters (A-Z);
* digits (0-9); and
* punctuation and special characters.

If the minimum password length is 16 characters or greater, no periodic expiry is required.
However, if the minimum password length is shorter than 16 characters:
* Passwords should be set to expire after 90 days
* The system should prevent users from changing their password more than once per day
* The system should disallow password reuse within eight password changes
