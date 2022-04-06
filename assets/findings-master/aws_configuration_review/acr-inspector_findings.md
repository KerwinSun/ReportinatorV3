ACR-1 Inspector Findings
========================

Description
-----------
Amazon Inspector assesses the security of applications deployed in AWS. Inspector has reported several weaknesses in the environment.

[include findings]

Reproduction Details
--------------------
Issue the following command using the AWS CLI.

    for finding in `aws inspector list-findings --query "findingArns[]" --output text`
        do aws inspector describe-findings --finding-arns $finding
    done

Severity
--------
High – Some of the findings reported by Inspector include issues rated as high severity and include privilege escalation and arbitrary code execution.

This finding might indicate that routine patching is not occurring or that some components in the environment have not been included in the patching policy. Most of CVEs were made public in 2017. The oldest among them was published in November of 2016.

One of the findings concerns the use of an insecure protocol, HTTP, over port 80. Any traffic sent over this protocol would be vulnerable to man-in-the-middle attacks by an intermediary.

Recommendation
--------------
If the findings reported by Inspector are not false positives, then consider following the recommendations of Inspector for each reported issue.
