WA-X Remote Code Execution
==========================

Description
-----------
A remote code execution (RCE) vulnerability allows an attacker or malicious user to execute operating system commands or code in the context of the operating system user that the service is running as.

*** KEEP RELEVANT PARAGRAPH FROM BETWEEN HERE AND REPRODUCTION DETAILS ***

The identified instance of code execution is the result of XML External Entitity (XXE) Injection.
An endpoint which consumes XML content was found to allow the user to specify processing actions, including reading sensitive files and executing code via the PHP expect module.


The identified instance of code execution is the result of content injection into shell command operations.
The site includes user supplied values as part of calls to the underlying operating system,
allowing attackers to include arbitrary content into these system calls.


The identified instance of code execution is the result of the user being able to upload arbitrary files into an executable directory on the server.
If an attacker uploads a *** PHP *** file to this directory, then the content will be run by the web server upon retrieval.
This is a common vector for web-shell deployment, where an attacker uploads a malicious file which dynamically takes user input and executes it on the host.


The identified instance of code execution relates to a publicly disclosed vulnerability within the underlying framework used.
The application was found to be using *** FRAMEWORK *** which is vulnerable to CVE *** CVE-REF ***.



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
Critical – An attacker who can execute arbitrary code in the context of the web server user can perform any action that the web-server user can perform.  This can lead to loss of administrative control of the server, data corruption, and denial of service or degradations in user accountability for the server.

Recommendation
--------------
Lateral Security recommends 

*** KEEP RELEVANT PARAGRAPH FROM BETWEEN HERE AND END OF ISSUE ***
disabling DOCTYPE Declaration (DTD) processing within the XML processor. The process for this depends on which libraries are being used and how they are configured (globally, or per call). If the library supports global configurations then it is suggested to disable DTD for the entire system, otherwise every calling instance (present and future) will need to ensure appropriate configurations are applied.


reviewing the usage of system shell calls. Ideally these would be removed (using appropriate libraries to replace the functionality). Some methods of calling system functions provide safe options for including user supplied content; however, these can often be bypassed dependent on the calling context. Ensuring user supplied content is an exact match to items within a whitelist of trusted values may mitigate the issue when no other remediations can be applied.


ensuring that users cannot upload arbitrary files. If file upload functionality is required, then strict filetype (both extension and content) checking should be applied. Users directly accessing uploaded files on the server is often indicative of missing access controls. Access to uploaded files should be restricted to only those users who require access to the resources. Ensure that the file upload directory does not permit execution of file content.


updating the identified instance of *** FRAMEWORK *** to the latest compatible version.
