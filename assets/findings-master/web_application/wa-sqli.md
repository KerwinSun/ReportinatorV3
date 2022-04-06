WA-X SQL Injection
==================

Description
-----------
SQL injection vulnerabilities allow an attacker to manipulate the query provided from the web application to the database. Through injection of their own content into the query, it provides the attacker the means to access the database, similar to accessing the database directly.

For example, consider the following:
https://www.lateralsecurity.com/account?name=***a' OR 'x'='x***

Supporting code:
```
$sql_query = "SELECT * FROM accounts WHERE account = '***$name***'";
```

The SQL query that is issued to the database is:
```
SELECT * FROM accounts WHERE account = '***a' OR 'x'='x***'
```

In the above example, the attack is a relatively trivial modification of the resulting query to include a condition which will return all available accounts. More sophisticated SQL injection attacks will heavily manipulate the query to read, modify or delete arbitrary data within any table. Depending on the database user's permissions and enabled features, it may also allow a degree of file system or operating system access.

In this case, the ***PARAM*** parameter of the ***URL*** URL was found to be vulnerable to SQL injection. The request in particular was:
```
***CODE***
```

It is likely this is being converted into an SQL query similar to the following:
```
***SQL***
```

Severity
--------
Critical – Access to database contents, and potentially a degree of access to the underlying operating system, is dependent on the permissions granted to the database user account used by the web application. These access rights are commonly poor, with the database user having both read and write access to all database contents.

***The vulnerability was easily identified, as a large amount of data was returned when the parameter was set to ' OR 'x'='x. This value is commonly used when testing for SQL injection and such a large amount of data stands out. Therefore, it is highly likely that somebody explicitly looking for SQL injection could find this easily.***

***This request was able to be made from a customer account.***

Reproduction Details
--------------------
To reproduce this issue:
  * ***Reproduction Details***

Systems Affected
----------------
The following ***host is/hosts are*** affected by this issue:
  * ***SITE***

Recommendation
--------------
Two key countermeasures are available which should be implemented by the solution. Primarily, SQL queries should always be generated through parameterisation. String concatenation of user data should never be used anywhere within the application.
Additionally, ensure strict whitelist validation is implemented. This approach should be conducted against all data supplied by the user.

If SQL injection protection is implemented in an ad-hoc manner (by calling an escaping function before each call to the database) then restructuring the application so all requests go through an ORM should be strongly considered to further prevent SQL injection vulnerabilities.

***Check whether this is applicable: Using a semi-blind technique, it will likely be possible to extract all data from the database. No errors will be generated, however there would be a significant number of requests. It should be ensured that appropriate auditing, logging and alerting is in place, as such attacks are distinctive. This will allow a prompt response to any attacks using this technique.***

An additional mitigation which should be used as part of defence in depth is to limit the permissions granted to the database user to those necessary for the application to function, in line with the principle of least privilege. 
