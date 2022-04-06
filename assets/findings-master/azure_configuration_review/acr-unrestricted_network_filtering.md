ACR-X Unrestricted Network Filtering
====================================

Description
-----------
Applied security groups allow access to administrative interfaces from anywhere. Port 22 is the port assigned to the SSH protocol and port 3389 is assigned to the remote desktop protocol. Both are used for remote administration. All security groups do not restrict outbound traffic.

Reproduction Details
--------------------
To see that security groups have not been sufficiently restricted, browse to the following locations.
* More services -> Type "Network security groups" -> [name of security group]

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
High – Administrative interfaces are targets for attack since a compromise of these can lead to full control of a system and the chance of further infiltration. By not restricting outbound traffic, bidirectional communication and data exfiltration are facilitated.
The unrestricted exposure of services to the Internet increases the probability of compromise.

Recommendation
--------------
Use network security groups to limit access to all services in the implementation to the specific IP addresses and networks which require access for intended functionality. Outbound traffic should be restricted to allow only expected connections or disabled completely. All other access should be disabled by default.
All security groups should restrict by port, protocol, and address.
