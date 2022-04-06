WHR-X IIS Insecure Cookies
==========================

Description
-----------
The web server has cookie settings which do not meet good security practice:

* The session state does not require cookies instead of storing session in the URI.
* The server will not issue the HttpOnly on cookies.
* Form authentication has not been restricted to cookies only.

Reproduction Details
--------------------
To see that the session state does not require cookies, issue the following command:
```
Get-WebConfiguration -filter /system.web/sessionState/@cookieless
```
To see that the server will not issue HttpOnly on cookies, issue the following command in PowerShell:
```
Get-WebConfiguration -filter /system.web/httpCookies/@httpOnlyCookies
```
To see that forms authentication does not require cookies, issue the following command in PowerShell:
```
Get-WebConfiguration -filter /system.web/authentication/forms
```

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – If cookies are not required for authentication, then the URI will be used. This method of authentication exposes sensitive information to being captured by proxies, scripts through the browser API. If the HttpOnly flag is not set, then cookies storing sensitive information, such as the session, might be maliciously manipulated by a client-side script, allowing an attacker to steal the session.

Recommendation
--------------
Ensure that the server will require cookies for authentication and will issue the HttpOnly flag on all cookies. When cookies are required, the default is to enable cookie protection mode, which should not be disabled.
