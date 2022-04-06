File Upload Issues
=================================

Description
-----------
The SCIS platform allows for uploading files as attachments on various pages, typically as supporting evidence for application forms. Lateral Security identified the following security issues around this functionality:
* The web application’s file type checks can be bypassed. A malicious user could upload an arbitrary file to the web server, including executables, which could be further downloaded by other users.
* The web application does not appear to scan uploaded files for malware.


Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
* Log into SCIS as a Processor 
* Navigate to the URL: https://nzseedsauthority.com/processor/seedlines 
* Open the Drop down for any “Seed Line”, select “Edit Transport Notices”.
* On the Transport Notices window, upload any file with a valid file type (PDF, image or Microsoft Word document). Ensure the file data includes an EICAR test string “X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*”.
* Provide any file description, configure the proxy to intercept requests, and click save “Save”
* Modify the JSON object in the intercepted POST request, appending “.exe” to the “friendlyFileName” value. 
 
* Observe the request is made successfully and the uploaded file can now be downloaded as an executable.

Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
Medium – An attacker could leverage the issues described above to attack other users. Having no robust file type validation could lead to the web server being used in targeted attacks against specific users of the application or as a server for hosting custom malware or objectionable content in more widespread attacks. This could cause reputational damage to NZSA if successfully exploited. 
It should be pointed out that attempts to upload and execute a web shell were not successful during the engagement due to the web application’s file storage mechanism. 

Recommendation
--------------
Lateral Security recommends SCIS implements robust server-side file type validation throughout the whole web application, where file upload is possible. More specifically, the web application should accept only allowed file extensions and perform deeper file content validation for file types which can handle dynamic content, such as HTML. 
Additionally, consider implementing malware scanning on uploaded content. 
For further information regarding this type of vulnerability please refer to the following link:
* https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload
