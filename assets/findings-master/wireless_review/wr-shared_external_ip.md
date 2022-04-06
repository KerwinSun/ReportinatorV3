WR-X Shared External IP
===============================

Description
-----------
*** Delete sentences which are not applicable ***
Lateral Security identified that the public facing IP of all access points resolved to a single IP.  
While it is not unusual to route all traffic out through a single IP, 
it is noted that users on the guest WiFi would be able to access any third-party resources which had been explicitly whitelisted to the organisation’s IP.


Reproduction Details
--------------------

To enumerate publicly facing IPs, use an IP reflection service, such as:
```
https://ident.me/ 
```

Systems Affected
----------------
The following networks are affected by this issue: 
  * ***SITE***
  
Using an external IP Address of
```
*** EXTERNAL IP ADDRESS ***
```

  Severity
--------
*** Tweak as required ***
Low – Users on the wireless network (which may be less trusted than users on the wired network) 
could access any external resources which have been IP-whitelisted to the organisation’s public IP address. 
The impact of this would depend on what services have been provided.

The organisations mail server (*** SERVER ***) has an MX record which also resolves to this address.
This allows users on the guest network to easily send emails to third parties, appearing to originate from the legitimate server.


Recommendation
--------------

Lateral Security recommends reviewing the shared use of outbound traffic. 
Consider using a dedicated outbound gateway for less-trusted users. 
It is noted that this solution would introduce significant complexity into the network design.
