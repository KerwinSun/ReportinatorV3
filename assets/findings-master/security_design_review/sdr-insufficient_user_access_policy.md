DR-X Insufficient User Access Policy
=============================================

Description
-----------
The design neither details the criteria used to determine who should be granted access to the components of the implementation nor the authorities responsible for granting access. It does not place a limit on the number of administrators for each component.
Specifically described by the design, administrators or administrative staff will have access to:
* **Add me**

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Low – Without a policy to follow, it might be difficult to prevent an unsafe number of administrators and users from having access to critical components, increasing the likelihood of compromise. Responsibilities maybe become unclear, neglected, or executed by the wrong staff members. If multiple users use the same account, then attribution cannot be determined.
This finding indicates a lack of adherence to:
* NZISM 6.3. Change Management


Recommendation
--------------
Access policy should include:
* The party responsible for the administration of each component
* The criteria for adding administrative and regular users
* The criteria for removing administrative and regular users
* The change management authorities

The number of users should be kept to a minimum to reduce the attack surface of the implementation. Accounts should never be shared. Policy should mandate that all changes be recorded along with their business justification.
Ensure that sensitive data repositories, such as those enumerated in the description, have controls which limit access to their contents according to authorisation.
Audits should also be regularly carried out, and systems in place to identify users who have not logged in for a prolonged period of time.

