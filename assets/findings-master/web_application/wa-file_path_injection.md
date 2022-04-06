WA-X File Path Injection
========================

Description
-----------
File path injection allows an attacker or malicious user to provide arbitrary filenames for files that are being uploaded that are interpreted by the server or service as file paths. This then leads to the files that are uploaded to the server being saved to locations outside of the intended path.

***During testing, multiple file upload points were identified where the user can supply a file path as part of the filename so that files are uploaded to arbitrary locations on the server, including outside of the webroot. This issue was successfully exploited to write files into the c:\temp\ and c:\windows\temp\ folders.***

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
High – An attacker or malicious user that can upload files to the server can exploit this vulnerability to place files on the server in locations that they should not be permitted to write to. This could be use by an attacker to stage malicious files onto the server as part of a broader attack or overwrite sensitive files or operating system components.

Recommendation
--------------
Ensure that file upload mechanisms sanitise all user provided information to ensure that the malicious components of the file name are removed or escaped. Ensure that the web server user has a limited permission set to ensure that even if a successful file path escape is carried out, files cannot be written outside of their intended destination.

Alternatively files can be assigned an ID along with the filename stored in the database and then all interaction with the file on disk via that reference ID rather than the filename itself.
