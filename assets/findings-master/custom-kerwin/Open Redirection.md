Open Redirection
=================================

Description
-----------
A common design pattern in web applications, particularly during login and logout, is to record as a URL parameter the location the user will be redirected to once the requested action is complete.

This can be particularly useful if a user requests a protected resource while unauthenticated to ensure a smooth transition to this resource after login.
This typically takes a form similar to the following:
https://www.example.com/login?RedirectURL=/authenticated-component

This design pattern is often implemented in a way which introduces vulnerabilities into the application.
One issue which can occur is that redirection URL is not properly validated. If this is the case, an attacker can craft a URL which appears to specify a resource on a trusted site, but actually redirects the user to a phishing site or other malicious content.

For example, consider a user navigating to the following URL:
https://www.example.com/login?RedirectURL=https://www.lateralsecurity.com
This subversion of user expectations can allow attackers to target even those users who have some sense of how to check whether a URL they are supplied with is legitimate.

Reproduction Details
--------------------
To reproduce this issue, visit the following URL and sign in:
* https://connect.todd-digital.com/signin?redirect=/////google.com
* Observe that when logged in, the user is redirected out of the site to a different domain

Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
Low – This attack can be leveraged for social engineering attacks, or potentially be combined with other vulnerabilities to increase their total impact. Redirection to offensive content may result in a reputational impact for the organisation.

Recommendation
--------------
Lateral Security recommends minimising the use of user defined redirects. Any user defined content which influences the path should:
* Be validated against a whitelist of expected paths.
* Be appended to the site's own base path (e.g. https://lateralsecurity.com/) - including the trailing slash.
* Be normalised. Removing redundant slashes and directory traversal attacks (using an appropriate library).
