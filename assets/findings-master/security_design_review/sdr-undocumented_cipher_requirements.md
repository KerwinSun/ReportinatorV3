SDR-X Undocumented Cipher Requirements
======================================

Description
-----------
The design does not contain a policy on cipher requirements. A cipher is an algorithm which encrypts plaintext to ciphertext or decrypts ciphertext to plaintext. The security of a ciphertext is dependent on the strength of its cipher. Some widely supported ciphers have known weaknesses.
Other components will also make use of encryption. All of these should allow some configuration of their ciphers.

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Low – Without documentation, it is impossible to determine whether security requirements have been met. The use of weak ciphers may make data transfers to, from, and within the implementation vulnerable to interception either now or the near future. Disclosure of sensitive information could damage the reputation of the organisation.

Recommendation
--------------
Policy should detail the use of encryption in every component which supports it. Some examples would include web applications, file transfer protocols, volume/file system encryption, websites, and remote administration. Use modern ciphers which are not known to be weak. Disable all other ciphers within configurations. Do not use pieces of software or protocols which do not support strong ciphers. NZISM 17.2, Approved Cryptographic Algorithms, provides a baseline for cryptographic cipher selection.
