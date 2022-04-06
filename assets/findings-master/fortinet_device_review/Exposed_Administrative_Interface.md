CR-7 Exposed Administrative Interface
=====================================

Description
-----------
Remote management has not been disabled on the external interface. ***The remote interface, “wan0”, has been set to allow ping and https.***

Reproduction Details
--------------------
To see that remote management is enabled on the external interface, ***notice that the stanza for the configuration of “wan1” has not disallowed access. The example below provides an example of the “unset” directive, which is missing.***
config system interface
edit "wan1"
unset allow access

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Leaving this interface accessible increases the attack surface of the implementation. ***An interface, suitable for remote administration, the VPN, already exists. ***

Recommendation
--------------
Disable remote management on the external interface. Instead, one of the internal interfaces should be used by way of the VPN. See “Only allow administrative access to the external interface when needed” from the link below for more information.
  * https://docs.fortinet.com/document/fortigate/6.2.0/hardening-your-fortigate/612504/hardening-your-fortigate
