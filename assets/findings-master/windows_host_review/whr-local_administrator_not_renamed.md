WHR-X Local Administrator Not Renamed
=====================================

Description
-----------
The built-in, local, administrator account has neither been renamed from "Administrator" to a unique value, nor has it been disabled. The local Administrator account is a common target for attackers. Account lockout policies do not apply to this account, so an attacker who has knowledge of the username could repeatedly attempt to brute force the password.

Reproduction Details
--------------------
Issue the following command from PowerShell and look for "New AdministratorName" in the "secedit.inf" file.
```
secedit /export /cfg C:\temp\secedit.inf /log C:\temp\secedit.log
```
This will say "Administrator", which indicates that the account has not been renamed. To see that Administrator is enabled, issue the following command from PowerShell and look in the "Status" column for Administrator. This will say "OK", which indicates that the account is enabled.
```
get-wmiobject -class win32_useraccount -filter "LocalAccount='True'" | export-csv C:\temp\win32_useraccount.csv
```

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – The Administrator account provides full access to the operating system, including removing or changing any of the security controls. Leaving the account enabled may provide an opportunity for an attacker to gain access to this account. This account does not lock-out. It could be vulnerable to a brute force attack. This is not a vulnerability, but it does not follow good practice.

Recommendation
--------------
Rename the local administrator account and disable it. All administration should be performed using individual domain accounts for administrative users. In addition, any use or attempted use of the local administrator account should be monitored and investigated.
