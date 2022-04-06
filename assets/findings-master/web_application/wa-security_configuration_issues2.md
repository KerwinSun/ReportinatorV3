WA-X Security Configuration Issues
==================================

Description
-----------
A number of recommended security settings are not configured in line with good practice.

The application omits the following security-related headers:

 * The Content-Security-Policy header defines restrictions on content access and execution within the site to mitigate attacks against end-users.
 * The X-Frame-Options header can be used to prevent the page from being rendered inside a frame. This can prevent clickjacking attacks. Note that this header is obsolete in modern browsers that support Content-Security-Policy.
 * The ‘frame-ancestors’ Content Security Policy directive is a modern replacement for the X-Frame-Options header. To protect all browsers, both this directive and X-Frame-Options should be set.
 * The Strict-Transport-Security header instructs the browser to record that the website MUST be visited via a secure connection and prevents insecure connections in future. Any requests, whether via the browser’s address bar, through a redirect, or by referenced content, will always access the site via HTTPS. This helps to protect against attacks such as SSL Stripping.
 * Specifying an X-Content-Type-Options header will prevent the user’s browser from guessing the MIME type of provided files. This can help to protect against cross-site scripting attacks.
 * The header “Cache-Control: no-store” directs browsers, and any intermediate caching proxies, not to cache the response. When this header is used for responses containing sensitive data, it prevents that data from being inadvertently cached and served to other users. It also prevents sensitive data from being cached locally, where it could potentially be accessed later by unauthorised local users.

The application should set the “Secure”, “HttpOnly” and “SameSite” flags on cookies unless this interferes with required application behaviour. This is particularly important for cookies which are used to store session tokens or other sensitive information.

 * The “Secure” cookie flag instructs the browser not to send the cookie over an insecure HTTP connection. If this flag is not present, the browser will send the cookie even if HTTPS is not in use, which means it is transmitted in clear text and can be intercepted and stolen by an attacker who is listening on the network.
 * The “HttpOnly” flag lets the browser know whether or not a cookie should be accessible by client-side JavaScript code. It is best practice to set this flag unless the application is known to use JavaScript to access these cookies, as this prevents an attacker who achieves cross-site scripting from accessing these cookies.
 * The “SameSite” flag defines when a browser will send a cookie automatically with a request. This can be used as an additional protection against cross-site request forgery attacks.

The following specific misconfigurations were observed:

 * ***list the cookies/headers which need specific attention drawn to them***
 * ***The ASP.NET_SessionId Cookie is missing the ‘Secure’ flag***
 * ***The Strict-Transport-Security header was missing on the login page, but was present on all other pages***

Reproduction Details
--------------------
Observe that the above headers are not sent by the server in HTTP server responses. This may be viewed through an intercepting proxy such as Burp Suite or by using the Network tab of the browser’s built-in developer tools.

Systems Affected
----------------
The following systems are affected by this issue:

  * ***SITE***

Severity
--------
Info – The lack of mitigations noted above does not create a security vulnerability in itself. The class of attacks introduced by omitting the controls detailed above results primarily in threats to end-users rather than the web application infrastructure itself. However, if the end-user can be targeted in such a way that an attacker hijacks their access to the application, this could result in the attacker gaining a higher level of privilege through these issues.

***OPTIONAL: If a combination of missing headers and cookie flags can result in the disclosure of session tokens over HTTP, raise this issue as Medium***

Recommendation
--------------
Implement the Strict-Transport-Security, X-Frame-Options and Cache-Control headers to harden the application against attack. X-Content-Type-Options should also be implemented where possible, but may cause issues in web applications that provide content without appropriate MIME types.

The Content-Security-Policy header is a highly powerful security control that should be implemented where possible, but requires significant consideration of the web assets used by the application. A policy should be developed which is appropriately restrictive whilst retaining web application functionality.

To prevent pages from breaking while implementing a Content Security Policy, the Content-Security-Policy-Report-Only header can be used. This header is identical to the Content-Security-Policy header, except it only reports policy violations instead of blocking them. This can be used to test the effects of a policy without enforcing it. After resolving any policy violations, the Content-Security-Policy-Report-Only header can then be changed to Content-Security-Policy to start enforcing the policy.

Cookie flags should be set where appropriate. Any sensitive cookies (such as session tokens) should use the most restrictive configuration possible without causing issues.

Below are useful references which describe the functionality of each header:

MDN – Content Security Policy

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

MDN – Content-Security-Policy-Report-Only

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only

MDN – X-Frame-Options

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

OWASP – Clickjacking Defense Cheat Sheet

  * https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html

MDN – Strict-Transport-Security

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security

MDN – X-Content-Type-Options

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options

MDN – Cache-Control

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

MDN – Using HTTP cookies

  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

These resources describe the types of attacks the above headers protect against:

MDN – Types of attacks

  * https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks

Cloudflare – Performing & Preventing SSL Stripping: A Plain-English Primer

  * https://blog.cloudflare.com/performing-preventing-ssl-stripping-a-plain-english-primer/

PortSwigger – Web cache poisoning

  * https://portswigger.net/web-security/web-cache-poisoning
