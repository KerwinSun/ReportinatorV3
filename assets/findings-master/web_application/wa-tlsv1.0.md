WA-X TLS 1.0/1.1 Support Enabled
===============================

Description
-----------
The system uses HTTPS (HTTP over TLS) to provide an encrypted communications channel for transmitting web content.
This encryption layer is negotiated between the client and server to use one of many protocol and cipher combinations.

Lateral Security identified that the server accepts the deprecated TLS protocol versions 1.0 and 1.1, which do not support recommended modern ciphers.


Reproduction Details
--------------------
Scan the affected IPs using the “sslscan” tool (available at https://github.com/rbsec/sslscan).

Alternatively, SSLLabs provides an online tool (available at https://www.ssllabs.com/ssltest).


Systems Affected
----------------
The following systems are affected by this issue:
  * ***SITE***

Severity
--------
Low – The issue is considerably mitigated by the complexity of exploitation compared to the value of the traffic to an attacker. As such, the impact is primarily reputational as these configuration options are identifiable by unskilled parties using the noted testing tools and SSL configuration is commonly, accurately or not, interpreted as an indicator of overall security posture.


Recommendation
--------------
Lateral Security recommends disabling support for TLS 1.0 and 1.1.
A best practice guide can be found at:
*	https://www.ssllabs.com/projects/best-practices/
It is noted that disabling TLS 1.0 and 1.1 may result in compatibility issues for extremely outdated browsers, therefore care must be taken to ensure that all targeted clients have one (or more) supported protocol/cipher combinations.
