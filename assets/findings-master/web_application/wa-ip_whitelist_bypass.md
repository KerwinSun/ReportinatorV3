WA-X IP Whitelisting Bypass
=============

Description
-----------
IP Whitelisting is a security control used to restrict resource access based on the user's originating IP address.
This is typically used to prevent users from untrusted locations from accessing a site, or specific resources on a site.

This could be bypassed by ***XXX***


Reproduction Details
--------------------
Navigate to the site using an intercepting proxy, such as Burp, OWASP ZAP, or Fiddler. Intercept the outgoing requests and add a new HTTP header of:
```
X-FORWARDED-FOR: ***{IP}***
```
Note that the resources which were previously inaccessible are now returned by the server.

e.g. ***EXAMPLE URL***.

Systems Affected
----------------
The following ***application(s) / host(s) is/are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – This issue highlights the bypass of an intended security control. Users from untrusted locations can access protected resources on the server.


Recommendation
--------------
Lateral Security recommends checking IPs against the originating IP, and not the IP presented within the headers.
It is noted that this may have functional impacts if the site is genuinely being accessed via a proxy.

Some cloud providers may offer untampered headers containing the user's real IP; however, the presence of this could not be determined during testing.

An alternative mitigation would be to use mutual certificate authentication to identify trusted hosts rather than trusted locations.
```
Information about this negotiation can be found at: https://en.wikipedia.org/wiki/Transport_Layer_Security#Client-authenticated_TLS_handshake.
```
