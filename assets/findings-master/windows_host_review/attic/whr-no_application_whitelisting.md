WHR-X No Application Whitelisting in Use
========================================

Description
-----------
The servers do not have an active form of application whitelisting configured. While there are some Application Control Policies defined allowing packaged Windows Apps, and preventing the execution of Microsoft OneNote, there are no further rules preventing or allowing other executables, and rule enforcement is not enabled.

Application whitelisting allows administrators to dictate what applications, scripts and libraries are allowed to run on a system. Modern Microsoft Operating Systems have two in-built mechanisms for application whitelisting, these are Software Restriction Policies and Applocker. Applocker is the more powerful and configurable technology, and was introduced in Windows 7 and Windows Server 2008 R2 as a replacement for Software Restriction Policies.

Systems Affected
----------------
  * ***SYSTEM***

Severity
--------
Medium – If an attacker gained execution as a privileged or unprivileged user they may be able to write files to disk and execute them.

Reproduction Details
--------------------
Run the 'GPResult' utility and view the Application Control Policies that apply to the device.

Recommendation
--------------
Lateral Security recommends enabling Applocker and setting it in a whitelisting mode on all Microsoft Windows systems. For more information read the ASD guide "Top 4 Strategies to Mitigate Targeted Cyber Intrusions: Mandatory Requirement Explained" available at the following URL:
  * http://www.asd.gov.au/publications/Top_4_Strategies_Explained.pdf

Application Whitelisting is one of "The Essential Eight" on the Australian Signals Directorate list of practical actions to prevent a targeted cyber-attack.
  * https://asd.gov.au/publications/protect/essential-eight-explained.htm
