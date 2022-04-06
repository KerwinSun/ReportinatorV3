Cross-Site Scripting
=================================

Description
-----------
Cross-Site Scripting (XSS) is a technique used to execute malicious JavaScript within a user’s browser. This can be achieved through a number of methods but is primarily achieved by providing content to an application which causes the malicious script to be embedded in the web page.
It is pertinent to note that this class of attack targets end-users rather than the web application itself. When this attack is considered “persistent” the malicious content is stored by the web application. It is retrieved and included when accessing specific pages. When the attack is considered “reflected” the content is derived from the user request and as such is only returned if a user can be coerced into accessing the application in a way which delivers the malicious content, such as by following an attacker-crafted link.
For example, if a request is made to:
* https://www.lateralsecurity.com/addcomment.php?name=jim&comment=test%20<script>alert('arbitrary script');</script>
If the web application blindly stores the content of the “comment” parameter, the script will be included whenever a user views the comments. The resulting HTML will be:
 
The included JavaScript is executed in the user’s browser where, in this example, a benign pop-up message occurs. 
In this particular case, stored XSS was observed to be possible within Todd Digital’s Provisioning Portal, on some quasar components where html rendering is enabled, and components where “innerhtml” is used to render user input. 
It is possible that additional vectors for XSS are present within the application that were not detected during the time-limited review.

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
* Visit the URL described below:
* https://connect.todd-digital.com/subscribers/fca300ff-ee5b-4886-85e7-e6171d0203e1/details
* Make a change to the “site” dropdown box and save the change
* Intercept the POST request, append the XSS payload to the “site” field within the json object and replay the request
 
* Reload the page, observe the html element is rendered within the dropdown component executing Javascript

Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
High – The likelihood of this attack is gauged to be reasonable, as a potential victim would likely access the embedded malicious content. The potential impact varies and is determined by what an attacker may be able to achieve. Instead of the benign JavaScript used within the description section above, this could include: 
* Obtain and exfiltrate user or admin authentication tokens stored in “localStorage” and gain access to the system as that user or admin.
* Including advanced XSS frameworks in order to utilise the victim’s browser session as a proxy to conduct further malicious actions including attacking other systems. 
* Exploiting browser plugins to expand the capabilities of the attack or attempt. This could also be used to attack the victim’s browser stack to gain access to other open websites, the data contained on other websites or the user's operating system. 
* Rewriting content within the resulting page to spread misleading information, or to deliberately include objectionable content to directly affect the organisation’s reputation.

Recommendation
--------------
Initially, investigate the root cause to determine why user-provided input is being included in the page without validation. Conduct an internal review to identify any other potential instances of this issue. 
To prevent this style of attack, context specific encoding should be performed on content before rendering it to the page. The appropriate steps to take depend on the rendering context. For example, if user input is being included in an HTML block, HTML entity encoding should be implemented. 
However, if user input may be rendered into JavaScript content or into CSS styling rules, different sanitisation processes are required. These protections should be implemented by a framework or security-focused library rather than manually encoding/validating user input each place it is stored or displayed back to the user. OWASP provides examples of some rendering contexts which your rendering library should be capable of encoding for: 
https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
Lateral security has determined the following misconfigurations to be the main causes of this issue, these factors should be considered when conducting remediation: 
* Data submitted through dropdown inputs have no server-side validation, users are able to arbitrarily submit data by making a request directly to the API.
* The AWS Cloudfront WAF can be bypassed by using Unicode escaping blacklisted strings, these strings are unescaped by the API server’s JSON deserialization mechanism.
* The web application does not incorporate sufficient Content Security Policies to prevent cross site script execution. 
* QSelect and possibly other Quasar components within the web application have been misconfigured to allow for html rendering. For more information refer to the Quasar security documentation: https://quasar.dev/security/dos-and-donts#qselect
