Client-Side Input Validation 
=================================

Description
-----------
When data is validated, ideally the validation would be enforced by both the server and the client. If only client-side validation is used, it is possible to bypass the validation by manipulating a request, or in some cases accidentally bypass validation if the validation script fails to load.
In this case, the issue is systemic and most data restrictions are not enforced on the server-side. The backend code will generally accept any data made directly from http requests made to the API regardless of intended type and format restrictions. 

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
	Navigate to the url: https://connect.todd-digital.com/subscribers/ 
	Edit any subscriber’s details, making a change to the “site” field.
	Submit the request.
	Intercept and replay the request replacing the “site” field in the JSON object with any string.
	Observe that the request has been accepted by the API and the value has been stored.


Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
Low – The lack of sufficient input validation does not create a security vulnerability in itself. However, without appropriate filtering of unintended data, it expands the attack surface increasing the likelihood of success of more severe attacks such as cross site scripting. It may also cause the system to perform unintended behaviours or be put into an error state. 

Recommendation
--------------
Enforce the same validation rules both on the server side and client side.
Preferably, this would be done in a centralised way, e.g. via a library, to avoid potential mistakes when applying server-side validation to all endpoints.

