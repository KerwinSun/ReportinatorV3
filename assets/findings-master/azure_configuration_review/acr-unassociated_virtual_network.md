ACR-X Unassociated Virtual Network
==================================

Description
-----------
A virtual network does not have an attached security group to provide network filtering.

[insert virtual network name]

Reproduction Details
--------------------
To see that no security group is attached to this subnet, browse to the following location:
* Security Center -> Recommendations -> See “Enable Network Security Groups on subnets”

To see the attached virtual machines, browse to the following location:
* Virtual Networks -> [name of virtual network] -> Click on a device.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
High – If a security group is not associated with a subnet, then network filtering will not occur. This subnet is attached to a VM.

Recommendation
--------------
Ensure that a network security group is attached to the subnet. Filter all traffic so that only required service may be reached.
