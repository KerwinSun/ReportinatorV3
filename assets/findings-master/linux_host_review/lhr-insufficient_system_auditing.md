LHR-X Insufficient System Auditing
==================================

Description
-----------

The reviewed host was not logging to a central log host. A central log host provides a facility for duplicate logging off-host, thereby increasing defence-in-depth and easing auditing.

The auditd installation was not configured according to the recommendation of well-known security benchmarks. The auditd package is a part of the Linux audit framework and it is the logging facility for this framework and SELinux. The configuration will not keep logs.

The aide package was not installed. The aide package allows files and directories to be audited for changes. It does this using message digest algorithm checksumming.

Reproduction Details
--------------------
To verify that logging is not being duplicated to a central log server, issue the following command. ***The matching lines were commented out and no logs were sent to a log host.***
```
egrep '^*.*[^I][^I]*@' /etc/rsyslog.conf
```
To verify that the auditd configuration is not following good practices, perform these steps:
Issue the following command to determine whether logs from auditd are configured to be kept. ***This was set to "ROTATE", which will purge oldest logs after num_logs has been reached.***
```
grep max_log_file_action /etc/audit/auditd.conf
```
Review the grub configuration to determine whether auditing is occurring during boot before the auditd daemon has had time to start. An audit directive would be present in the kernel command line. This directive was not present in the conifguration.

View the auditd configuration configuration in /etc/audit. The files did not contain the recommendations of well-known security benchmarks. A compilation of these settings has been included in **Appendix B - audit.rules**.
```
view /etc/audit/audit.rules
```
To verify that aide is installed on the host, issue the following command. During review, aide was not installed.
```
rpm -q aide
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – Were a host to become compromised, any logs which might point to the compromise or how the compromise occurred could be erased or otherwise tampered with to prevent proper audit. It also indicates that hosts might not be monitored, since hosts would have to be monitored individually, which is unlikely.

Because auditd is not configured correctly, some informative, loggable system call information will not be recorded to a logging facility.

The aide package shows modification to files on the file system, and the lack of this tool means that should an attacker gain access to the host, certain changes may go unnoticed.

Insufficient host auditing does not follow best practices and means that the source of compromise of a host could be more difficult to determine.

This finding indicates a lack of adherence to NZISM 14.1 and NZISM 16.5.

Recommendation
--------------
Lateral Security recommends that all logging be duplicated to a central log host over a TLS encrypted transport. Instructions on how to set this up can be found at the link below:
  * http://www.rsyslog.com/doc/v8-stable/tutorials/tls_cert_summary.html

Set max_log_file_action to "keep_logs". Ensure that auditing will occur during boot before auditd is started by setting the "audit=1" directive in the grub kernel command line. Set the auditd configuration to that recommended in a well-known security benchmark, such as those provided by the STIG or Center for Information Security and install the aide package and initialise its database.

A good auditing configuration should attempt to answer several questions:
* What are desired parameters for a given environment?
* What changes have been made to these desired parameters?
* Who made the changes?
* Can the record of these changes be proven authentic?

Audit logs should be automatic, accurate, up-to-date, unalterable, and relevant to policy compliance. They should not be so copius as to be unusable.

See the contents of **Appendix B**.

Appendix B - audit.rules
========================

The following command will produce output specific to the system that it is run on. This output will be rule, which should be added to "/etc/audit/audit.rules".
```
find <partition> -xdev \( -perm -4000 -o -perm -2000 \) - type f | awk '{print " -a always,exit -F path="$1" -F perm=x -F auid>=500 -F auid!=4294967295 -k privileged"}'
```
The following rules should also be added to "/etc/audit/audit.rules".
```
# RECORD EVENTS THAT MODIFY DATE OR TIME
-a always,exit -F arch=b64 -S adjtimex -S settimeofday -k time-change
-a always,exit -F arch=b32 -S adjtimex -S settimeofday -S stime -k time-change
-a always,exit -F arch=b64 -S clock_settime -k time-change
-a always,exit -F arch=b32 -S clock_settime -k time-change
-w /etc/localtime -p wa -k time-change

# RECORD EVENTS THAT MODIFY USERS OR GROUPS
-w /etc/group -p wa -k identity
-w /etc/passwd -p wa -k identity
-w /etc/gshadow -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/security/opasswd -p wa -k identity

