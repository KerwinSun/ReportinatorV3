SDR-X Unencrypted Private WAN
=============================

Description
-----------
Lateral Security observed that traffic on the private WAN is not encrypted and that the private WAN is provided by a third party. The security of the WAN depends on the third party. The employees of the third party also have access to this data and would likely not have signed any documents which bind them to keep the traversing data confidential.

Reference
---------
***Which section of which document are we referring to?***


Severity
--------
Medium – If traversing data were to be disclosed by the third party, reputational damage might occur along with financial loss due to resulting litigation. This data could include database records, credentials, internal emails, and other sensitive information.

Recommendation
--------------
Lateral Security recommends performing a thorough audit of the traffic going over the WAN to gain a better understanding of any breaches which might have occurred. Going forward, Lateral Security recommends encrypting all data going across the WAN using a technology such as IPsec at layer 3 in conjunction with encryption at the application layer when the application provides the option. The WAN, being private, along with encryption at more than one layer will act as a means of defence in depth for sensitive traffic which exits the organisation.
