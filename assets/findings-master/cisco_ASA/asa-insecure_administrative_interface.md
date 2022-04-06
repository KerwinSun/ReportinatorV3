ASA-X Insecure Administrative Interface
=======================================

Description
-----------
A clear-text administrative protocol, Telnet, is enabled on the device. Telnet provides a command line interface to administrators, but the communication takes place unencrypted. Telnet, developed in 1969, was one of the earliest TCP/IP protocols.

Reproduction Details
--------------------
The following line exists in the configuration.
```
aaa authentication telnet console LOCAL
```

The following string does not exist in the configuration of the device.
```
no telnet [...]
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – Were an attacker to gain access to the network between the administrator using Telnet and the device, the attacker could view or alter the communication. This could lead to a compromise of the device or the capture of sensitive credentials.

Recommendation
--------------
Telnet should be disabled on all devices. A more secure protocol, such as SSH, should be used instead. Network filtering should prevent the use of clear-text protocols, such as Telnet, FTP, and others, by restricting the use of their common port numbers.
