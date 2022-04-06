ACR-X Insecure Communication
============================

Description
-----------
API Management is configured to use weak cryptographic protocols to secure communication. Transport Layer Security (TLS) and the Secure Sockets Layer (SSL) protocols are cryptographic protocols designed to secure the communication between networked computers. All versions of SSL and some versions of TLS are known to be insecure.
* TLS v1.0 is enabled – TLS v1.0 is vulnerable to CBC
* 3DES is enabled – 3DES uses a 64-bit block size, which is vulnerable to a birthday attack known as SWEET32.
  * https://sweet32.info/

An Application Gateway endpoint has not been configured to use TLS. All connections to this gateway will take place in cleartext.

Reproduction Details
--------------------
To see that insecure communication has been configured for API management, browse to the following location.
* API Management -> [name of service] -> SSL

To see that insecure communication has been configured for Application Gateway, browse to the following location.
* Application gateways -> [name of gateway] -> Listeners

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – Were an attacker able to successfully exploit these weaknesses, sensitive data might be captured and exfiltrated. The organisation could suffer reputational damage from malicious use or leaks of this data.

If the unencrypted endpoint is used, then traffic going to it will take place in the clear. An attacker could alter or capture the information, which might lead to reputational damage.

Recommendation
--------------
Configure systems to secure communication using TLSv1.2 and modern ciphers with no known weaknesses. Disable compression and have a trusted certificate authority sign all tickets. More information about securing web communication can be found at the following location:
* https://wiki.mozilla.org/Security/Server_Side_TLS

Be aware that the widespread use of TLSv1.3 is imminent. Web browsers, which support it, have already been released to the public.
