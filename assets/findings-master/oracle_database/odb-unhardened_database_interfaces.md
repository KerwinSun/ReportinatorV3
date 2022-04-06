ODB-X Unhardened Database Interfaces
====================================

Description
-----------
A number of security controls, which can further strengthen the TNS Listener interface, have not been configured. Strong encryption is not enforced. The directive, "SQLNET.ENCRYPTION_SERVER", is not set to "REQUIRED" within the "sqlnet.ora" configuration files. It therefore allows a database client to decide how the communications should be secured.

No evidence of Class of Secure Transport ("COST") was identified within the "tnslistener.ora" configuration files. The following directives were not found:
  * DYNAMIC_REGISTRATION_listener_name
  * SECURE_CONTROL_listener_name
  * SECURE_REGISTER_listener_name
  * SECURE_PROTOCOL_listener_name

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – To conduct an attack, there is a prerequisite of gaining sufficient network access. A successful attack would yield sensitive credentials, database contents and may lead to a compromise of the underlying host operating system.

Recommendation
--------------
Consider enforcing the use of encryption to ensure all database communication is protected from eavesdropping. 
Implement COST security controls to prevent TNS Listener poisoning. Ensure "Dynamic Registration" is explicitly disabled. 
Lateral Security recommends that the database security controls be hardened in accordance with the CIS Oracle Database 11g benchmark, which may be found at the following location: 
  * https://benchmarks.cisecurity.org/downloads/multiform/index.cfm 