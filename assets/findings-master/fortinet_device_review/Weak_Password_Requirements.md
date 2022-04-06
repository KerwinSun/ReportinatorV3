CR-10 Weak Password Requirements
Description
The firewall configuration does not require password to meet the standards of the New Zealand Information Security Manual. The default password length requirement of the firewall is 8 characters.
Reproduction Details
To see that the configuration is not following a password policy recommended by NZISM, notice that a stanza is not included which contains the following strings.
config system password-policy
status enable
set minimum-length 16
Systems Affected
	[SYSTEM]
Severity
Medium – Weak password requirements make it easier for an attacker to brute force a system.
This configuration does not meet the requirements of NZISM 16.1.21.
Recommendation
The configuration should adhere to the password recommendations of NZISM. Lateral Security recommend setting a minimum length for passwords of 16 characters.
