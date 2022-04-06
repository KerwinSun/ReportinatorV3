CNA-X Weak Account Requirements
===============================

Description
-----------
Several account settings do not meet good practice. Passwords have not been securely hashed, but encoded in an easily reversed format known as the “Vigenère cipher”. This cipher was broken prior to 1846.

Password retry lockout is not being used. This feature helps prevent brute forced authentication by telling the device to lock out a user after a set number of failed attempts.

Password recovery has not been disabled. Password recovery allows a user to access the device configuration, clear the password, and access NVRAM.

Reproduction Details
--------------------
To verify that the Vigenère cipher is in use, note that the following string is included in the configuration.
    password 7
To verify that password retry lockout is not enabled, note the following string is missing from the configuration.
    authentication attempts max-fail
To verify that password recovery has not been disabled, note the following is missing from the configuration.
    no service password-recovery

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – The Vigenère cipher is not secure. Password can be reversed in seconds by anyone who has access to the device configuration. This might allow an attacker to gain access to other systems in the environment, which have been configured to use the same password.

By not setting max-fail, an attacker could use an arbitrarily long dictionary list to attempt many passwords over time against the devices, which might lead to their remote compromise.

Allowing password recovery functionality exposes the device to configuration tampering.

This finding indicates a lack of adherence to NZISM 17.2.

Recommendation
--------------
Never use “password 7” in a configuration. Instead, use an NZISM approved hashing algorithm, such as SHA-256. In IOS, this is provided by the “password 8” directive. All passwords used up to this point should be changed. The configuration directive, max-fail, should be added to the device configuration to help prevent brute force attacks. Password recovery should be disabled to prevent insecure console access. Please see General Management Plane Hardening in the Cisco Guide to Hardening for more information.
  * http://www.cisco.com/c/en/us/support/docs/ip/access-lists/13608-21.html
