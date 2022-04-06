WA-X Cross Domain Script Include
================================

Description
-----------
During testing, Lateral Security identified that the web applications dynamically include the following script from an external domain:
 * ***https://-.s3.amazonaws.com/se.js***

When an application includes a script from an external domain, this script is executed by the browser within the security context of the invoking application. The script can therefore do anything that the application’s own scripts can do, such as accessing application data and performing actions within the context of the current user.

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
Low – If you include a script from an external domain, then you are trusting that domain with the data and functionality of your application, and you are trusting the domain's own security to prevent an attacker from modifying the script to perform malicious actions within your application. 

Recommendation
--------------
Scripts should not be included from untrusted domains. If you have a requirement which a third-party script appears to fulfil, consider copying the contents of that script onto your own domain and including it from there. If that is not possible (e.g. for licensing reasons) then you should consider re-implementing the script's functionality within your own code.
