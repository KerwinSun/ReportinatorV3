GHR-X DNS Tunnelling
====================

Description
-----------
DNS tunnelling is a technique used to communicate arbitrary data through the DNS protocol. The technique can evade common network controls, such as firewalls. The network configuration permits DNS tunnelling, so bidirectional communication to the Internet is possible.

Further information can be found within the SANS whitepaper, "Detecting DNS Tunnelling", at the following location:
  * https://www.sans.org/reading-room/whitepapers/dns/detecting-dns-tunnelling-34152

This issue was identified as part of a system configuration review, but this issue might not be limited to reviewed systems. The configuration of DNS servers enables DNS tunnelling.

Reproduction Details
--------------------
To see that DNS tunnelling is possible, issue the ping command to any externally hosted domains. Observe that the domain name is resolved to an IP address.
```
ping -4 -n 1 yahoo.com
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – An attacker could send a small amount of data along with a domain record request to an Internet-residing domain which is controlled by the attacker. The DNS response from this domain record request could carry data from the Internet, allowing the attacker to receive and exfiltrate data outside of the organisation. This technique can be used by any attacker with local access to an affected system.

Recommendation
--------------
Configure a dedicated DNS service for the project. For specific systems which require recursive queries, specifically allow such hosts to query upstream servers. Consider either disabling queries or implementing a separate "split-view" DNS configuration for those systems. Ensure recursive DNS is not required by any service for normal operation.
