ASA-X Insecure Network Management
=================================

Description
-----------
Management of the network devices uses a version of SNMP prior to version 3. These older versions of the protocol are not secure. SNMPv1 and SNMPv2c lack cryptographic security which helps to protect the sensitive diagnostic information and management access that SNMP provides. SNMPv1 and SNMPv2c use a community string for access control, and this string traverses the network in the clear. ***The devices are configured to use the default community string.***

Reproduction Details
--------------------
***Observe the following lines in the configuration.*** These tell the ASA not to pass SNMP v1 and version 3 traffic through the device. Version 2c is not denied. This indicates that version 2c is used on the networks.
```
snmp-map asa_snmp_map
deny version 1
deny version 3
```
***Observe that the following string exists within the configuration.*** The existence of "community" means that either v1 or v2c of SNMP is in use by the device itself.
```
snmp-server [...] community [...]
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – The devices are vulnerable to traffic sniffing for any attacker who might gain access to the network. The type of information typically provided over SNMP includes that which might help an attacker enumerate hosts, devices, and possibly even acquire passwords.

This finding indicates a lack of adherence to NZISM 18.1.14.

Recommendation
--------------
SNMPv2c should be replaced with SNMPv3 for all devices on the network. Network management traffic should be segregated to a dedicated management network or it should be disabled.
