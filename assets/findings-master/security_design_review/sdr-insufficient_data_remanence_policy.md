SDR-X Insufficient Data Remanence Policy
========================================

Description
-----------
The design does not contain a sufficient policy on data remanence. Data remanence concerns the residual data left on storage hardware even after hardware failure or attempted erasure has occurred. Data remanence policy includes measures that will help prevent data loss after hardware decommissioning and how hardware, which has been used to store data, should be disposed.

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Medium – Without sufficient documentation, it is impossible to determine whether security requirements have been met. If hardware which contains sensitive data is released to the public, the data could be used to harm the reputation of the organisation.

Recommendation
--------------
The documentation should mandate data encryption where possible and the destruction of data storage hardware which has been used by the implementation. This should include the process for the destruction of this hardware and a sign off to ensure that it has occurred.
