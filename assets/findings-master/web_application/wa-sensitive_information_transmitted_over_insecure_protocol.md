WA-X Sensitive Information Transmitted Over Insecure Protocol
=============================================================

Description
-----------
Sensitive traffic is transmitted over the clear-text protocol HTTP. When a user is trying to log into the web site to manage their account, no transport level security (such as HTTPS) is implemented. In the event that traffic is intercepted by an attacker they would be privy to the entire contents of messages transmitted to or from the server.

Reproduction Details
--------------------
To reproduce this issue, browse the application using an intercepting proxy such as Burp Suite:
  * Identify the login request containing the user's credentials
  * Observe that this is sent via the unencrypted HTTP protocol

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
***Info/Medium*** – An attacker who is positioned between the client and the server can view the full contents of the HTTP stream, including user credentials. ***OPTIONALLY: It is understood, that ***client*** is aware of this issue and has asserted that the production web application will be available only over HTTPS. This issue was raised for completeness.***

Recommendation
--------------
Ensure that sensitive information is transmitted to or from the server over a secure transport mechanism, such as a suitably configured SSL/TLS stream. Ensure that SSL/TLS best practices are observed:
 * https://www.ssllabs.com/projects/best-practices/index.html
