ADR-4 Unused Computer Objects
=============================

Description
-----------
There are computer objects within Active Directory that are a part of the domain, which have either not recorded a log in in six months or have never recorded a log in.

Severity
--------
Low – If such hosts were to reappear on the network, they will be heavily out of date in regards to patches. The system will then be in a vulnerable state until it becomes synchronised with the latest patch state.

Recommendation
--------------
Identify the status of each host to ascertain which hosts have already been decommissioned. Remove the entries for such systems. Thin clients, virtual machines, and other hosts are likely to be used infrequently. Technical solutions such Network Access Control (NAC) can be used to assist device security by placing them into a segregated network zone until patching is complete. Please note that this should not be relied upon to outright prevent access, as such solutions can be bypassed by an attacker, but they may assist with the administrative process. Alternatively, power on such devices in a regular manner to ensure they become patched.
