LHR-X Infrequent Third-party Software Patching
==============================================

Description
-----------
The system third-party software is infrequently patched. The version of VMware Tools installed on all reviewed systems indicates that the underlying virtual machine host is running a version of VMware ESXi with known vulnerabilities.

*** Update these ***

cpe:/a:vmware:tools:10.1.5 was released 23 Feb 2017.
  * https://docs.vmware.com/en/VMware-Tools/10.1/rn/vmware-tools-1015-release-notes.html

The newest version is cpe:/a:vmware:tools:10.2.0, released 14 Dec 2017.
  * https://docs.vmware.com/en/VMware-Tools/10.2/rn/vmware-tools-1020-release-notes.html

cpe:/a:vmware:tools:10.1.5 indicates cpe:/o:vmware:esxi:6.0
  * https://packages.vmware.com/tools/versions

cpe:/o:vmware:esxi:6.0 has the following known vulnerabilities.
  * CVE-2017-4941	Exec Code Overflow
  * CVE-2017-4940	XSS
  * CVE-2017-4933	Exec Code Overflow
  * CVE-2017-4925
  * CVE-2017-4905	+Info
  * CVE-2017-4904	DoS Exec Code Overflow
  * CVE-2017-4903	Exec Code Overflow
  * CVE-2016-7463	XSS
  * CVE-2016-5331	Http R.Spl.
  * CVE-2016-5330	+Priv
  * CVE-2015-6933
  * https://www.cvedetails.com/vulnerability-list/vendor_id-252/product_id-22134/version_id-188904/Vmware-Esxi-6.0.html

Reproduction Details
--------------------
To see that the third-party software is infrequently patched, issue the following command.
*** Update this***
vmware-toolbox-cmd -v

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – ***The reviewed systems might be vulnerable to remote code execution and privilege escalation.*** Were an attacker to successfully exploit an unpatched system, the system could be compromised. This could lead to a compromise of the underlying infrastructure and the system environment.

This does not comply with NZISM 12.4.

Recommendation
--------------
Ensure that the systems are patched and that a patching policy clearly delegates patch release monitoring and patch application responsibility. All critical vulnerabilities should be patched within 48 hours of their publication. Perform regular audits of these processes.
