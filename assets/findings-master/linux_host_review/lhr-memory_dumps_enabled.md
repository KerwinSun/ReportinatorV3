LHR-X Insecure Debugging
========================

Description
-----------
A debugging feature of the operating system kernel, core dumps, is enabled. A core dump file contains the memory contents of an executable program at the time the dump was created. The contents of a file could contain sensitive information, such as credentials and passwords, and might not be limited to the information of the user if the program is setuid.

Reproduction Details
--------------------
To see that memory dumps are enabled, issue the following command.
```
sysctl fs.suid_dumpable 
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – If an attacker were able to cause a program containing senstive information in its memory to dump its contents to a
file, then that attacker might be able to use the sensitive information to escalate privilege.

Recommendation
--------------
Ensure that the /etc/security/limits.conf has the following directive.
```
* hard core 0
```
The system control file, /etc/sysctl.conf, should have the following directive.
```
fs.suid_dumpable = 0
```
Add this to a running configuration with the following command.
```
sysctl -w fs.suid_dumpable=0
```