# RECORD EVENTS THAT MODIFY NETWORK CONFIGURATION
-a always,exit -F arch=b64 -S sethostname -S setdomainname -k system-locale
-a always,exit -F arch=b32 -S sethostname -S setdomainname -k system-locale
-w /etc/issue -p wa -k system-locale
-w /etc/issue.net -p wa -k system-locale
-w /etc/hosts -p wa -k system-locale
-w /etc/sysconfig/network -p wa -k system-locale

# RECORD EVENTS THAT MODIFY THE SYSTEMS MANDATORY ACCESS CONTROLS
-w /etc/selinux/ -p wa -k MAC-policy

# RECORD LOGIN AND LOGOUT EVENTS
-w /var/log/faillog -p wa -k logins
-w /var/log/lastlog -p wa -k logins
-w /var/log/tallylog -p wa -k logins

# RECORD SESSION INITIATION EVENTS
-w /var/run/utmp -p wa -k session
-w /var/log/wtmp -p wa -k session
-w /var/log/btmp -p wa -k session

# RECORD DISCRETIONARY ACCESS CONTROL PERMISSION MODIFICATION EVENTS
-a always,exit -F arch=b64 -S chmod -S fchmod -S fchmodat \
-F auid>=500 -F auid!=4294967295 -k perm_mod
-a always,exit -F arch=b32 -S chmod -S fchmod -S fchmodat \
-F auid>=500 -F auid!=4294967295 -k perm_mod
-a always,exit -F arch=b64 -S chown -S fchown -S fchownat -S lchown \
-F auid>=500 -F auid!=4294967295 -k perm_mod
-a always,exit -F arch=b32 -S chown -S fchown -S fchownat -S lchown \
-F auid>=500 -F auid!=4294967295 -k perm_mod
-a always,exit -F arch=b64 -S setxattr -S lsetxattr -S fsetxattr \
-S removexattr -S lremovexattr -S fremovexattr -F auid>=500 \
-F auid!=4294967295 -k perm_mod
-a always,exit -F arch=b32 -S setxattr -S lsetxattr -S fsetxattr \
-S removexattr -S lremovexattr -S fremovexattr -F auid>=500 \
-F auid!=4294967295 -k perm_mod

# RECORD UNSUCCESSFUL, UNAUTHORISED FILE ACCESS
-a always,exit -F arch=b64 -S creat -S open -S openat -S truncate \
-S ftruncate -F exit=-EACCES -F auid>=500 -F auid!=4294967295 -k access
-a always,exit -F arch=b32 -S creat -S open -S openat -S truncate \
-S ftruncate -F exit=-EACCES -F auid>=500 -F auid!=4294967295 -k access
-a always,exit -F arch=b64 -S creat -S open -S openat -S truncate \
-S ftruncate -F exit=-EPERM -F auid>=500 -F auid!=4294967295 -k access
-a always,exit -F arch=b32 -S creat -S open -S openat -S truncate \
-S ftruncate -F exit=-EPERM -F auid>=500 -F auid!=4294967295 -k access

# RECORD SUCCESSFUL FILE SYSTEM MOUNTS
-a always,exit -F arch=b64 -S mount -F auid>=500 -F auid!=4294967295 -k mounts
-a always,exit -F arch=b32 -S mount -F auid>=500 -F auid!=4294967295 -k mounts

# RECORD USER FILE DELETION EVENTS
-a always,exit -F arch=b64 -S unlink -S unlinkat -S rename -S renameat \
-F auid>=500 -F auid!=4294967295 -k delete
-a always,exit -F arch=b32 -S unlink -S unlinkat -S rename -S renameat \
-F auid>=500 -F auid!=4294967295 -k delete

# RECORD SYSTEM ADMINISTRATOR SCOPE CHANGES
-w /etc/sudoers -p wa -k scope

# RECORD SYSTEM ADMINISTRATOR ACTIONS
-w /var/log/sudo.log -p wa -k actions

# RECORD KERNEL MODULE LOADING AND UNLOADING
-w /sbin/insmod -p x -k modules
-w /sbin/rmmod -p x -k modules
-w /sbin/modprobe -p x -k modules
-a always,exit -F arch=b64 -S init_module -S delete_module -k modules

# MAKE THE AUDIT CONFIGURATION IMMUTABLE
-e 2
```
