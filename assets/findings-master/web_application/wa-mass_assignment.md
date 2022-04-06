WA-X Mass Assignment Vulnerability
=============

Description
-----------
Mass Assignment (Autobinding) is an access control weakness where malicious users can provide additional fields on object create/update actions, setting attributes beyond that of the application's intended permission model.

This vulnerability is often introduced by application frameworks providing both automatic parameter-to-object mapping (deserialisation), and object-to-database mappings (ORM). 
With these features combined, an attacker can supply malicious parameters which are loaded into templated objects and persisted to the database.


*** In this particular case ***


Reproduction Details
--------------------
Navigate the site using an intercepting proxy; e.g. BurpSuite, OWASP ZAP, Fiddler.
* Authenticate to the portal.
* Attempt to *** Affected functionality ***, intercepting the request.
* Modify the payload to add *** Affected parameter ***
* Observe that *** Change/verification ***


Systems Affected
----------------
The following ***application(s) / host(s) is/are*** affected by this issue:
  * ***SITE***

Severity
--------
High – An attacker can craft malicious requests to ***Impact***
Undermining the expected security controls of the application.


Recommendation
--------------
Lateral Security recommends restricting user supplied data using an allow list of expected content.
This can be achieved through either input data restriction or validation.

Platform specific details can be found at:
```
https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html
```
