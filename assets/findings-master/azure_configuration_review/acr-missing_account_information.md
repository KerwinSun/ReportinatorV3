ACR-X Missing Account Information
=================================

Description
-----------
Some important contact information has not been set in the Azure account. This information is used by Microsoft to contact responsible parties for the environment if they become aware of a compromise.
* An email contact has not been set for the following subscriptions. These are also not configured to receive emails about alerts.

[name of subscriptions]

* A phone number contact has not been set for the following subscriptions. These are also not configured to alert subscription owners.

[name of subscriptions]

Reproduction Details
--------------------
To see that contact information has not been set, browse to the following location.
* Security Center -> Security Policy -> [name of subscription] -> email notifications

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – If full contact information is not set, important security information from the vendor might not be received.

Recommendation
--------------
Ensure that this information is included for all subscriptions. Contact information should belong to the organisation and should refer to a group, not an individual. Enable alerts for these subscriptions.
