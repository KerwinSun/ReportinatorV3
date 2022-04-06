ODB-X Default Auditing Configured
=================================

Description
-----------
Examination of the database auditing within DBA_STMT_AUDIT_OPTS and DBA_PRIV_AUDIT_OPTS shows that the default audit rules exist. The default settings leave a fair audit trail of the most pertinent database queries. Secure auditing becomes more difficult when highly sensitive data is hosted within the database.

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – In the event that an attacker gains sufficient access to the database, all data may be obtained without any effective audit trail.

Recommendation
--------------
Refer to the design documentation to ascertain specifically what and how access to stored sensitive data should be audited. Investigate whether database-level auditing is stipulated within the design to decide if this is an oversight. In the event that it is the latter, conduct remedial discussions surrounding how project-wide audit data should be stored.

Due care must be taken to ensure additional auditing does not create another vector for the sensitive information to be stored. The fact that a particular user account conducted a query against a particular table resulting in a large set of results is pertinent. The results of the query may not be pertinent and would cause duplication of the data. 