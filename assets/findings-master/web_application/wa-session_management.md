WA-X Session Management Issue
=============================

Description
-----------
During testing it was identified that the session management system of the web application is susceptible to a weakness. When an authenticated user logs out, the associated session is not properly unset at the server side. So the user can use their old session cookies (***ASP.NET_SessionId*** and ***.ASPXAUTH***) to get access to the web application until the session expires. 

Reproduction Details
--------------------
To reproduce this issue, using an intercepting proxy such as Burp Suite:
  * Sign into the web application
  * Request a page that requires authentication
  * Save the request in the proxy
  * Sign out of the application
  * Replay the request in the proxy and observe that it works

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – In order to benefit from this issue, an attacker first needs to obtain valid session cookies of the victim, which means that the victim’s account has already been compromised. The issue then increases the time frame during which an attacker could use the obtained session tokens for unauthorised access to the web application.

Recommendation
--------------
Ensure that a session management schema is implemented that performs proper server-side session invalidation upon user logout. When a user logs in again, a different session token should be assigned to their session and no information should be left accessible with a previously invalidated session token.

Please refer to the following link for further details about secure session management:
  * https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
