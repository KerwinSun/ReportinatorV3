WA-X Production Data in Test Environment
===============================

Description
-----------
It was noted that the test environment contains data that appears to be sourced from the production environment. Cloning production systems for testing purposes is a common method of ensuring that test results are representative of production behaviour; however it is pertinent to note that test systems are often not configured with the same level of protection as a production system. Test environments are also often exposed to third parties whose access to production data should be minimised. Exposure of production data through test systems is a common cause of data breaches, as noted by the Office of the Privacy Commissioner: https://www.privacy.org.nz/blog/breach-case-4-testing-with-real-data/

In addition to increasing the exposure of this data, some uses of production data may be in violation of the Privacy Act which requires that:
* Personal information obtained for one purpose not be used for any other purpose.
* Personal information be protected by reasonable security safeguards.

***More detail on what the data is and whether it's being protected appropriately, whether it's relevant to the functionality being tested or has been included for no reason***

Reproduction Details
--------------------
 * ***FILL ME IN***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Info – ***Highly variable***

Recommendation
--------------

Where possible, do not use production data in test environments but instead generate similar looking data that does not correspond to actual users. 

If production data must be used, it is recommended that it be sanitised by removing personally identifying information. If there are concerns regarding compliance with the Privacy Act, seek independent legal advice regarding compliance.


