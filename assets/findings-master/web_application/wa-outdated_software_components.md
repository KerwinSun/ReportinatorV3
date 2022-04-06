WA-X Outdated Software Components
=================================

Description
-----------
During external testing of the components of the web application, it was identified that the systems incorporate outdated technology components which have known vulnerabilities associated with them.

***If unsupported systems are in use, change the issue to "Outdated and Unsupported Software Components" and add:***  Some of the technology in use is no longer supported by the vendor. If a vendor does not support the technology anymore, vulnerabilities which are applicable to this technology may no longer be formally tracked, resulting in the threat presented by the use of the software being difficult to quantify.

The following vulnerable systems were identified by this review:

***TABLE GOES HERE - ensure you include the relevant CVEs***

It should be noted that a thorough internal analysis of the environment might reveal other outdated technologies that have vulnerabilities associated with them.

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN WITH DETAILS ON HOW TO DEMONSTRATE THE OUTDATED SOFTWARE. Make it flow naturally from "while browsing using Burp Suite..."***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium – Application patching is the number one recommendation in CERT NZ's Critical Controls as unpatched applications are a major cause of security incidents. The majority of the security advisories released by CERT NZ relate to vulnerabilities which could be mitigated if systems were patched in a timely manner.

If the observed outdated software is indicative of a general lack of patching in the environment, this is likely to result in publicly known vulnerabilities being exploitable against the system in future. Further outdated software may be present in the technology stack in such a way that it was not detected by this review.

***If there are no known vulnerabilities present due to this, change the content of the description and consider including the following and reducing the severity:***
As at the time of the testing, the technologies outlined above did not appear to have any public vulnerabilities associated with them, this issue was raised with a low severity rating.

***If the issue is primarily around JavaScript libraries, again take into account the context to assess the severity and what we should say, and consider the following:***
Generally exploitation of frontend vulnerabilities relies on the application utilising specific features of the libraries. These are often not exploitable in practice, and as such, this issue was raised with a low severity rating.


Recommendation
--------------

Lateral Security recommends updating the outdated technologies raised in this issue to the latest releases available and be sure that an appropriate application patching strategy is applied to any component of the technology stack on the web server. If there is no way to patch a certain component, consider migrating to an alternative solution that provides similar functionality. If this is not feasible then isolating, disabling or removing the affected component should be considered as a mitigation.

Review CERT NZ's guidance on patching for more information on the importance of this control, as well as suggestions for implementing patch management processes:
* https://www.cert.govt.nz/it-specialists/critical-controls/patching/
