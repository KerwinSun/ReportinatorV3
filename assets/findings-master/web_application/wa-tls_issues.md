WA-X Weak SSL/TLS Configuration
===============================

Description
-----------
The TLS configuration for the application is not in line with good practice.
  * The RC4 cipher is in use and is considered weak, regardless of the fact that it can use a key length of 128 bits. A security vulnerability known as “BEAST” prompted wide adoption of this algorithm as it was impervious to that specific attack. However, it has resulted in a trade-off whereby potentially protecting a generally isolated group of users has resulted in degraded cryptography for all users.
  * The server supports SSLv3. SSLv3 is insecure when used with HTTP and weak when used with other protocols. It has a known CBC padding oracle attack which allows plaintext to be recovered. This could be used to recover session IDs or credentials. It is good practice to disable SSLv3. NIST no longer considers Secure Socket Layers (SSL) v3.0 protocol as acceptable for protecting data.
  * The server supports the TLSv1.0 protocol. This protocol version is considered to be deprecated, and standards such as PCI have moved towards disallowing it.
  * The server supports only the legacy protocol TLS 1.0 and explicitly does not support other versions of this protocol (TLS 1.1 and 1.2). This leaves the web server without the enhanced security features provided by the newer versions.
  * The environment is susceptible to an attack called the “DROWN” attack. This is an attack method described in March 2016 and is related to SSLv2. In essence, if an environment which utilises wildcard certificates incorporates at least one server that allows SSLv2, then it can be used to attack all the other servers that share the same private key, even if they do not expose SSLv2 themselves. For more information please see the following link: https://blog.qualys.com/securitylabs/2016/03/04/ssl-labs-drown-test-implementation-details
  * SHA1 is used as a hashing algorithm in one of the certificates in the certificate chain. This hashing algorithm is currently claimed insecure and it was announced that certificates that use this algorithm may not be accepted as valid by modern browsers.
  * The certificate used on the web server is not trusted.
  * Forward Secrecy was not found to be utilised with some of the browsers. This increases an attacker’s chances of decrypting sensitive traffic if the web server’s private key becomes compromised.
  * An issue related to the Diffie-Hellman key exchange algorithm implementation has been published. It consists in the fact that default installations of OpenSSL share the same 1024-bit Diffie-Hellman group, which is further utilised in the algorithm. If it is broken, then all the web servers which share this group are affected and an adversary could decrypt traffic through passive eavesdropping. This is known as the FREAK attack.

Reproduction Details
--------------------
View the site results using SSLLabs:
  * https://www.ssllabs.com/ssltest/

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – The issue is considerably mitigated by the complexity of exploitation compared to the value of the traffic to an attacker. It is pertinent to note, however, that attacks against weak ciphers are becoming increasingly practical. As such, the impact is primarily reputational as these configuration options are identifiable by unskilled parties using the noted testing tools and SSL configuration is commonly, accurately or not, interpreted as an indicator of overall security posture.

Recommendation
--------------
Lateral Security recommend that ***CLIENT*** remove support for the RC4 cipher and disable SSLv3 as a matter of good practice. ***COMPLETE THIS AS REQUIRED***

The SSL configuration can be checked at the following site to ensure it is appropriate:
  * https://www.ssllabs.com/ssltest/

A best practice guide can be found at:
  * https://www.ssllabs.com/projects/best-practices/
