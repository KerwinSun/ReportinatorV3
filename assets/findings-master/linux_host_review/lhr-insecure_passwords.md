LHR-X Insecure Passwords
========================

Description
-----------
Passwords were found in miscellaneous files and in the running configuration of certain processes, ***some of these passwords appear to be default passwords that have not been changed.***

Reproduction Details
--------------------
***To see that the running configuration of some Java processes contains passwords, issue the following command:***

    ps auxwww | grep -i password

To see that some files contain passwords, issue the following command:

    find / -xdev -name "*.xml" -print0 | xargs -0 grep -i -n "password"

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
High – It is unclear what access could be gained with these passwords in the applications that they seem to be configured for. However, privilege escalation might be achieved through the use of these passwords which might otherwise not be possible - especially in the processes which are running as root. These passwords might be reused elsewhere on the system or on other systems. Therefore, successful exploitation might lead to the compromise of the environment.

The existence of default passwords does not comply with NZISM v2.3 14.1.8.

Recommendation
--------------
Lateral Security recommends that these configurations be reviewed by staff to determine what is necessary to keep. It might be possible to configure the processes from a file which is unreadable by unprivileged users. Most of the files containing passwords are in the /tmp directory and are probably unneeded. Consider these for purging.
