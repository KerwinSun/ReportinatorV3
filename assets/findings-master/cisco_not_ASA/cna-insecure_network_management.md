CNA-X Insecure Network Management
=================================

Description
-----------
SNMPv2c is being used. All versions of SNMP before version 3 lack cryptographic security, which helps to protect the sensitive diagnostic information and management access that SNMP is typically used for. SNMPv1 and SNMPv2 use a community string which traverses the network in the clear.

Reproduction Details
--------------------
To verify that SNMPv2 is in use, note that the following directive is included in the configuration.
    version 2c

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – The implementation remains vulnerable to traffic sniffing for any attacker who might gain access to the network. The type of information typically provided over SNMP includes that which might help an attacker enumerate hosts, devices, and acquire passwords.

This issue indicates a lack of adherence to NZISM 18.1.14.

Recommendation
--------------
Lateral Security recommends that only SNMPv3 be used for network management. Once this change has been made, the community strings should be changed. If the functionality provided by SNMP is not required by the implementation, then it should be disabled. Please see Fortify the Simple Network Management Protocol in the Cisco Guide to Hardening for more information.
  * http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html
