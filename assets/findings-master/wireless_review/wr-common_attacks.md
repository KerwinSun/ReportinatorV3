WR-X Common Wireless Attacks
===============================

Description
-----------
The following is a summary of the inherent weaknesses is various WiFi technologies:

*	OPEN – Clients can connect without any credentials. Communications are sent in the clear and can be passively observed over the air. In cases where captive portals are used, access can usually be trivially gained via MAC address spoofing, password sniffing (unencrypted portals), or evil twin attacks (pretending to be the access point and hosting a fake captive portal to capture credentials).
*	WEP – Clients authenticate using a hex-string based password. An attacker can trivially defeat this via online bruteforce attacks. It has largely been phased out of use and is typically only seen on older (pre-2005) devices, or where compatibility with legacy clients is a requirement.
*	WPA(2) PSK (Pre-shared Key) – Client authenticate using a password specific to the access point. An attacker can passively observe the authentication flow of a legitimate client and use this information to perform offline bruteforce attacks against the password. 
*	WPA/WPA2 WPS (Wi-Fi Protected Setup) – A client typically pushes a  physical button on the client or access point. This is typically found on domestic routers and while it can be secure in theory, many early implementations contained flaws which permitted trivial online brute-forcing of the key without physical access to the router.
*	WPA Enterprise (Radius) – Clients authenticate using their Active Directory credentials. An attacker can impersonate the access point (Evil Twin), capture an authentication request, then leverage this in offline bruteforce attacks. This would give the attacker full, valid, Active Directory credentials.
*	WPA Enterprise (Certificate) – Clients authenticate using an issued certificate, preferably unique to the device or user. This is similar to the Radius variant, except the password is guaranteed to be complex as it is based on certificates rather than user selection.

Wi-Fi connections (independent of authentication mechanism) are commonly vulnerable to denial-of-service attacks from attackers sending targeted disconnect (deauthentication, or ‘deauth’) requests, unless the Protected Management Frames feature (802.11w) is enabled on the access point and supported by connected devices. Deauth messages exist in a protocol layer higher than the encrypted communications.
An attack titled “KRACK” was identified in 2017, which potentially allows attackers to decrypt and inject traffic in wireless connections. This is a complex attack which relies on vulnerabilities within wireless clients rather than the access points. It has been noted to raise awareness of the weakness; however, it is expected that it would only be leveraged by skilled targeted attackers.


Reproduction Details
--------------------

Most operating systems provide indications of what authentication mechanism an access point uses. The following tools can also display this textually:
```
iw {interface} scan
airodump-ng {interface}
```

Systems Affected
----------------
The following networks are affected by this issue: 
***INSERT TABLE OF [ SSID | Authentication Type | Qualitative Strength Description | Notes / Comments ]***

  Severity
--------
Medium – 
*** Qualitative comments on consistency with client expectations and specific impact example of worst case network ***

If any of the pre-shared keys are considered compromised; for example: authenticated devices are lost, or IT staff leave the organisation - then changing the password across all registered devices would be labour-intensive.

Recommendation
--------------

*** Tweak this as required ***
Lateral Security recommends:
* Developing a policy to update PSK passwords when devices are compromised, or IT staff leave the organisation
* Considering the use of per device certificates on mobile devices
* Consider unifying access points which provide identical functionality

