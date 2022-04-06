GHR-X Unsecured IPv6 Configuration
==================================

Description
-----------
IPv6 is enabled on several systems, but has not been secured. IPv6, Internet Protocol version 6, is a replacement for IPv4 currently used for addressing most of the Internet. IPv6 comes enabled by default on many operating systems and network devices, but this is often forgotten and IPv6 security measures are frequently omitted.

Reproduction Details
--------------------
To see that a Windows host is configured for IPv6, issue the following command from PowerShell.
ipconfig|select-string IPv6
To see that a Linux host is configured for IPv6, issue the following command from the console.
ifconfig|egrep inet6

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Any exposed service and protocol increases the chances that vulnerabilities of a system, its attack surface, will be discovered. IPv6 provides an additional vector of attack in the environment and network controls for this protocol are often left out of an implementation. An attacker might be able to reach a host or service over IPv6, even if access over IPv4 has been blocked.
Enabling IPv6 does not create a vulnerability, by itself.

Recommendation
--------------
Microsoft does not recommend disabling IPv6 support on Windows operating systems, citing potential stability concerns:
"Internet Protocol version 6 (IPv6) is a mandatory part of Windows Vista and later versions. We do not recommend that you disable IPv6 or its components, or some Windows components may not function."
  * http://support.microsoft.com/kb/929852
Unless IPv6 will be used by the implementation, Lateral Security recommends prohibiting IPv6 communication through Windows Firewall. Create new inbound firewall rules to deny communication for all services for both IPv6 and ICMPv6. NDP is a subset of ICMPv6. Preventing such communication will prevent NDP from successfully communicating.
The implementation of IPv6 networks will continue to increase, just as its addressing has increased on the Internet. If a policy does not exist which speaks to this trend and how the organisation will leverage it, then consider such a policy and how IPv6 services will be secured.
