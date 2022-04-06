WA-X Cross-Site Scripting
=========================

Description
-----------
Cross-Site Scripting (XSS) is a technique used to execute malicious JavaScript within a user’s browser. This can be achieved through a number of methods but is primarily achieved by providing content to an application which causes the malicious script to be embedded in the web page.

It is pertinent to note that this class of attack targets end-users rather than the web application itself. When this attack is considered “persistent” the malicious content is stored by the web application. It is retrieved and included when accessing specific pages. When the attack is considered “reflected” the content is derived from the user request and as such is only returned if a user can be coerced into accessing the application in a way which delivers the malicious content, such as by following an attacker-crafted link.

For example, if a request is made to:

 * https://www.lateralsecurity.com/addcomment.php?name=jim&comment=test%20<script>alert('arbitrary script');</script>

If the web application blindly stores the content of the “comment” parameter, the script will be included whenever a user views the comments. The resulting HTML will be:

```
<html><body>[…]
<b>Author:</b> jim<br/>
<b>Comment:</b> test ***<script>alert('arbitrary script');</script>***
[…]</body></html>
```

The included JavaScript is executed in the user’s browser where, in this example, a benign pop-up message occurs.

***IN THIS PARTICULAR CASE***

Reproduction Details
--------------------
To reproduce this issue:
  * ***Step 1***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
Medium – The likelihood of this attack is gauged to be reasonable, as a potential victim would likely access the embedded malicious content. The potential impact varies and is determined by what an attacker may be able to achieve. Instead of the benign JavaScript used within the description section above, this could include:
  * Using scripting to read session tokens from cookies provided by the website which are not protected by the “HttpOnly” security flag and relay it to an attacker. This requires the user to be currently authenticated to the web application. Alternatively, if the session token is not refreshed after a successful login, an attacker may store it and wait for the user to authenticate.
  * Including advanced XSS frameworks in order to utilise the victim’s browser session as a proxy to conduct further malicious actions including attacking other systems.
  * Exploiting browser plugins to expand the capabilities of the attack or attempt. This could also be used to attack the victim’s browser stack to gain access to other open websites, the data contained on other websites or the user's operating system.
  * Rewriting content within the resulting page to spread misleading information, or to deliberately include objectionable content to directly affect the organisation’s reputation.

***Leave in ONLY if the XSS is persistent and authed, users can't self-register, and CSRF was found. As the application was also found to be vulnerable to cross-site request forgery (see WA-1 TODO Insert Cross Reference), an attacker would be able to post the malicious content without needing an account themselves. This increases the likelihood of exploitation.***

Recommendation
--------------
Initially, investigate the root cause to determine why user-provided input is being ***stored|included in the page*** without validation. Conduct an internal review to identify any other potential instances of this issue.

To prevent this style of attack, context specific encoding should be performed on content before rendering it to the page. The appropriate steps to take depend on the rendering context. For example, if user input is being included in an HTML block, HTML entity encoding should be implemented. However, if user input may be rendered into JavaScript content or into CSS styling rules, different sanitisation processes are required.

These protections should be implemented by a framework or security-focused library rather than manually encoding/validating user input each place it is stored or displayed back to the user. OWASP provides examples of some rendering contexts which your rendering library should be capable of encoding for:

  * https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
