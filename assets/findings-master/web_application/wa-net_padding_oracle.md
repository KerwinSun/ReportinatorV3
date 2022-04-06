WA-X .NET Padding Oracle
========================

Description
-----------
The application demonstrates behaviour consistent with vulnerability to a padding oracle attack which could allow an attacker to read arbitrary files from the web server. This is a known vulnerability within old versions of .NET (MS10-070). When it appears in modern web applications it is commonly a result of a legacy encryption mode configuration or a false positive. This should be investigated internally to ensure that the vulnerable behaviour is not present.

Padding Oracle attacks are created when a web application utilises the end-user as a courier for a sensitive message which is in encrypted form. The goal of encryption is generally to ensure that the message cannot be decrypted and that verification of the message is conducted to detect manipulation.

Where no validation is conducted prior to decryption of the encrypted parts, it is possible for an attacker to modify the ciphertexts and observe changes. Information may be inferred through a process of modifying the ciphertext, relaying it to the application and observing the result.

The Padding Oracle attack requires the ability to determine state, specifically:
 * Was the encrypted message successfully decrypted, but invalid?
 * Was the encrypted message unsuccessfully decrypted?

With the ability to determine these states, if CBC is in use with PKCS #7 padding, it is possible to decrypt and modify encrypted data.

Commonly, error messages are used to determine the above state. Some general recommendations state that by sharing (identically and byte-for-byte) a common error message, then the attack would be prevented. However, the following should be considered:
 * Gaining visibility of parsing the message in any form, possibly via another channel, could provide a suitable oracle.
 * Timing attacks can potentially be used to determine state. This is particularly true when the encrypted blocks are repeated for effect.

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN***

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SITE***

Severity
--------
High – A successful padding oracle attack would allow an attacker to read encrypted message content and potentially modify the original plaintext. The ASP.NET interfaces “WebResource.axd” and “ScriptResource.axd” accept an encrypted filename and retrieve this file. Manipulation of this encrypted filename could allow an attacker unauthorised read access to the file server.

On average 128 requests would be required for a single byte of decrypted data. Tools such as “padbuster.pl” are simplistic and largely used for proof-of-concept purposes, but may be suitable for the identified potentially vulnerable functionality.

Recommendation
--------------
A patch for MS10-070 is available from Microsoft. This patch resolves the vulnerability by adding an HMAC to the encrypted message to prevent tampering.

***Consider adding the following if the app is not legacy: Given that the vulnerability is from 2010, it is likely that this behaviour is either caused by legacy encryption mode being enabled or is a false positive.***
