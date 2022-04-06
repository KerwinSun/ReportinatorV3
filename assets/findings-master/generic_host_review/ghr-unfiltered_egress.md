GHR-X Unfiltered Egress
=======================

Description
-----------
The implementation allows unrestricted egress. Connections originating from a host to the Internet will not be restricted. A brief list of examples of traffic allowed would include web traffic, DNS lookups, file transfers, and remote administrative sessions.

Reproduction Details
--------------------
From the host, issue the commands below. This will return OK 200.
```
invoke-webrequest http://www.google.com/ | select StatusDescription,StatusCode
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – An attacker could use this weak configuration to exfiltrate data from the implementation. If sensitive data were exfiltrated, reputational harm might result to the organisation. This attack would require that the attacker already have access to a system within the implementation.

Recommendation
--------------
Network devices, such as routers and firewalls, should restrict access to the Internet. Only external services required by the hosts should be allowed. The host firewalls should also restrict outgoing connection to only those required.
