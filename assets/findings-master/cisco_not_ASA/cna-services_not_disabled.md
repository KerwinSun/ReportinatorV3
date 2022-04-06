CNA-X Services Not Disabled
===========================

Description
-----------
The following services have not been explicitly disabled on the device. By default, these services will be running.
  * Finger
  * BOOTP
  * DHCP
  * MOP
  * CDP
  * LLDP
  * Configuration retrieval vis TFTP

In addition, it will attempt to perform DNS resolution.

Reproduction Details
--------------------
To verify that these services have not been disabled, note that the following strings are missing in the configuration.
    no ip finger
    no ip bootp server
    ip dhcp bootp ignore
    no service dhcp
    no mop enabled
    no service pad
    no service config
    no cdp run
    no cdp enable
    no lldp run
    no lldp transmit
    no lldp receive
    no ip domain-lookup

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – The services enabled on the device do not represent a vulnerability, but do increase attack surface. Were a vulnerability discovered in one of these services, the device might become remotely exploitable. Allowing DNS resolution could be used to set up bidirectional communication to the Internet via DNS tunnelling.

Recommendation
--------------
Lateral Security recommends explicitly disabling the services enumerated in this issue if those services are not needed. Please see General Management Plane Hardening in the Cisco Guide to Hardening for more information.
  * http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html
