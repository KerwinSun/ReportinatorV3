WHR-X Excessive Software Installed on Servers
=============================================

Description
-----------
The ***SERVER*** has Microsoft SharePoint 2010, Adobe PDF iFilter, and Microsoft SQL Server 2008 R2 installed in addition to the core software components installed for Microsoft BizTalk.

Systems Affected
----------------
  * ***SYSTEM***

Reproduction Details
--------------------
Review the installed software.

Severity
--------
Low – The more software running on a server, the greater attack surface that server has, as it is required to run more services and consequently can carry more vulnerabilities.

Running multiple products on the same server also introduces a risk to performance and availability. BizTalk, SQL and SharePoint may at times compete for resources on the system. Should this happen it could result in reduced response times and performance or could lead to availability issues.

Recommendation
--------------
Consideration should be given to separating the BizTalk and SharePoint servers to run on their own dedicated servers. As reliance on the solution increases, the additional load on these servers will increase the likelihood of a conflict and the impact to ***CLIENT*** of performance issues will increase. Given the resource and management requirements of SQL Servers, these should also be separated from the BizTalk and SharePoint servers where possible.

In addition, if the Adobe PDF iFilter software is not required for the operation of the BizTalk server, this should be removed.
