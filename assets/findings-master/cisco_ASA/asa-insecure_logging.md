ASA-X Insecure Logging
======================

Description
-----------
The logging protocol, Syslog, has not been configured to use encryption to secure its transport. Logging from the devices will occur in plain text.

Reproduction Details
--------------------
Observe that the line containing the string "logging host" does not include the word "secure". The absence of this word indicates that an SSL/TLS transport will not be used.

Systems Affected
----------------
The following system is/systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Were an attacker to gain access to the network between the device and log host, the attacker could view or alter the logs. This could facilitate certain attacks, provide information to the attacker about what is being recorded, and possible allow the attacker to erase evidence of attack.

Recommendation
--------------
Configure the devices and log hosts to use an encrypted protocol to perform centralised logging.
