WHR-X No AppLocker
==================

Description
-----------

A version of SNMP prior to version 3 has been enabled. These older versions of the protocol are not secure. SNMPv1 and SNMPv2 lack cryptographic security which helps to protect the sensitive diagnostic information and management access that SNMP provides. SNMPv1 and SNMPv2 use a community string for access control, and this string traverses the network in the clear. The default community strings have been configured with read access.

Reproduction Details
--------------------

To reproduce this finding, issue the following command.

```
get-itemproperty hklm:\system\currentcontrolset\services\snmp\parameters\validcommunities
```

Windows versions prior to 2012 did not support SNMPv3.

* https://docs.microsoft.com/en-us/windows/win32/snmp/supported-versions?redirectedfrom=MSDN

SNMP was deprecated in 2012.

* https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh831568(v=ws.11)?redirectedfrom=MSDN

Systems Affected
----------------

  * ***SYSTEM***

Severity
--------

Medium – By using insecure network management, the implementation remains vulnerable to traffic sniffing for any attacker who might gain access to the network. The type of information typically provided over SNMP includes that which might help an attacker enumerate hosts, devices, and possibly even acquire passwords.

This issue indicates a lack of adherence to:

* NZISM 18.1. Network Management

Recommendation
--------------

Older version of SNMP should be replaced with SNMPv3 or a more secure solution, and segregated to a dedicated management network, or it should be disabled.
