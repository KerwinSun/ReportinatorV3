WA-X Host Header Injection (Password Reset)
==========================

Description
-----------
Host header injection is a content reflection vulnerability where attacker supplied HTTP "Host" header values are processed by the server in an unsafe manner.
This behaviour is often the consequence of services using introspection to determine their hosted domain name, rather than explicitly defining the value within configuration.

In this case, the password reset workflow was found to generate links (containing secret tokens) directed to the supplied host header rather than the server's actual domain name. 
If an attacker attempts to reset the password of another user (while supplying a host header directed to a malicious domain), the victim will receive a reset link to the attacker's domain containing the user's reset secret. This secret will be exposed when the link is clicked, allowing the attacker to compromise access to the targeted user's account.


Reproduction Details
--------------------
***Change these instructions if the payload is triggered from a different header (e.g. X-Forwarded-Host header)***
To reproduce this issue, browse the application using an intercepting proxy such as Burp Suite:
  * Follow the password reset workflow (for an authorised testing account), intercepting the final request that performs the reset.
  * Modify the "Host" header on the request to an attacker-controlled value (e.g. lateralsecurity.com)
  * Review the received email, noting the reset link supplied is directed to "lateralsecurity.com" rather than the original website.
  * Click the link, confirming that the secret is sent to lateralsecurity.com.

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium – An attacker can gain unauthorised access to targeted accounts, in cases where: 
 * The attacker knows the victim's username / email address.
 * The victim clicks an unsolicited password reset link.

Recommendation
--------------
Lateral Security recommends the use of per-environment configuration files to strictly define the hostname to be used in generated emails.
This control also allows for multi-domain solutions (account.*, api.*, etc) to trigger cross-domain actions.
