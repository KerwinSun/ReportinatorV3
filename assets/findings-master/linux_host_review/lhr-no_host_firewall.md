LHR-X No Host Firewall
======================

Description
-----------
No host firewall was found to be configured and active. The default firewall in modern Linux installations is configured through the use of iptables, which reports that input, output, and forwarding of packets are all default allow.
```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```
Reproduction Details
--------------------
To verify that no firewall has been configured, issue the following commands:
```
iptables -L
ip6tables -L
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – The lack of a firewall might leave services vulnerable to denial of service or remote code execution. ***This issue is mitigated by the firewall device of the network.***

Recommendation
--------------
Lateral Security recommends that a host firewall be configured to be default deny with only needed services allowed. If IPv6 is not required, disabled it through the use of ip6tables. The firewall should, then, be enabled on the host.
