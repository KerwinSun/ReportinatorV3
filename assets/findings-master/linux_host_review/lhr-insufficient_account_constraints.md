LHR-X Insufficient Account Constraints
======================================

Description
-----------
Several account configuration settings do not meet good practice:
***Update these as appropriate***
* Accounts are configured to create world readable files, by default.
* Password reuse is allowed.
* Passwords do not expire.
* The use of su is not sufficiently restricted.

Reproduction Details
--------------------
***Update these as appropriate***
To verify that accounts create writable files, by default, issue the following commands. This returned nothing. The umask command returned "0002".
```
egrep '^umask' /etc/bash*
egrep '^umask' /etc/profile*
```
To verify that the system is not remembering already used passwords nor restricting how often they can be changed, issue the following commands.
```
grep remember /etc/pam.d/*
grep PASS_MIN_DAYS /etc/login.defs
```
To verify that passwords do not expire, issue the following command. This returned "99999".
```
grep PASS_MAX_DAYS /etc/login.defs
```
To verify that the use of su is not sufficiently restricted, issue the following command. This returned comment lines.
```
grep wheel /etc/pam.d/su
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – This configuration does not follow the information assurance concept of defence in depth.

This finding indicates a lack of adherence to 16.1.23.

Recommendation
--------------
Lateral Security recommends that the following steps be taken to correct the configuration.
***Update these as appropriate***
* Set a more secure default umask of 077 or 027 in the bash configuration and /etc/profile.
* Make sure that password reuse is prevented by setting a "remember=5" directive in the PAM authentication configuration.
* Ensure that PASS_MIN_DAYS is set to 7 in login.defs, so that password cannot be changed in rapid succession to bypass the remember setting.
* Set password expiry to 90 days in login.defs.
* Restrict the use of su to users in the wheel group by uncommenting one of the two lines in "/etc/pam.d/su".
