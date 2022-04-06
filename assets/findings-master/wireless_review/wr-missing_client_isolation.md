WR-X Missing Client Isolation
===============================

Description
-----------

Client Isolation is a security control which prevents communication between wireless peers. This control limits the impact that users can have on other users of the system.
Lateral Security identified networks which permit communication between users (of the same access point); subsequently, active man-in-the-middle attacks would be possible.
In addition to active man in the middle attacks, if a device were to be compromised with malware, this could spread to other devices.


Reproduction Details
--------------------
*** TWEAK AS REQUIRED ***
Connect two devices to the a given network, identifying that clients can access servers across devices.
```
SERVER:
nc -lvvp 1234

CLIENT:
nc -vv {server_ip} 1234
```

This can also be observed within configuration exports: 
no  wireless-to-wireless-isolation


Systems Affected
----------------
The following networks are affected by this issue: 
  * ***SITE***


  Severity
--------
Low – Wireless clients can communicate directly with each other. Attackers would be able to access services (like public file shares) on other devices connected to the same network.


Recommendation
--------------
Lateral Security recommends reviewing whether peer to peer communication is a business requirement for the affected network ***(s)***, disabling this functionality where it is not required.