ACR-X Many Guests
=================

Description
-----------
Many guests are in Azure Active Directory. Guests are usually users from outside the organisation, and might not be removed by normal policy procedures.

Reproduction Details
--------------------
To see that many guests are in Active Directory, browse to the following location.
* Azure AD -> Users and group -> All users -> Show Guest users only

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Info – This issue is being raised as informational.

Recommendation
--------------
Review the privileges assigned to users and ensure that they have no more than what is required to perform responsibilities. Consider removing guest users.
