WA-X Arbitrary Textual Content Embedding
========================================

Description
-----------
During testing it was identified that the web application allows embedding of arbitrary text into the web page. This could be done via a user-manipulated POST parameter when an error is shown. The following illustration demonstrates the phrase “Lateral Security” passed as an error text parameter which resulted in it being displayed:

***SCREENSHOT***

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
Info – This issue does not directly lead to any security vulnerabilities. The most significant impact of the issue is reputational damage should an attacker embed questionable or obscene content into the web site via a specially crafted link and trick a victim into visiting it. Also, this issue might be used as an aid in sophisticated phishing attacks. 

Recommendation
--------------
Ensure that the web application does not allow users to manipulate the content of the web site via client-side parameters. One of the ways to mitigate this issue is to build an exhaustive list of pre-defined text messages and refer to them via an ID specified client-side.
