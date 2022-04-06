DR-X Insufficient Patching Policy
=============================================

Description
-----------
The design does not describe the process for upgrading the components of the implementation. 
It also does not describe how vulnerabilities and available patches will be monitored, 
how soon patching occurs after a patch has been released, what mitigations will be taken should a patch be unavailable for any of the components, 
nor who will be responsible for the patching and mitigations. 

Patching is one of the critical controls published by CERT NZ and part of the Essential Eight mitigations published by the Australian Signals Directorate to help prevent compromise.

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Medium – Without a well-defined patching policy, some components may go unpatched, leaving the overall implementation vulnerable to exploitation. 
This could lead to corruption of data, exfiltration of data, and ultimately to reputational damages and other losses to the organisation.

Recommendation
--------------
For each component of the implementation, the documentation should include:
* How vulnerabilities and available updates will be monitored
* How quickly lesser severity patches and critical patches must be applied
    * Lesser severity patches should be applied as soon as possible
    * Critical patches should be applied within 2 days
* What mitigations are available and detailed steps to achieve mitigation if patching is not possible
* Who will be responsible for monitoring, patching, and mitigation
    * This person or these people must have adequate authority to fulfil their responsibilities

