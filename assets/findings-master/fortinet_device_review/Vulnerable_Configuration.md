CR-11 Vulnerable Configuration
==============================

Description
-----------
The firewall device has been configured to allow its configuration to be reset with a USB drive inserted into the device followed by a device power cycle. Under these conditions, the device will attempt to load its configuration from the USB drive.

Reproduction Details
--------------------
To see that auto-install via USB has not been disabled, notice that a stanza is not included which contains the following strings. Instead, these are set to “enable”.

config system auto-install
set auto-install-config disable
set auto-install-image disable

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – This vulnerability would require physical access to the device, but could allow an attacker to replace the configuration of the device with one provided by the attacker.

Recommendation
--------------
The auto-install via USB functionality should be disabled on the device. For more information, see "Disable auto installation via USB" in the link below.
 * https://docs.fortinet.com/document/fortigate/6.2.0/hardening-your-fortigate/612504/hardening-your-fortigate
