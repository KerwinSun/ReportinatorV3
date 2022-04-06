WA-X File Upload Issues
=======================

Description
-----------
The web application supports uploading of files ***as attachments to Notices***. Lateral Security identified several security issues around this functionality. These are as follows:
 * The web application does not properly check for the file type of the uploaded file. More specifically, this type of checking is performed client-side, which means that it can be trivially bypassed. A malicious user could upload an arbitrary file to the web server, including executables, which could be further downloaded by other users: ***TEST***
 * Files are stored within the asset directory of the web server and could be accessed directly by any unauthenticated user. Dynamic content stored on the web server introduces a number of attack vectors towards these users, which may include but is not limited to running arbitrary JavaScript in the security context of the victim’s session. Consider the following HTML file to be uploaded as an attachment: <html><body><script>alert("Lateral Security XSS");</script></body></html> If accessed directly by the victim, the JavaScript payload will be executed in their browser. For more detail on this type of attack refer to ***XSS ISSUE?*** Uploaded files are accessible without authentication. This may lead to sensitive data disclosure.

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN***

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SITE***

Severity
--------
Medium – An attacker could leverage the issues described above to attack other users, both authenticated and unauthenticated. Having no robust file type validation could lead to the web server being used in targeted attacks against specific users of the application or as a server for hosting custom malware or objectionable content in more widespread attacks. This could cause reputational damage to ***CLIENT*** if exploited.

Additionally, these issues create a risk of ***IMPACT IF XSS EXPLOITED***

***It should be pointed out that attempts to upload and execute a PHP shell were not successful during the engagement, due to the protections afforded by the framework and the web server utilised, as well as protection against path traversal attacks implemented in the web application.***

Recommendation
--------------
Lateral Security recommends that ***CLIENT*** implement robust server-side file type validation throughout the whole web application, where file upload is possible. More specifically, the web application should accept only allowed file extensions and perform deeper file content validation for file types which can handle dynamic content, such as HTML.

Uploaded files should not be directly accessed via URLs. They should be served by the web application itself while being referenced using a pseudo-random GUID.

Lastly, robust authentication and authorisation checks for unpublished files should be implemented as described in ***ISSUE***.

For further information regarding this type of vulnerability please refer to the following link:
 * https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload
