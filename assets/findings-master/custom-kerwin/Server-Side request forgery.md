Server-Side request forgery
=================================

Description
-----------
Server-Side Request Forgery (SSRF) is a vulnerability where an end user can cause the server to perform outbound requests to additional resources. This allows attackers to request resources from the perspective of the server, leveraging any IP whitelisting that the server has been granted, internal network addresses the server can reach, and often includes local filesystem access as well. Depending on the implementation it may also allow an attacker to read or update sensitive resources.
In this instance a DNS-based interaction was detected. DNS record lookups of “Type A” were request from a specific IP address, it is uncertain whether this is a backend service or reverse proxy.   

Reproduction Details
--------------------
To reproduce this issue, while browsing the application using an intercepting proxy such as Burp Suite: 
* Log into the application
* Open the Burp collaborator client and generate a collaborator payload
* Navigate to the following URL: 
https://uat-online.tsb.co.nz/c/portal/login?redirect=http%3a%2f%*Collaborator_URL*%2fgroup%2fbanking%2far01&refererPlid=31055&p_l_id=30973 
* Replace the *Collaborator_URL* with the collaborator payload
* Observe that a DNS record lookup of “Type A” has been performed against the URL

Systems Affected
----------------
The following host is affected by this issue:
* nzseedsauthority.com

Severity
--------
Low – An attacker could exploit this class of vulnerabilities to obtain access to sensitive data, leveraging the connections and trust relationships available to the server. In this case, a DNS query was made without any subsequent HTTP requests. This may be due to the Egress Network filtering rules employed by the webserver or other implementation specific behaviour. This makes it difficult to exploit the vulnerability in a way that results in the compromise the system.

Recommendation
--------------
Lateral Security recommends investigating the root cause of the issue. Identify which software component is making these requests and either disable the behaviour or employ the use of network whitelisting the ensure that requests made outside of a specific IP range is filtered. 