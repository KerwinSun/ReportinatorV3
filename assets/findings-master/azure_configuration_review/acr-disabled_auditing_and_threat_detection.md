ACR-X Disabled Auditing and Threat Detection
============================================

Description
-----------
Auditing and threat detection has not been enabled on some SQL servers and databases. Auditing and threat detection helps to detect anomalous database server and database activity which might indicate attacks, such as SQL injection. Detected events can be sent via email and recorded in an audit log.

Reproduction Details
--------------------
To see that auditing and threat detection are disabled, browse to the following locations.
* Security Center -> Storage and data

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – If auditing and threat detection are not enabled, the probability that malicious activity will go undetected will increase. Leaving this feature disabled contravenes the recommendation of the vendor.

Recommendation
--------------
Turn on and configure this service so that authorised roles within the organisation will receive alerts when anomalous activity occurs. For more information, see the link below:
* https://docs.microsoft.com/en-us/azure/security-center/security-center-enable-auditing-on-sql-servers
