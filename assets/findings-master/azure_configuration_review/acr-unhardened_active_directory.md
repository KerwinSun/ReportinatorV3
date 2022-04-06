ACR-X Unhardened Active Directory
=================================

Description
-----------
Additional hardening of the Azure environment has not been performed. The following steps have not been taken.
* The Azure AD administration portal has not been restricted to administrators. 
* The privilege of assigning members to groups has not been restricted to administrators.
* The "All Users" group has not been enabled to more easily apply restrictions across the environment.
* Adding devices to the Azure environment does not require multi-factor authentication.

Reproduction Details
--------------------
These settings can be found in Azure Active Directory under the users, groups, and devices settings.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – Allowing any user to see the Active Directory portal could provide useful information about the Azure account to an attacker. Allowing users to assign members to groups and to add devices without multi-factor authentication increases the attack surface of the environment. Without being able to apply policy to all users, some individual account might remain unrestricted.

Recommendation
--------------
The AD portal and ability to assign members to groups should be restricted to administrators only. Adding devices should require multi-factor authentication and the All Users group should be enabled.
