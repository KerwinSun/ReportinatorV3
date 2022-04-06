WA-X Unvalidated Redirect
=========================

Description
-----------
A common design pattern in web applications, particularly during login and logout, is to record as a URL parameter the location the user will be redirected to once the requested action is complete. This can be particularly useful if a user requests a protected resource while unauthenticated to ensure a smooth transition back to this resource after login.
This often takes a form similar to the following:

- https://www.lateralsecurity.com/login?RedirectURL=/authenticated-component

This design pattern is often implemented in a way which introduces vulnerabilities into the application. One issue which can occur is that the URL to which the redirection will occur is not properly validated. If this is the case, an attacker can craft a URL which appears to specify a resource on a trusted site, but which in reality redirects an attacker to a phishing site or other malicious content.

For example, consider a user navigating to the following URL:

- https://www.lateralsecurity.com/login?RedirectURL=https://www.lateralsecurity.info

The user might expect to arrive at lateralsecurity.com based on the URL. In reality they will be redirected to lateralsecurity.info. This subversion of user expectations can allow attackers to target even those users who check whether the hostname in a URL they are supplied with is legitimate.

Reproduction Details
--------------------
To reproduce this issue, browse the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium – This issue does not directly lead to a compromise of the web application. However, this allows an attacker to coerce a user into visiting a malicious link by leveraging their trust in the domain, which could cause reputational damages in the event of a compromise. If utilised in a successful phishing attack, this could lead to a compromise of a privileged user account, with corresponding impact on the application’s security.

Recommendation
--------------
Lateral Security recommends ***CLIENT*** restrict the web application to redirecting users to a pre-defined set of URLs. Refer to the following link for further information about this type of attack and options for mitigation:
  * https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html
