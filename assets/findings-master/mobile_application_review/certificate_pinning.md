MA-X Certificate Pinning
========================

Description
-----------

Certificate pinning is an additional layer of hardening that can be applied to SSL/TLS connections to reduce the risk of Man-in-the-Middle attacks and prevent users from examining network traffic. 

This control is not in place in either the Android version or the iOS version of the application. However, the Android version is built on a relatively new version of the Android API which increases the effort required to intercept traffic.  

Reproduction Details
--------------------

Use an intercepting proxy such as Burp Suite and observe that it is possible to inspect and modify traffic. 

On iOS this can be accomplished by adding a custom CA certificate from a file or the web. Note that in order to use this CA for intercepting traffic, it first has to be marked as trusted in the following location:
  * Settings → General → About → Certificate Trust Settings

Ensure client isolation is not enabled on the wireless network then in the phone settings set a proxy for the wired connection set to the proxy. 

Sign into the application and observe whether traffic is visible in the proxy or the application returns an error message instead. 

Systems Affected
----------------

The following application***s are*** affected by this issue: 
  * ***APPNAME*** (iOS version)
  * ***APPNAME*** (Android version)

Severity
--------
Low – Certificate pinning is a mitigation which increases the difficulty an attacker faces in profiling the application behaviour and API to identify weaknesses as well as the general structure of communications. 

Recommendation
--------------

It is recommended that certificate pinning be implemented by all mobile applications. 

Specific instructions for iOS can be found at the URL below:
 * https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning#iOS
 