ACR-X Account Information
=========================

Description
-----------
Lateral Security did not have access to check some configuration settings. These include:
* Whether security questions have been set
* Whether detailed billing as been enabled
* Whether current contact details have been set
* Whether security contact information has been registered

Reproduction Details
--------------------
These settings cannot be reviewed with read-only privileges.

Severity
--------
Info – These configuration settings might be correct, but they should be checked. This issue concerns the following CIS benchmark recommendations.
* 1.15 Ensure security questions are registered in the AWS account
* 1.17 Enable detailed billing
* 1.19 Maintain current contact details
* 1.20 Ensure security contact information is registered

Recommendation
--------------
Ensure that these settings have been configured with accurate and up-to-date information.

The root account email address should not point to a specific individual, but to a group email account with a member list authorised to have root access. Multi-factor authentication devices for the root account should not leave the organisation premises. This device should be secured. The contact information should be that of the organisation and not an individual.
