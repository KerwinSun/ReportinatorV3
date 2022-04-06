WHR-X Missing Security Updates
==============================

Description
-----------
The hosts are missing patches from the vendor. The vendor has deemed one of the patches critical. Patching is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Signals Directorate to help prevent compromise.

[include Microsoft security bulletins and ratings]

Reproduction Details
--------------------
To see that the system is missing security patches from the vendor, use the Microsoft Baseline Security Analyzer.
* https://www.microsoft.com/en-nz/download/details.aspx?id=7558

To see the frequency of patching, issue the following command.
```
get-hotfix
```

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
High – The missing patches include fixes for vulnerabilities, remote code execution and privilege escalation. Were an attacker to successfully exploit the vulnerabilities, the host would be compromised. The host could then be used as a platform to launch other attacks within the environment.

This finding indicates a lack of adherence to:

*  NZISM 12.4.4.

Recommendation	
--------------
Ensure that the host is patched and that a patching policy clearly delegates patch release monitoring and patch application responsibility. All critical vulnerabilities should be patched within 48 hours of their publication. Perform regular audits of these processes.
