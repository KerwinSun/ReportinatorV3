WHR-X Web Logs Stored on System Drive
=====================================

Description
-----------
Lateral Security discovered that the web servers reviewed had IIS log settings configured to log to the system drive (C :). Web data and logs should be kept on a separate partition from the system drive to ensure that a denial-of-Service condition is not created if a web application fills the disk.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Low – A Denial-of-Service condition could be created if a web application creates enough data to fill the system drive. Additionally, if hosted web applications are found to be vulnerable to a directory traversal attack, the logs may be retrieved by a remote attacker.

Recommendation
--------------
Ensure all web content and web logs are stored on a separate partition from the system partition, so that if the disk is filled it does not cause a Denial of Service condition. In addition, log files should be copied to a separate log server for analysis and reporting.
