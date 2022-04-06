OFM-X Insecure WebLogic Configuration
===================

Description
-----------
The WebLogic configuration has development settings enabled and has not been hardened. The following elements could further harden the environment and align it to industry good practice. 
  * OHS WebLogic plugin 
    * Remove debug settings, defined by the parameters "WlLogFile" and "Debug" 
    * Set a custom generic error page via the "ErrorPage" directive to limit information disclosure
    * Handle application errors in the configuration file of the application
  * WebLogic installation 
    * Configure WebLogic coherence clustering and server identities
    * Specify a custom CA trust store within the WebLogic process arguments
    * Strengthen the minimum supported SSL protocol level

Systems Affected
----------------
The following systems are affected by this issue:
  * ***SYSTEM***

Severity
--------
Medium – Failure to remove debugging prior to production will increase load on system resources. This higher load will make the implementation more prone to denial of service attacks. The debugging might also present detailed information to an attacker. The attacker could use this information to further profile the application and refine attacks.

An attacker with significant network access might be able to eavesdrop on highly sensitive information because communication among the clustered WebLogic servers is insecure.

Recommendation
--------------
Remove the debugging functionality on the OHS instances prior to production. Consider implementing generic error pages within the OHS instances. Examine the running public-facing application's settings to identify how the application handles an unexpected error. An effective balance between security and usability must be reached. Removing too much debugging information may prevent a third-party from diagnosing errors when interacting with the service. 

Consider configuring the WebLogic instances to be more in line with Oracle's best practices. More information may be found at the following locations: 
  * http://docs.oracle.com/middleware/1212/wls/SECMG/
  * http://docs.oracle.com/middleware/1212/coherence/COHSG/
