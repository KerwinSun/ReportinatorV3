LHR-X Unhardened Network Configuration
======================================

Description
-----------
The network configuration has not been hardened.
  * ICMP *redirects* tell a system about alternate routes and the current setting allows a routing device to update the routing tables of the system, which is normally not needed unless the system is a router
  * The *log_martians* setting tells a system to log packets with non-routable source addresses to the kernel log
  * The *icmp_echo_ignore_broadcasts* setting helps prevent the system from participating in a Smurf attack
  * Source route validation, *rp_filter*, prevents the system from receiving certain bogus routing packets

Reproduction Details
--------------------
To verify that redirects have been disabled, issue the following command. During review, these were set to "1".

    sysctl -a | egrep 'net.ipv4.*(all|default).*_redirects'

To verify that martians will be logged, issue the following command. During review, these were set to "0".

    sysctl -a | egrep 'net.ipv4.*(all|default).log_martians'

To verify that source route validation has been enabled, issue the following command. During review, this was set to "0".

    sysctl net.ipv4.conf.all.rp_filter

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------

Info – This is not a vulnerability, but the current settings increase the attack surface of the system and do not follow the information assurance concept of defence in depth.

Recommendation
--------------
Lateral Security recommends that each setting mentioned above be set to its opposite, binary setting, which would be the more secure one in /etc/sysctl.conf. A reboot will be required using this method.

For *_redirects:

    echo 'net.ipv4.conf.all.accept_redirects = 0' >> /etc/sysctl.conf
    echo 'net.ipv4.conf.default.accept_redirects = 0' >> /etc/sysctl.conf
    echo 'net.ipv4.conf.all.secure_redirects = 0' >> /etc/sysctl.conf
    echo 'net.ipv4.conf.default.secure_redirects = 0' >> /etc/sysctl.conf
    echo 'net.ipv4.conf.all.send_redirects = 0' >> /etc/sysctl.conf
    echo 'net.ipv4.conf.default.send_redirects = 0' >> /etc/sysctl.conf

For log_martians:

    echo 'net.ipv4.conf.all.log_martians = 1' >> /etc/sysctl.conf
    echo 'net.ipv4.conf.default.log_martians = 1' >> /etc/sysctl.conf

For rp_filter:

    echo 'net.ipv4.conf.all.rp_filter = 1' >> /etc/sysctl.conf
