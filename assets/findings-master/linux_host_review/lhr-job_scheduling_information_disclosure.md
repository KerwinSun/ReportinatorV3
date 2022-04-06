LHR-X Job Scheduling Information Disclosure
===========================================

Description
-----------
The current permissions and configurations of the job schedulers are not optimised for security. The job schedulers, cron and at, are responsible for running processes at specified times in the future. As a result, their configurations must contain information about future executions on a system.

***In particular:***
  * Any user can schedule jobs.
  * Scheduled jobs are viewable by all users.

Reproduction Details
--------------------
*** Update Theses ***
To verify the permissions of the cron configuration, issue the commands below. These files were viewable to all users. The file, cron.allow, is missing and cron will allow all users to schedule without it.

    ls -l /etc/cron*

To verify the permissions of the files responsible for the at daemon configuration, issue the following commands. The file, at.allow, is missing and cron will allow all users to schedule without it.

    ls -l /etc/at.*

The crontab for root included scripts which are world-readable. As root, issue the following command to see the root crontab.

    crontab -l

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
*** Update this ***
Low/High – This configuration discloses information about the systems. One way in which this information might be exploited would be that an attacker reads the configuration and learns which executables will be run. The attacker, then, modifies the executable file to elevate privilege. This attack depends on the scheduled file being writable through some means.

The scripts in the root crontab are owned and writable by the tomcat2 user, which runs a TCP/IP listening, application service. If this service were compromised in some way, then an attacker might be able to cause the service to alter the scripts executed by cron. This would allow arbitrary code execution and privilege escalation to root.

Recommendation
--------------
Lateral Security recommends that cron and at be set to default deny. All cron configuration files should be readable and writable only by root. The following commands will set the configuration as recommended:

    rm /etc/at.deny
    rm /etc/cron.deny
    touch /etc/at.allow
    touch /etc/cron.allow
    chown root:root /etc/at.allow
    chown root:root /etc/cron.allow
    chmod og-rwx /etc/at.allow
    chmod og-rwx /etc/cron*

Ensure that any files executed by the root crontab or controlling execution of the root crontab, either directly or subsequently, are only writable by root.
