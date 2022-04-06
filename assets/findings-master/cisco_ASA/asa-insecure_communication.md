ASA-X Insecure Communication
============================

Description
-----------
The VPN and HTTPS services are configured to accept weak encryption algorithms. Below are ciphers accepted by the services to secure their traffic.
* RC4-based ciphers - RC4 has biases in its cipherstream which an attacker can use to recover the plaintext of a communication.
* MD5-based ciphers - MD5 is vulnerable to collision attacks.
  * http://eprint.iacr.org/2013/170.pdf
* SHA1-based ciphers - SHA-1 is vulnerable to collision attacks.
  * https://shattered.io/
* 3DES-based ciphers – 3DES uses a 64-bit block size, which is vulnerable to a birthday attack known as SWEET32.
  * https://sweet32.info/
* DES-based ciphers - There are three known attacks on DES which are faster than bruteforce attack. These are differential cryptanalysis, linear cryptanalysis, and Davie's attack.

Reproduction Details
--------------------
The VPN service has been configured by the following lines to accept the weak ciphers.
```
crypto ipsec transform-set ESP-DES-MD5 esp-des esp-md5-hmac
crypto ipsec transform-set ESP-DES-SHA esp-des esp-sha-hmac
crypto ipsec transform-set ESP-3DES-MD5 esp-3des esp-md5-hmac
crypto ipsec transform-set ESP-3DES-SHA esp-3des esp-sha-hmac
```
Note that, for HTTPS, the line below is not in the configuration.
```
ssl server-version tlsv1.2
ssl cipher tlsv1.2
```

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – Were an attacker able to successfully exploit these weaknesses, sensitive data might be captured and exfiltrated. The organisation could suffer reputational damage from malicious use or leaks of this data.

This finding indicates a lack of adherence to NZISM 17.2.

Recommendation
--------------
Configure systems to secure communication using TLSv1.2 and modern ciphers with no known weaknesses. Disable compression and have a trusted certificate authority sign all certificates. More information about "Next Generation Encryption" from Cisco can be found at the following location.
* https://www.cisco.com/c/en/us/about/security-center/next-generation-cryptography.html

General information about securing web communication can be found at the following location.
* https://wiki.mozilla.org/Security/Server_Side_TLS

The widespread use of TLS v1.3 is imminent. Web browsers which support it have already been released to the public. How the environment could accommodate this new protocol should be considered.
