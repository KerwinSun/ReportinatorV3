CNA-X Unhardened Network Settings
=================================

Description
-----------
Several network hardening settings do not meet good practice.
  * service tcp-keepalives-in disabled
  * service tcp-keepalives-out disabled
  * IP redirects are enabled
  * ICMP unreachables are enabled
  * no fragmentation checks are performed

TCP keepalives ensure that the device on the remote end of the connection is still accessible and that half-open or orphaned connections are removed from the local Cisco IOS device.
If a host tries to use the wrong router to route a packet, then the router sends an ICMP redirect response (IP redirect) back to the host to inform it to use a different route. This consumes resources on the router.

ICMP unreachable messages are enabled. When an access list has been applied to an interface and traffic is determined to be filtered by that configuration, ICMP unreachable messages are sent back to the origin address. This consumes resources on the router.

The device is not configured to prevent fragmented packets on external or high-risk interfaces. This is configured through network access control lists which are applied to the interfaces. IP fragmentation can be used to bypass intrusion detection systems because the contents of a packet are split among several packets, obscuring context.

Reproduction Details
--------------------
To verify that TCP keepalives have not been configured on the devices, note that the following strings are missing from the configuration.
    service tcp-keepalives-in
    service tcp-keepalives-out

To verify that IP redirects have not been disabled, note that the following string is missing from the configuration.
    no ip redirects

To verify that ICMP unreachable have not been disabled, note that the following string is missing from the configuration.
    no ip unreachables

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – A malicious user can exploit the ability of the router to send ICMP redirects by continually sending packets to the router, which forces the router to respond with ICMP redirect messages and results in an adverse impact on the CPU and performance of the router. A similar denial of service can also be achieved using ICMP unreachables.

If TCP keepalives are not set, then the device will have a more difficult time determining whether an open connection is a dangling session. This might be exploited by an attacker to consume resources on the device.

Recommendation
--------------
Unless there is a business requirement for IP redirects and ICMP unreachables, the configuration should include the directives referenced in the reproduction details of this issue. Consideration should be given to setting TCP keepalive on the devices. Please see General Data Plane Hardening in the Cisco Guide to Hardening for more information.
  * http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html

