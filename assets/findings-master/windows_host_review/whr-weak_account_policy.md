WHR-X Weak Account Policy
=========================

Description
-----------

Several account policies on the host are not in line with good practice. These settings can be inherited from Group Policy for the domain, but are sometimes set locally on the host.

The current settings, which are weaker than recommended, are:

* Maximum Password Age - 120
* Minimum Password Age - 0 days
* Minimum Password Length - 8 Characters
* Enforce Password History - 5
* Account lockout threshold - 15
* Network security: Force Logoff when hours expire - not enabled

Reproduction Details
--------------------

Issue the following command from PowerShell.

```
secedit /export /cfg C:\temp\"$env:computername"\secedit.inf /log C:\temp\"$env:computername"\secedit.log
```

Review the "System Access" section of the output.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------

Medium – The current password policies would allow a user to set a password that is relatively short and would allow the user to change passwords in rapid succession, bypassing the password history enforcement. In addition, users will not be forced to log off after business hours. These settings to not follow good practice.

In 2012, a demonstration showed that 8-character passwords composed randomly from the characters which can be typed from a standard keyboard could be cracked in about 6 hours with the right equipment. Hardware performance has improved since then.

Leaving accounts logged in when not necessary provides attack paths for privilege escalation within a domain.

This finding indicates a lack of adherence to:

* 16.1. Identification and Authentication

Recommendation
--------------

To improve defence in depth, Lateral Security recommends the following account policy settings:

* Maximum Password Age - 60 days
* Minimum Password Age - 1 Day
* Minimum Password Length - 16 Characters
* Password History - 24 Passwords Remembered
* Account lockout threshold - 1-10 attempts
* Network security: Force Logoff when hours expire - enabled
