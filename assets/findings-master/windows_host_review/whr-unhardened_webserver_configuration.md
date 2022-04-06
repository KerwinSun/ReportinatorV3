WHR-X Unhardened Webserver Configuration
========================================

Description
-----------

The IIS webserver has not been configured to meet good security recommendations. Some of the settings which might weaken the service include:

* Numerous application pools have not been set to use ApplicationPoolIdentity instead of NetworkService. ApplicationPoolIdentity assigns a separate identity for each application pool instead of running all application pools under the same shared account. All sites except ***HOST*** run as “NetworkService” identity.
* The default application pool identity is not set to ApplicationPoolIdentity.
* Some secure communication is not enabled.
    - Some websites do not require transport layer security, which would affect any Basic authentication. (See Appendix B for an enumeration.)
    - Form submitted information will not require transport layer security.
* Some cookie settings are not secure.
    - The session state does not require cookies. Instead it stores session in the URI.
    - The server will not issue the HttpOnly on cookies.
    - Form authentication has not been restricted to cookies only.
* The global .NET trust level has not been set to “Medium” or something more restrictive.
* Non-ASCII characters are allowed in URLs.
* The debugging method, HTTP Trace, is enabled.
* All file extensions are allowed.
* The content for some sites is located on the system drive. (See Appendix B.)
* The default IIS log directory has not been moved off the system drive.
* Deployment has not been set to “retail”.

Reproduction Details
--------------------

These settings were observed in the XML of the applicationHost.config file. A lack of some settings indicates that an insecure default is configured.

Systems Affected
----------------

* ***SYSTEM***

Severity
--------

Medium – If data is sent unencrypted to the web server, then an attacker might capture and exfiltrate or alter the data. The organisation could suffer reputational damage from malicious use or leaks of the data.

If cookies are not required for authentication, then the URI will be used. This method of authentication exposes sensitive information to being captured by proxies, scripts through the browser API. If the HttpOnly flag is not set, then cookies storing sensitive information, such as the session, might be maliciously manipulated by a client-side script, allowing an attacker to steal the session.

These and other enumerated settings indicate a lack of hardening of the web server. An attacker could use this configuration to gain information about the server, deny service, or exploit the server host in some other way.

This finding indicates a lack of adherence to:

* NZISM 14.1. Standard Operating Environments

Recommendation
--------------

Ensure that the webserver has been hardened according to a well-known security benchmark, such as one provided by the Center for Internet Security or according to a Security Technical Implementation Guide (STIG).

