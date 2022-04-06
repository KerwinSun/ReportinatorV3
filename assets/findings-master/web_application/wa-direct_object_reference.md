WA-X Direct Object Reference
============================

Description
-----------
Direct object reference is an access control issue which arises when applications do not implement authorisation checks when accessing resources by a unique identifier.
These identifiers are typically implemented as sequential numbers (unique per resource type) or psuedo-random character strings (GUID/ UUID).

For example, if a user makes a purchase and is redirected to:
* https://www.lateralsecurity.com/webshop/order/188

Changing the order id from "188" to "187" may result in access of a previous order. This would be the intended behaviour if the same user had conducted both purchases; however, the user should not be able to view purchases belonging to other accounts through this mechanism.

In this case, *** UPDATE, also include whether it is read or read/write access ***

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
Medium – *** Describe consequences, including business/contextual impact, whether it is a single case or systemic, etc  ***

Recommendation
--------------
***OPTIONAL Client should liaise with their developers to....*** Conduct a thorough internal review of the application’s access control. Lateral Security recommends designing an authorisation matrix to document each piece of application functionality:

 * What the functionality is (***EXAMPLE***)
 * Details of any role-based access restrictions applied (***EXAMPLE***)
 * Details of any user-based access restrictions applied (can the resource being acted on be modified only by its owner? If not, which elements can be accessed by non-owners? Who can read/write?)
 * Details of which resource properties can be read/written to (should the user be able to modify resource metadata?)

After working through this documentation, for each of these noted categories the review needs to consider:
 * What technical controls do we have in place to enforce this expectation?
 * How do we know they are working?

The access control system should be well structured, modular and centralised rather than implemented via ad-hoc checks on each piece of functionality.
When there is confidence that the intended policy is being enforced by robust technical controls, the noted issues should be retested.
The documentation detailed above should be provided to testers to ensure thorough testing of the intended restrictions, as well as to ensure that the documented functionality covers all application routes and features.

It is noted that continuing to reference resources by their identifier will have minimal security impact when intended access controls are being enforced.

For further information regarding this type of vulnerability please see the following links:
  * https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html
