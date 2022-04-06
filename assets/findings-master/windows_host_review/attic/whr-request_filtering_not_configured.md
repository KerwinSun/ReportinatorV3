WHR-X Request Filtering Not Configured
======================================

Description
-----------
Lateral Security identified that inbuilt Request Filtering in IIS has not been fully configured on the servers. Request filtering allows an administrator to filter file extensions, HTTP verbs, high bit characters, double encoded requests, and other content. In the present configuration, all file extensions are allowed and high bit characters are allowed. In addition, the servers do not have the OPTIONS or TRACE HTTP verbs in their block list, and all valid HTTP verbs are allowed.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – An attacker could bypass security measures in the application by encoding content, using special characters or utilising file extensions and HTTP verbs that are not actively in use.

Recommendation
--------------
Configure Request Filtering in line with the Centre for Internet Security guidelines for securing IIS 8. This includes disallowing unlisted file extensions, disabling the HTTP TRACE verb, disallowing high bit characters (non-ASCII characters) and disallowing double encoded requests. Request filtering is considered a defence-in-depth measure that reduces the risk of a misconfiguration or vulnerability being exploited.
