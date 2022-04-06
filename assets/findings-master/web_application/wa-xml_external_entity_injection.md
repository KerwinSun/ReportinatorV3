WA-X XML External Entity Injection
==================================

Description
-----------
XML External Entity Injection is a vulnerability where a poorly configured XML parser can be manipulated into accessing otherwise inaccessible information. It can also lead to denial of service, server side request forgery, and allow the attacker to make requests as if they had the privileges of the server.

The XML standard allows entities to be defined which include other files or remote content in a document. This functionality is enabled by default in many XML parsers, but can safely be disabled when not in use. Attackers take advantage of this functionality by including references in user-provided data to content they intend the server to download for them.

Note that the application does not need to explicitly return a response to be vulnerable. An attacker may make the server access domains they control to extract information about the server.

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***Fill me in***

Systems Affected
----------------
The following systems are affected by this issue:
  * ***Fill me in***

Severity
--------
Medium - This issue could allow unauthorised users to download arbitrary files from the server hosting the application and other servers it has access to. In some cases the attacker can make state-changing requests to other devices on the network.

Recommendation
--------------
Lateral Security recommends that the functionality of the XML parser be restricted and any functionality that could result in a document including external data or making server-side requests on behalf of an attacker be disabled. eg: XML External entities and XInclude functionality.

For application specific guidance, please refer to the following OWASP guide:
*  https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html
