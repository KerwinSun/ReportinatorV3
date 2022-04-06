OFM-X Unhardened Web Server Configuration
=========================================

Description
-----------
The web server configuration has not been hardened according to industry good practices.
  * An "alias" map exists for the "cgi-bin" path. This is explained in further detail within issue OAS-7 Unnecessary Content Available
  * The following modules are not likely needed for normal operation:
    * autoindex_module 
    * alias_module 
    * auth_basic_module 
    * authn_file_module 
    * usertrack_module 
    * proxy_[...]_module 
    * rewrite_module 
  * SSLVerifyClient is not enabled, which prevents the web server from conducting mutual SSL authentication
  * Default Oracle content exists within the htdocs web root
  * Custom generic error pages defined by ErrorDocument directives have not been configured

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – An attacker with suitable network access may issue HTTP requests to the server without the need for a valid client SSL certificate and key. This increases the attack surface beyond what is necessary for normal operation. The "SSLVerifyClient" directive prevents an attacker from being able to establish an HTTPS connection to the server.

Loading modules increases the attack surface of the web server. The configuration does not currently use any functionality provided by the modules.

Using the default responses could disclose information to an attacker. The attacker could use this information to further profile the web server and refine attacks.

Removing the defined cgi-bin alias and the default web content will further limit access to unneeded content. In particular, the content hosted under cgi-bin could be misconstrued to be a security issue.

Recommendation
--------------
Consider making further changes based on the elements highlighted within the description of this issue. For further information, refer to the Centre for Internet Security's Apache benchmark, which can be located at the following URL:
  * http://benchmarks.cisecurity.org/tools2/apache/CIS_Apache_Benchmark_v2.1.pdf  