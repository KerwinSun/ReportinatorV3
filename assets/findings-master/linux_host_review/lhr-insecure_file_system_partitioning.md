LHR-X Insecure File System Partitioning
=======================================

Description
-----------

*** Update these as appropriate ***

File system partitioning allows an operating system to control information on different parts of the file system with different options and resources.
  * The current partitioning configuration cannot mitigate file system resource exhaustion, which occurs when a user or process writes to a file or files until no free space remains for other users or processes.
  * The current partitioning configuration will not allow some parts of the file system to be mounted with different mount options.
  * The current partitioning configuration will not prevent hard link attacks.

The partitioning scheme will not prevent hard link attacks. Hard links are equivalent to file names. At least two types of hard link attacks exist. One involves bypassing quota restrictions by filling a world writable directory with hard links. The other attacks take advantage of POSIX file systems, which allow files to be referenced by more than one hard link on the same partition. An example attack proceeds like this:
  1. A hard link is made to pieces of system software which an attacker believes might be exploitable in the future
  2. A vulnerability is discovered in one of those pieces of software
  3. The system administrator attempts to remove the vulnerable software by deleting the file name
  4. The file name is removed, but the vulnerable file is still referenced by another file name (hard link) on the same partition
  5. The attacker exploits the software through the remaining hard link

Several published attacks depend on hard links.
  * http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=hardlink

Reproduction Details
--------------------
To view the file system mount configuration and the file system mount options, use the following command.

    cat /etc/fstab

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – The current partition layout is not exploitable unless unprivileged users can log in, an unprivileged process malfunctions, or an unprivileged process is manipulated to write to user writable file systems through remote exploitation. Under these circumstances, the current partition layout would not prevent file system resource exhaustion, which would deny critical operating system services the ability to write, and it would not mitigate hard link attacks.

Some settings; such as nodev, nosuid, and noexec; cannot be configured for parts of the file system which should not allow device files, suid files, and executables.

Recommendation
--------------
*** Update these as appropriate ***
Directories which are writable by an unprivileged user should be mounted separately and with mount options that meet good practices. These partitions should be mounted on separate block devices with these settings.
  * /tmp should be mounted nodev, nosuid, noexec
  * /var
  * /var/log
  * /var/log/audit
  * /home should be mounted nodev

The /var/tmp file system should not reside on a separate block device. Instead:
  * /var/tmp should be bind mounted to /tmp

The tmpfs file systems should be mounted defaults,nodev,nosuid,noexec.
