WHR-X No Centralised Logging
============================

Description
-----------
Lateral Security did not identify a central logging configuration. Centralised Logging on Windows servers is commonly performed using event log forwarding to send event logs to a central log host, using a syslog agent, or by using a remote collector to pull logs to a central log host. Centralised logging provides a more comprehensive view of an environment.

Reproduction Details
--------------------
Issue the command below from PowerShell. Note that no computers are a member of this group.
```
net localgroup "event log readers"
```
Issue the command below from PowerShell. Note that no third-party, centralised logging software has been installed.
```
get-wmiobject win32_product
```

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – Were a compromise to occur, the attacker might erase or manipulate local logs, hindering incident response. This finding indicates that systems might not be actively monitored, since systems would have to be monitored individually, which is unlikely. Without centralised logging, the synthesis of events from multiple systems and devices within the environment into a timeline becomes more difficult.

This finding indicates a lack of adherence to:

* NZISM 14.1. Standard Operating Environments

Recommendation
--------------
Lateral Security recommends sending all critical log files to a dedicated, central log server. Critical logs include event logs, IIS logs, and other application logs. The mechanism for this is dependent on the hosting infrastructure, storage, and logging infrastructure available. Syslog is a suitable remote logging mechanism for a mixed environment, as it is supported by a variety of platforms including network devices and Linux/Unix hosts.
