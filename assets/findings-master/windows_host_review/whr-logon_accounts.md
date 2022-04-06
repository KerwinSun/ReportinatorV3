WHR-X Logon Accounts
====================

Description
-----------

[Include account information]

Reproduction Details
--------------------
To see the local users on the system, issue the following command from PowerShell.

    get-wmiobject -class win32_useraccount -filter "LocalAccount='True'"

To see the administrators on the system, issue the following command from PowerShell.

    net localgroup administrators

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Info – This issue is being raised to give better visibility over whom has access.

Recommendation
--------------
Review this information. If too much access has been given, then remove the accounts which should not have access.

