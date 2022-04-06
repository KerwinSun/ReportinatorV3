WHR-X Infrequent Operating System Patching
==========================================

Description
-----------
Vendor patches are infrequently applied to the operating system. Patching is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Cyber Security Centre to help prevent compromise.

Below is the patching history.

[include information from get-hotfix]

Reproduction Details
--------------------
To see that patches are infrequently applied, issue the following command.
    get-hotfix

Systems Affected
--------------
  * ***SYSTEM***

Severity
--------
Medium – Were an attacker to successfully exploit an unpatched system, the system could be compromised. The system could then be used as a platform to launch other attacks within the environment.

This finding indicates a lack of adherence to:

* 12.4. Product Patching and Updating

Recommendation
--------------
Ensure that vendor patches are frequently applied and that a patching policy clearly delegates patch release monitoring and patch application responsibility. All critical vulnerabilities should be patched within 48 hours of their publication. Perform regular audits of these processes.
