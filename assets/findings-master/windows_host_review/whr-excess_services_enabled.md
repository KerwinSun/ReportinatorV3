WHR-X Excess Services Enabled
=============================

Description
-----------

Services are set to run automatically on start-up. These are unlikely to be necessary for the implementation, and may reduce system security.

The services are as follows:

* IP Helper
* Print Spooler
* IKE and Authsec Keying Modules

Reproduction Details
--------------------

To see the running services, issue the following command.

```
get-service
```

Systems Affected
----------------

  * ***SYSTEM***

Severity
--------

Medium – Any running application or service increases the attack surface of the implementation. Good security practice requires that a system run only the services and processes which are required for its correct operation.

This finding indicates a lack of adherence to:

* NZISM 14.1. Standard Operating Environments

Recommendation
--------------

Review the list of services which will run when the server starts up, and change the startup type of those which are not necessary to "Manual".
