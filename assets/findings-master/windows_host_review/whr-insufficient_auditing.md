WHR-X Insufficient Auditing
===========================

Description
-----------
Several auditing settings do not meet the recommendations of the Center for Internet Security (CIS).

* https://www.cisecurity.org/cis-benchmarks/

The following settings disagree.

[The settings in disagreement with CIS]

Reproduction Details
--------------------
To see the audit policy settings, issue the following command from PowerShell.

```
auditpol /get /category:*
```

Compare these results with the operating system benchmark issued by CIS.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – Without proper auditing, the chances of suspicious events going unnoticed is higher.

This finding indicates a lack of adherence to:

* NZISM 16.6. Event Logging and Auditing

Recommendation
--------------
Ensure that proper auditing occurs by selecting the settings recommended by the CIS benchmark.
