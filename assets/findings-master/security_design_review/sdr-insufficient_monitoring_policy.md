SDR-X Insufficient Monitoring Policy
====================================

Description
-----------
The design does not detail the log facility and responsibilities of monitoring. Centralised logging facilitates monitoring the events within an implementation and can better provide a big picture view of what might otherwise seem like unrelated events and provides an easier point for the backup of logs. Assigning monitoring responsibilities can better ensure that monitoring will occur.

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Info – If logging is not centralised, important coincidences which point to an attacker infiltrating the implementation may go unnoticed. Were a host to become compromised, any logs which might point to the compromise or how the compromise occurred could be erased or otherwise tampered with to prevent proper audit. It also raises the question of, "how are host events being monitored?" If responsibilities are not delegated by policy, then monitoring might not be performed. This finding is not a vulnerability, but does not follow good practice.

Recommendation
--------------
The design should mandate centralised, duplicated logging. Monitoring should be clearly delegated in policy.
