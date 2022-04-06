CNA-X Unpatched Operating System
================================

Description
-----------
The versions of IOS, which run on the devices, are out-of-date and have published vulnerabilities. Below are the reported versions and their respective CVEs.
[Included CVEs]

Reproduction Details
--------------------
To verify that the devices are running an unpatched version of IOS, issue the following command.
show version
Look up these reported versions in a vulnerability database, such as:
  * https://www.cvedetails.com/

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – These published vulnerabilities do not include arbitrary code execution or privilege escalation. They do include denial of service, which could cause serious interruption to dependant infrastructure and services. Some of these vulnerabilities were reported almost two years ago.

This finding indicates a lack of adherence to NZISM 12.4.

Recommendation
--------------
Ensure that a patching policy is in place, which meets the recommendations of NZISM at a minimum. This policy should include clear delegation of responsibility and mandate that patching occur on a routine basis. The operating systems on the servers should be upgraded to the most recent version supplied by the vendor.
