WA-X Insecure CORS Settings
===========================

Description
-----------
Cross Origin Resource Sharing (CORS) is a mechanism that allows a web application to accept and execute web requests that originated from another domain. Such "cross-domain" requests would otherwise be forbidden by web browsers, according to the same origin policy. CORS defines a way in which the browser and the server can interact to determine whether or not to allow the cross-origin request.

***Lateral Security found that the web application allows for requests originating from any domain. Moreover, two-way interaction was also found to be enabled. This might lead to unauthorised access to sensitive data.***

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Low – An attacker may obtain valuable information or perform malicious actions in the application by triggering crafted HTTP requests from another domain.

***As the web application currently does not use cookies to store and manage sensitive information on the client-side, this issue is raised with low severity rating. Authorisation tokens which are transmitted in the headers of HTTP requests to the API will not be automatically added in this scenario. In case further functionality that utilises cookies is added to the application in the future, this may lead to a serious data leakage. Note that Access-Control-Allow-Credentials is not supported when the Allow-Origin header is set to a wildcard. This prevents the browser from automatically attaching cookies to the request, partially mitigating the impact of this issue.***

Recommendation
--------------
***Client*** should investigate where in the web application the cross-origin resource sharing policy is utilised. The cross-origin request policy should limit the web application to accept only requests originating from a restricted range of domain names. Moreover, ensure that access controls are in place throughout the web application in order to limit remote access only to the functionality that should accept such requests during normal operation. 

For more information, see the following links:
 * https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html
 * https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny
