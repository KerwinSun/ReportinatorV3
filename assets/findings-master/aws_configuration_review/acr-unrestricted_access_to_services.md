ACR-X Unrestricted Access to Services
=====================================

Description
-----------
Two security groups allowed access to port 3389 from any IP address. Port 3389 is the port assigned to the remote desktop protocol and is used for remote administration.

Reproduction Details
--------------------
This was found with the following command.

    aws ec2 describe-security-groups --filters "Name=ip-permission.to-port,Values=3389" --query 'SecurityGroups[?length(IpPermissions[?ToPort==`3389` && contains(IpRanges[].CidrIp, `0.0.0.0/0`)]) > `0`].{GroupName: GroupName}' --region ap-southeast-2 --output text

This reported:
    launch-wizard-1
    launch-wizard-2

Severity
--------
Info – Lateral Security are raising this as informational. This finding was reported to BNZ and the permissive rules have been removed.

Recommendation
--------------
This issue has been resolved. Ensure that rules which allow access from all IP addresses have a business justification.
