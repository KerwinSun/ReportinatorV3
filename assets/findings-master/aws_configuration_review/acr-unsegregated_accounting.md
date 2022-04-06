ACR-X Unsegregated Accounting
=============================

Description
-----------
More than one project has been implemented under a single AWS account. Using multiple AWS accounts allows different business projects or different development teams to be contained within the bounds of a single account. While this can ease billing, it can also help limit the “blast radius” of attacks or service failure.

Reproduction Details
--------------------
This was observed by Lateral Security through multiple engagements.

Severity
--------
Info – This finding is not a security vulnerability. Segregating accounts can help limit the scope of security breaches and information disclosure due to internal or external attacks. It can also limit the scope of service failures in conjunction with multiple availability zones or regions.

Recommendation
--------------
Consider the relatedness of each project before its implementation. If two or more projects are unrelated or will be developed by separate teams within the organisation, consider providing each with its own account to better segregate business needs. The following link provides more information on AWS Multiple Account Security Strategy.
* https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-laying-the-foundation/aws-account-structure.html
