ENP-X Excessive Services on Public Ports
=================================

Description
-----------
The following services on the SCIS web server were identified as publicly exposed:
Port 	Detected Service

TCP 80	HTTP 
TCP 443	HTTPS
TCP 454	Unknown 
TCP 1221	Unknown
TCP 4022	Visual Studio Remote Debugging*
TCP 4024	Visual Studio Remote Debugging*
TCP 8172	Visual Studio Web Deploy*

*Based on port number, service response and documentation. 
The TCP 80 and 443 ports are used by the web server instance and are deemed necessary for public consumption. The extra five ports did not appear to be an essential part of SCIS. However, no vulnerabilities have been identified in these enumerated extra services. 

Reproduction Details
--------------------
Run a port scanning tool such as nmap to enumerate TCP services listening globally:
nmap 20.37.196.203 -p- -sC -sV -Pn -vvv
Systems Affected
The following host is affected by this issue:
*	nzseedsauthority.com

Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
Medium – Exposure of non-essential services to the public increases the attack surface of the platform. Should the exposed service contain security vulnerabilities, it can lead to a system compromise.

Recommendation
--------------
Lateral Security recommend the exposed services be investigated to identify whether they are required to be accessible publicly. IP address whitelisting is recommended where remote access is required for administrative/maintenance purposes.
