WR-X Guest Access to Internal DNS
===============================

Description
-----------
Domain Name System (DNS) is a concept which maps human-readable names to machine interpretable IPs. 
These names typically relate to the purpose of the host, providing hints towards which servers contain information of use to an attacker.
Lateral Security noted that the internal DNS server (which knows about hosts on private subnets) was directly accessible from untrusted networks. 
This provides attackers information regarding the internal structure of the network, without providing any form of trust.


Reproduction Details
--------------------
Connect to the affected network and perform reverse DNS lookups:
```
Reverse DNS:
nmap -Pn -sn -R *{IP_RANGE}*
**or**
dig -x *{IP}*
```


Systems Affected
----------------
The following untrusted networks are affected by this issue: 
  * ***SITE***


  Severity
--------
Low – This information may be leveraged to identify potential targets of value, specifically hosts with interesting reverse DNS names. 
Any information gained gives an attacker a slight advantage over going in without any guidance.


Recommendation
--------------

Lateral Security recommends reviewing the accessibility of internal DNS servers on untrusted networks, opting to use only public DNS server where possible. 
Networks which allow access to internal hosts (intranet) should continue to use the internal DNS.
