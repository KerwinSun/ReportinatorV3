WA-X WordPress Hardening
=========================

Description
-----------
WordPress is a popular framework and due to its flexibility and widespread deployment it attracts a lot of attention from attackers. WordPress provides official recommendations on security hardening.

A number of issues were identified that are not recommended practice for WordPress instances. Specifically:
  * A number of directories have public listing pages. Private data can unintentionally be shared on these pages as well as giving potential attackers more information about the configuration of the server.
  * The XML-RPC API  was enabled. This allows attackers to bypass the brute-force login protection.

Reproduction Details
--------------------
For an example of a directory listing that may contain private files, navigate to:
  * ***URL HERE***

To see that XML-RPC is enabled, navigate to:
  * ***host/xmlrpc.php***

Systems Affected
----------------
The following ***system is/systems are*** affected by these issues:
  * ***Fill me in***

Severity
--------
Medium/Low - By exposing the XML-RPC endpoint it allows attackers to bypass any brute-force login protection.
Directory listings give attackers more information about the system and can leak private documents and information.

Recommendation
--------------
Lateral Security recommends that an appropriate WordPress Hardening guide be followed. Wordpress.org provides a guide that lists security considerations which may be useful:
  * https://wordpress.org/support/article/hardening-wordpress/
In this case Lateral Security recommends that ***directory listing and XML-RPC API*** be disabled.

The XML-RPC API has the following known issues:
  * https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner
  * https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login
  * https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos
  * https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access
