LHR-X Insecure SSH Configuration
================================

Description
-----------
The SSH server has the following insecure settings.
  * Protocol tells the daemon which versions of the SSH protocol should be accepted. SSHv1 is insecure.
  * PermitEmptyPasswords tells the daemon whether empty password should be accepted.
  * PermitRootLogin tells the daemon whether to allow root to log in.

  * X11Forwarding allows X11 traffic through the connection and is enabled.
  * MaxAuthTries specifies that maximum number of authentication attempts permitted per connection, but is not set.
  * Ciphers limits the types of ciphers that the SSH server will accept, but is not set.
  * ClientAliveInterval specifies the length of time that no activity is allowed before a session is terminated, but is not set.
  * ClientAliveCountMax tells the SSH server to send client alive messages at the time specified in ClientAliveInterval, but is not set.
  * Banner specifies a file whose contents will be sent to the user before authentication, but is not set.

Reproduction Details
--------------------
To check for these settings, issue the following command and look for the underlined words in the description.
/usr/sbin/sshd -T

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------

Medium – These settings do not follow good practice. The ciphers accepted will prevent SSH from forcing clients to connect with a well secured transport. Other settings weaken the behaviour of the daemon.

This finding indicates a lack of adherence to NZISM 17.2, Approved Cryptographic Algorithms.

Recommendation
--------------
Lateral Security recommends that the SSH daemon have the following in /etc/sshd_config.

    Protocol 2
    PermitEmptyPasswords no
    PermitRootLogin no
    X11Forwarding no
    MaxAuthTries 4
    Ciphers aes256-gcm@openssh.com,aes128-gcm@openssh.com
    KexAlgorithms curve25519-sha256@libssh.org
    MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512,hmac-sha2-256
    ClientAliveInterval 300
    ClientAliveCountMax 0

Banner should be set to a file which contains an appropriate warning banner. This should be approved by the legal department. Lateral Security would recommend that chacha20-poly1305@openssh.com be given preference among ciphers, but it is not one of the approved algorithms in NZISM 17.2.
