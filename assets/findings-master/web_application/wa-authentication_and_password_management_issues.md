WA-X Authentication and Password Management Issues
==================================================

Description
-----------
During testing Lateral Security identified a number of issues with the authentication and password management subsystems of the web application. These are as follows:
  * Passwords for local users are stored in an insecure manner. It appears that passwords are stored in the form of ‘unsalted’ MD5 hashes. This means that hashes for weak passwords could be effectively reversed using rainbow tables. Additionally, MD5 itself is no longer considered a secure hash function. Therefore a determined attacker could try to leverage weaknesses in the hashing algorithm to find collisions. 
  * No password complexity policy is in place. The system allows users to select weak passwords, such as ‘1’. This increases the likelihood of user acount compromise. 
  * Changing email address does not require a password. The web application does not require any additional authentication when a user changes their email address. This could allow an attacker to completely hijack an account in case they have temporary access to the victim’s session (e.g., through a cross-site scripting vulnerability or using physical access to the victim’s session).  
  * No brute-force protection on the login form. Lateral Security tried to log in repeatedly using wrong passwords and a subsequent login for the same user with correct credentials was still possible. This means that an attacker could effectively run brute-force attacks against the users of the web application. 
  * Email address enumeration on password reset. This issue is due to the fact that the web application responds differently when a user enters registered and unregistered email addresses in the password reset form. An attacker could use this information to determine valid users of the web application and try to run other attacks against them.
  * The password reset functionality sends a user a new password rather than a password reset token and does not require the user to set a new password after the first logon. This extends the period during which an attacker could access the account if they managed to intercept the email.
  * The password reset functionality is susceptible to user enumeration. When a user inputs a non-existent username or email, the following error message appears: Sorry, <username> is not recognized as a user name or an e-mail address.

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite:
  * ***FILL ME IN***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Severity
--------
High – Each issue described above would normally have a medium severity rating (except for the insecure password storage), however, in conjunction, they represent a higher risk. An attacker could obtain valid users’ emails and further leverage the lack of brute force protection and absence of password complexity policy to obtain unauthorised access to user accounts. It is very likely that the same issues will be applicable to the staff interface, as described in the EX-4 Superfluous Functionality Available issue, however this has not been tested. The fact that the ‘LogonUsers’ table contains credentials that apparently cannot be used from an external perspective, somewhat alleviates the risk associated with the issue.
Security implications of each individual weakness have been outlined in the description section.
An attacker could leverage the current weak state of authentication and password security controls implemented in the web application to obtain unauthorised access to it. As high privileged users use the same authentication mechanism, this increases the potential impact of the weaknesses.

Recommendation
--------------
Lateral Security recommends the following steps which will help improve the security of the authentication and password management subsystems of the web application:

Ensure that passwords are stored securely in the database for all the users. Follow the recommendations outlined at the following link:
  * https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

Enforce a strict password complexity policy. General recommendation is that a password should be at least 8 characters long, contain at least 3 different groups of characters. Checking whether a password contains an easily guessable dictionary word or looking the proposed password up in publicly available password lists would be beneficial. Stricter password complexity policy should be applied to staff and administrative users of the system. All administrative passwords should be changed upon going live. Refer to the following article for further details:
  * https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html

To prevent brute-forcing attempts it is recommended that after a small number of incorrect password guesses (no more than 10) the account becomes locked out for a short period of time (for example, 30 seconds). This lockout time should then gradually increase for each subsequent incorrect logon attempt. Alternatively, using a strong CAPTCHA could be used in this situation. For more details see the following URL:
  * https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks

The password reset should behave in an identical way regardless of whether the user performing the password reset has entered a valid or invalid email address. A throttling mechanism to slow repeated user attempts at using the password reset functionality could also limit the scope of an attack using this functionality, as described above.
 * https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html

In case users are able to change their email addresses in production, it is recommended to ensure that a user is required to enter their password as a second form of authentication when changing their email address.

Lateral Security recommends the following actions which will help to mitigate the issues identified:
 * Ensure that an appropriate password complexity policy is applied throughout the whole web application, thus restricting users from creating weak passwords in any possible scenario.
 * Apply additional authentication for sensitive actions, such as password or email change, by requesting the old password.
 * Implement protection against brute-force attacks through using a CAPTCHA mechanism or enforce a gradually increasing timeout after which a subsequent logon attempt could be made after each unsuccessful attempt.
 * Make sure new passwords are not created automatically during the password reset procedure. Special tokens should be used instead, which would allow for a one-time changing of a password within a limited timeframe. Note that these tokens should be long and random enough to prevent guessing or enumeration.
 * Ensure that the web application does not reveal any redundant information during authentication or password reset. Reset password functionality should have a generic message such as “An email has been sent if the username exists within the system”.

For more information, please see the following link:
 * https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
