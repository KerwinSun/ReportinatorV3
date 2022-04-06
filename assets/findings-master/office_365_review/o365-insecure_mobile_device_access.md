O365-X Insecure Mobile Device Access
===================================

Description
-----------
Multiple settings in the implementation have not been configured to secure mobile access to implementation services. The Azure Intune configuration has not been configured to require that mobile devices access follow secure practices when accessing implementation services.
The profiles have not been assigned to any group.
* no minimum password length
* no complexity
* no inactivity timeout
* no expiration
* no previous remembered
* encryption not required
* no IP-based geolocation filtering
* text messages and phone calls have not been disabled as MFA methods

Reproduction Details
--------------------
To see that Intune has not been configured to require secure access to implementation services, browse to the following location in Azure.
* Device Compliance -> Policies -> [policy names]

To see that MFA is configured to use text messages and phone calls, browse to the following location in Azure.
* Azure Active Directory -> All users -> Multi-Factor Authentication

To see that IP-based geolocation does not restrict access, use the Azure “What If” tool.

Severity
--------
Medium – Mobile devices expose a large attack surface. Insufficient controls are emplaced to prevent sensitive data loss. Any compromised device which can access the services of the implementation could lead to a compromise of the implementation and its data. This loss could occur outside of New Zealand jurisdiction.
This finding indicates a lack of adherence to the New Zealand Information Security Manual.
* 21. Working Off-Site

This finding contravenes the top 10 critical controls of Cert NZ.
* 6. Deploy multi-factor authentication -- Multi-factor authentication: key takeaways
  * https://www.cert.govt.nz/it-specialists/critical-controls/multi-factor-authentication/
* 10. Manage your mobile devices
  * https://www.cert.govt.nz/it-specialists/critical-controls/10-critical-controls/

Recommendation
--------------
A policy should be developed which mandates the recommendations of NZISM. A detailed design for the implementation should carefully and clearly document how each relevant recommendation is satisfied by the implementation. The implementation should follow the policy and be tested. Consider disabling functionality if any cannot be implemented in-line with NZISM. SMS and phone calls should not be used as MFA authentication methods.
