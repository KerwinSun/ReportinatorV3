O365-X Insufficient Spoofing Prevention
=======================================

Description
-----------
The implementation has been configured with insufficient email spoofing preventative measures. A spoofed email is an email with a forged sender address. Email can be spoofed due to the original email protocol lacking an in-built method of authenticating senders. Over time, authentication protocols have been bolted on to the email protocol by leveraging DNS: SPF, DKIM, and DMARC. The implementation does not leverage two of these protocols.
* No DKIM record exists in domain record.
* DMARC is not configured.
DomainKeys Identified Mail (DKIM) associates legitimate emails with their domain by including digital signatures with each legitimate email.
Domain-based Message Authentication, Reporting and Conformance (DMARC) relies on SPF and DKIM and describes how delivery failures should be handled by upstream servers.

Reproduction Details
--------------------
To test the configuration for the affected domains, visit a site recommended by the vendor and enter the domain name.
* https://dmarcian.com/domain-checker/

To see that DKIM has not been configured, browse to the following location.
* protection.office.com -> Threat management -> Policy -> DKIM -> [domains] (Status: Not signing DKIM signatures for this domain.)

Severity
--------
Medium – If these preventative measures are not configured, then receives of email sent by the organisation might not be able to tell whether the emails are legitimate. If the receivers default to a trusting position, then attackers might be able to convince receivers that their email originated from the organisation. If the receivers default to an untrusting position, then email from the organisation might be marked as spam and its servers might be added to blacklists.

This finding indicates a lack of adherence to the following New Zealand Information Security Manual control.
* NZISM 15.2.16. DomainKeys Identified Mail (DKIM)
  * https://www.nzism.gcsb.govt.nz/ism-document#1734

Recommendation
--------------
Ensure that SPF, DKIM, and DMARC have been configured for each domain under the organisations control. All incoming email should be validated by checking the DKIM signatures from the originating domain.
