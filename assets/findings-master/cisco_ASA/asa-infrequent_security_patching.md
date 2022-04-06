ASA-X Infrequent Security Patching
==================================

Description
-----------
Security patches from the vendor are applied infrequently. Patching is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Signals Directorate to help prevent compromise.

The version of the Adaptive Security Appliance Software has the following well-known, published vulnerabilities:

 * ***Include CVEs***

Reproduction Details
--------------------
To verify that the devices are running an unpatched version of IOS, issue the following command.
```
show version
```
Look up these reported versions in a vulnerability database, such as:
  * https://www.cvedetails.com/

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – These published vulnerabilities may lead to arbitrary code execution or privilege escalation. They also include denial of service, which could cause serious interruption to dependant infrastructure and services. *** Some of these vulnerabilities were reported almost two years ago.***

This finding indicates a lack of adherence to NZISM 12.4.

Recommendation
--------------
Ensure that a patching policy is in place, which meets the recommendations of NZISM at a minimum. This policy should include clear delegation of responsibility and mandate that patching occur on a routine basis. The operating systems on the servers should be upgraded to the most recent version supplied by the vendor.
