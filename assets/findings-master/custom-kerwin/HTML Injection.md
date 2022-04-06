HTML Injection
=================================

Description
-----------
The notification system in the SCIS platform allows for user-controlled data to be rendered as HTML content. The user-controlled data is not HTML-escaped, therefore attackers can manipulate the formatting and embed HTML elements in these notifications. Lateral Security has determined that it is possible to generate deliver notifications with dynamic content from one account to another. 
Lateral security attempted to escalate the issue to a cross site scripting vulnerability. Although it was unsuccessful in this instance due to whitelisting protection, it may be possible achieve cross site scripting given more time.  


Reproduction Details
--------------------
To reproduce this issue:
* Log into SCIS as a merchant.
* Navigate to https://nzseedsauthority.com/variety-register 
* Press “Add new variety to register”.
* Fill out the form with valid information, in the “Variety name” field, supply the value “<img src=”test”>”.
* Press “Submit for approval”.
* Log into SCIS as a NSCO admin.
* Observe that a new notification has been created for the newly created seed variety.
* Observe that an image element is rendered in place of the name of the seed


Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
Medium – The ability to render dynamic content could be used for social engineering/phishing attacks, an attacker could generate a notification from one account and propagate that notification to a different user with HTML rendered. A malicious user could also leverage the HTML content to deface the website resulting in reputation damage to the organization. 
Lateral security note, if an attacker is able to bypass the whitelist protection, they would be able to achieve cross-site scripting. This would allow them to embed and execute scripts within the context of another user’s browser and potentially steal sensitive user data as well as user sessions and cookies.

Recommendation
--------------
When displaying user content (in this case, notifications), ensure that all user input data is appropriately escaped for the context it appears in when being rendered. If there is a business need to include HTML formatting in notifications ensure that the formatting is only rendered when it is part of the template, and not when it is present in user content. 
