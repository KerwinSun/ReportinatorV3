WHR-X No Application Whitelisting
=================================

Description
-----------

Application whitelisting is not enabled. Application Whitelisting helps prevent the execution of files which have not been explicitly allowed. Application whitelisting is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Cyber Security Centre to help prevent compromise.

* https://www.cert.govt.nz/it-specialists/critical-controls/application-whitelisting/
* https://www.cyber.gov.au/publications/essential-eight-explained

There are multiple tools available for implementing Application Whitelisting depending on the environment. Windows Defender Application Control is the current method recommended by Microsoft for Windows 10 build 1903+ and Windows Server 2016 and above. AppLocker is an older technology which may be suitable if the environment is mixed and there is a need/requirement to have the same policies applied. AppLocker may also be more suitable if different policies need to be applied to different users on shared PCs.

Reproduction Details
--------------------

To see that Windows Defender Application Control is not enabled, view the following record within Group Policy:

  * Computer Configuration > Administrative Templates > System > Device Guard


To see that AppLocker is not enabled, issue the following command.

```
get-applockerpolicy -effective
```

Systems Affected
----------------

  * ***SYSTEM***

Severity
--------

Medium – A standard system installation contains many executables which might not be required for the intended purpose of the system. Without application whitelisting, an attacker could take advantage of a vulnerability in one of these system executables, or could execute an arbitrary file from a location which the attacker may write to. Application whitelisting decreases the attack surface of a system.

This finding indicates a lack of adherence to:

* NZISM 14.1. Standard Operating Environments
* NZISM 14.2. Application Whitelisting

Recommendation
--------------

Enable Application Whitelisting to harden systems. The configuration should explicitly allow only approved applications. For recommendations on the overall approach, see:

  * https://www.cert.govt.nz/it-specialists/critical-controls/application-allowlisting/implementing-application-whitelisting/

A baseline of recommendations can be found at the link below under the subsection, "6.4 AppLocker configuration".

  * https://www.gov.uk/government/publications/end-user-devices-security-guidance-windows-10/end-user-devices-security-guidance-windows-10#recommended-policies-and-settings
