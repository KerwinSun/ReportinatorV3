WA-X Sensitive Data in Source Control
===============================

Description
-----------
Lateral Security identified sensitive data which had been committed to version control. While source control is a recommended tool for managing code, it is not recommended that application secrets be checked into repositories. Configuration files should not be put into version control unless they describe a ‘factory default’ state of the application and do not contain any sensitive data.

Including application secrets in source code is similar to hardcoding passwords. It is good practice to avoid tightly coupling secrets with your application source as this is a violation of the principle of least privilege. Secret tokens and keys do not need to be accessible to everyone who has access to application source and should only be handled when an application is being deployed.

Reproduction Details
--------------------
* ***FILL ME IN***

Systems Affected
----------------
The following ***file is/files are*** affected by this issue:
  * ***SITE***

Severity
--------
Low/Medium – 

Recommendation
--------------
A number of options are available for the distribution of application secrets during application deployment, each having its own strengths and weaknesses.
Ideally, application secrets would be introduced to the environment from a platform-dependent secret store at the orchestration layer or as part of an automated deployment process. If a secure secret store is not available, alternative options include:
* Using a pre-existing secure channel to share configuration files for deployment without tying these to the application source.
* Storing configuration details as environment variables, although it is pertinent to note that environment variables are commonly leaked by misconfigured debug functionality or developer aides.
