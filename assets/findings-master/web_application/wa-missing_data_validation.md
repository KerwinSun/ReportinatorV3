WA-X Missing Data Validation
=============

Description
-----------
Data validation is a verification and quality control which restricts user supplied content to only values which are applicable for the context-specific use case. 
For example, it is unlikely that a person’s date-of-birth is in the future, or that their name contains punctuation characters.


Reproduction Details
--------------------
Review datatypes accepted by the application, testing against expected constraints. 
***No form of validation (other than “not empty”) was observed within the solution.***


Systems Affected
----------------
The following ***application(s) / host(s) is/are*** affected by this issue:
  * ***SITE***

Severity
--------
Info – Data validation help protect against user error, ensuring that supplied data is appropriate for its use case. 
Invalid data may lead to processing mistakes or reputational impacts.


Recommendation
--------------
Lateral Security recommends applying data validation across all input fields to prevent the entry of invalid records. 
Example content classes to consider include:
*	Dates
*	Numbers
*	Alphanumeric data
*	Predefined format fields (external identifiers, etc)
*	Arbitrary text
