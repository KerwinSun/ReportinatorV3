ASA-X No Unicast RPF
====================

Description
-----------
Unicast reverse path forwarding (RPF) helps prevent IP spoofing attacks without having to add many additional rules to the configuration. This feature has not been enabled in the configuration.

The following interfaces do not have unicast RPF verification enabled.
* ***inside***
* ***outside***

Reproduction Details
--------------------
To see that unicast RPF is not configured, note that no lines beginning with the following string are present in the configuration.
```
ip verify reverse-path
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – An attacker could use a spoofed source address to perform denial of service attacks on the device.

Recommendation
--------------
Ensure that unicast RPF verification is enabled. More information on unicast RPF can be found at the following location.
* https://www.cisco.com/c/en/us/about/security-center/unicast-reverse-path-forwarding.html
