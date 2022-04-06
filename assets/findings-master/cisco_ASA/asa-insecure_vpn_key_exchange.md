ASA-X Insecure VPN Key Exchange
===============================

Description
-----------
When negotiating an IPSec VPN tunnel, IKE is used. It can operate in one of two modes: main or aggressive. The Virtual Private Network (VPN) is configured for aggressive mode, which minimises the number of requests by sending a hash of the pre-shared key to the VPN service. An attacker who obtains this hash would be able to recover the pre-shared key with sufficient time by using brute force. The group name of the VPN needs to be known for a successful attack.

Reproduction Details
--------------------
Aggressive mode is enabled by default. Observe that the following line is missing from the configuration.
```
crypto ikev1 am-disable
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – An attacker could brute force the group name and encryption keys of the VPN session and gain complete access to the network. Depending on the strength of the VPN group name and pre-shared key, this may require some time. However, once the group name has been established, cracking the key can be performed offline. In the case of trying to crack the 3DES encryption, an attacker would need to perform a man in the middle attack to intercept the traffic first.

Recommendation
--------------
Lateral Security recommends that the VPN be configured to use main mode rather than aggressive mode for the initial session establishment. This will prevent the pre-shared key from being disclosed. A strong pre-shared key should be used (over ten characters, a mix of upper- and lower-case letters and numbers). If it is not in place already, centralised logging should be considered so if attempts are made to brute force the group name, these can be observed and responded to. If the VPN is used to connect several known locations or specific systems, IP address whitelisting should be used to prevent third parties from connecting to the VPN endpoints and attempting to crack the credentials.
