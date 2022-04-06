OAS-X No Messages Authentication
================================

Description
-----------
AS2 request messages submitted without signatures or encryption are accepted by the service, and return a valid response. This lack of signing means that any system with access to the service can claim to be any other user, simply by setting the "AS2-From" HTTP header to the name of that user. This raises serious concerns regarding auditing accuracy and accountability.
 
Secondly, the fact that security requirements are not enforced by the service means that the responsibility for ensuring requests are submitted securely lies entirely with the client. If it is possible to receive responses to insecure requests, it is possible implementers will misunderstand or ignore the security requirements.
 
Lateral Security was informed that this issue appears to be caused by a bug in the latest version of Oracle SOA Suite which prevents message signing and encryption from being properly enforced for incoming messages.

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – The lack of message signing constitutes a fundamental issue within the authentication and authorisation controls of the service. An attacker who gains access to the system is easily able to pose as any other user and submit malicious requests on their behalf.

Although a potential attacker will not receive the response to their request, the response will be sent to the user the attacker is impersonating, thus allowing an attacker to trigger the sending of messages from the service to other clients. This is aggravated by the fact that data supplied by the attacker may be included in the response message, such as the MessageId, or the entire request. By including malicious data in these fields, an attacker may be able to exploit vulnerabilities in software used by other clients while the messages appear to originate from the service, resulting in reputational damage.

The prerequisites of conducting any such attack by an outside third-party are significant. Appropriate firewall access for a particular source IP address must be established and the attacker must have knowledge of how to interact with the service.

Exposure or misuse of sensitive information would likely cause significant reputational damage and may also carry a potential threat of legal action.

Recommendation
--------------
Lateral Security advises that the system should not be made available until this issue is resolved. 
Contact the software vendor for a resolution to this issue. The "AS2-From" header should never be trusted.
