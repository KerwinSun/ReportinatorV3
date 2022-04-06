ASA-X Insecure Authentication
=============================

Description
-----------
The devices do not follow authentication good practice. The administrative interfaces are configured to use Radius instead of TACACS+ and the NTP client does not authenticate its communication with the NTP server.

Reproduction Details
--------------------
To see that Radius is being used instead of TACACAS+, observe that there are lines in the configuration like the following.
```
aaa authentication ssh console Tacacs
```
To see that NTP communication is not authenticated, observer that no line like the following exists in the configuration.
```
ntp authenticate
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Some portions of the communication with the Radius authentication server will take place in the clear. This could allow an attacker to gain some information about valid credentials, such as the username. If NTP communication is not authenticated, then it might be possible to establish a rogue time server to supply the devices with false time information, making timestamps unreliable.

Recommendation
--------------
Consider using TACACS+ for authentication and enable NTP authentication.
