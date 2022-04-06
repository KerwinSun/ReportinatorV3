WA-X Access Control Issues
==========================

Description
-----------
The access control systems present in the application were found to behave inappropriately in a number of identified instances. ***OPTIONAL: Although the access control logic was not visible to Lateral Security during testing, intended access control boundaries have been inferred based on the user interface presented.***

***OPTIONAL: Given the significant number of access control issues identified during this review, the access control subsystem is considered broken.***

Specific instances of broken access control which were identified include:

 * ***FILL ME IN***

***OPTIONAL: The breadth of application bypass issues suggests that secure development practices are not being adhered to in the development of the application codebase. Considerations for access control logic are a fundamental part of the design of a secure system, as they are complex and error prone to apply to an existing system.***

Reproduction Details
--------------------
* ***FILL ME IN***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium/Critical – ***OPTIONAL: Given the systemic nature of this issue, it presents an unquantifiable threat due to the likelihood of further unknown vulnerabilities of unknown impact.***

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
