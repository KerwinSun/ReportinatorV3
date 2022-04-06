ACR-X Undistributed Database
============================

Description
-----------
CosmosDB has no read regions and does not distribute globally. CosmosDB is replicated automatically within a region, but this replication will not provide resilience in the case of region failures.
* https://docs.microsoft.com/en-us/azure/cosmos-db/regional-failover

Reproduction Details
--------------------
Azure CosmosDB -> [name of database] -> Replicate data globally

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – If a widespread disaster occurred, access to the database might not be possible.

Recommendation
--------------
Consider replicating the data in the database to another region. If possible, replicate the database to another part of the globe.
