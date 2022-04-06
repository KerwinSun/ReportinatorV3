LHR-X Insecure File System Permissions
======================================

Description
-----------
Some file system locations have insecure settings. File system ownership and permission settings help prevent system exploitation by keeping attacker from altering or executing sensitive files, or exhausting system resources.

The sticky bit, when set on world-writable directories, prevents users from renaming or deleting files that they do not own. The following world-writable directories do not have this bit set:

***include file list***

Certain locations, which are not usually world-writable, are world-writable:

***include file list***

Certain locations have no owner:

***include file list***

Reproduction Details
--------------------
To see that some directories are world-writable without the sticky bit, issue the following command:
```
find / -xdev -perm -o+w -type d -exec /bin/ls -ld {} \;
```
To see that some files are world-writable, issue the following command:
```
find / -xdev -perm -o+w -type f -exec /bin/ls -ld {} \;
```
To see that some locations are unowned, issue the following command:
```
find / -xdev \( -nouser -o -nogroup \) -print;
```

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – These settings could be used by an attacker to cause a denial of service or some unpredictable behaviour on the systems. This could occur if the attacker were to rename an important file or delete it, or continuously write to a writable file on a sensitive partition.

If a new user were assigned the same uidNumber as the unowned paths, then the new user will own those paths.

Recommendation
--------------
Ensure that the directories enumerated in the description have the sticky bit set. This can be done with the following command:
```
chmod a+t <path>
```
Consider changing the permissions of world-writable locations, and assign ownership to unowned files. If no regular user should own them, then assign them to root.
