ACR-X Disabled TDE
==================

Description
-----------
Like disk encryption, transparent data encryption (TDE) functions at the database level to improve the security of database data, including the database, backups, and transaction logs. This feature has not been enabled on some databases in the implementation.

Reproduction Details
--------------------
To see that TDE is disabled, browse to the following locations.
* Security Center -> Storage and data

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – If the underlying drives were rotated out due to failure, end-of-life, or another reason by the cloud provider, then sensitive data might be acquired by an attacker by means of salvage. Encrypting databases also helps to mitigate the negative consequences of hardware theft.

Recommendation
--------------
Lateral Security recommends that all databases be configured to use data encryption. For more information, see the links below.
* https://docs.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption-azure-sql
