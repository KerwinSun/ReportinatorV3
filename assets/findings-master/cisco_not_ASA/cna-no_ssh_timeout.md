CNA-X Unhardened SSH Configuration
==================================

Description
-----------
Several settings in the network device configurations, which would harden their SSH service, are missing. The device is not configured to provide local authentication for an SSH user as a fall back, were the network authentication to fail. The SSH service will not automatically terminate sessions which have had no activity after a defined timeout period. SSHv1 has not been explicitly disabled to prevent SSHv1 clients from connecting.

Reproduction Details
--------------------
To verify that no authentication has been configured for a local SSH user, notice that the following string is absent from the configuration.
    aaa authentication ssh console LOCAL
To verify that no SSH session timeout has been set, notice that the following string is absent from the configuration.
    ssh timeout
To see that SSHv1 has not been explicitly disabled, notice that the following string is absent in the configuration.
    ssh version 2

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – If the central authentication server fails or the network connection between it and the network devices fails, then it would be impossible to administer the devices. The lack of a timeout could allow an attacker to hijack a session, which has been left unattended. If SSHv1 is not explicitly disabled, then it might be possible for an SSHv1 client to connect to the device. This connection could be intercepted by an intermediary and compromised because SSHv1 has known weaknesses.

Recommendation
--------------
Ensure that local authentication has been configured for SSH, that an SSH timeout has been set, and that only SSHv2 connections are allowed. Please see SSHv2 in the Cisco Guide to Hardening for more information.
  * http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html
