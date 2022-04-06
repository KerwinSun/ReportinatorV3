WA-X Host Header Injection (Cache Poisoning)
==========================

Description
-----------
Host header injection is a content reflection vulnerability where attacker supplied HTTP "Host" header values are processed by the server in an unsafe manner.
This behaviour is often the consequence of services using introspection to determine their hosted domain name, rather than explicitly defining the value within configuration.

*** This is quite specific, ensure it is valid in this case***
In this case, the host header is reflected directly into the page. 
This appears to be used by the application to provides absolute paths for linked content (CSS, JavaScript, etc).

An attacker can send crafted requests to the server, resulting in JavaScript (and other) content being retrieved from untrusted domains.
While this attack has a limited impact in isolation, it can result in arbitrary JavaScript execution (cross-site scripting) in instances where caching middleware stores the tampered values.

Reproduction Details
--------------------
***Change these instructions if the payload is triggered from a different header (e.g. X-Forwarded-Host header)***
To reproduce this issue, browse the application using an intercepting proxy such as Burp Suite:
  * Intercept an original request to the portal (e.g. /{GUID}.html), modifying the host header to an attacker controlled domain in transit.
  * Observe that the modified value is returned in the server's response.
  * Attempt to retrieve the requested resource again, using the real hostname (untampered).
  * Observe that the modified value is still returned (not the real hostname).

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium – An attacker can poison the application's content cache. This allows an attacker to preload cross-site scripting attacks which are later triggered by visiting the infected URL.

Recommendation
--------------
Lateral Security recommends the use relative URLs for fetching application content. 
In cases where this is not possible, per-environment configuration files should be considered to explicitly define the domain that content should be retrieved from.