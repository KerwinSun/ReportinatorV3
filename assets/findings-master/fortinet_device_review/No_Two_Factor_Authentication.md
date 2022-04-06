CR-8 No Two-factor Authentication
=================================

Description
-----------
Two-factor authentication has not been configured for access to the administrative interface of the firewall. The firewall provides multiple means of two-factor authentication, including certificate, email, SMS, and FortiToken.

Reproduction Details
--------------------
To see that two-factor authentication has not been enabled in the configuration, notice that a stanza is not included which contains the following strings.

config user local
set two-factor <2nd factor>

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Low – Two-factor decreases the chances that compromised credentials would allow an attacker to gain access to the implementation. Not using two-factor authentication does not follow good practice.

Recommendation
--------------
Configure the firewall to use two-factor authentication. Lateral Security recommend using certificate-base two-factor authentication. More information can be found in the section, “Two-factor authentication” of the link below.
 * https://docs.fortinet.com/document/fortigate/6.2.0/hardening-your-fortigate/612504/hardening-your-fortigate
