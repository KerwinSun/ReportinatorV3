# Policy Issues

## Inadequate Security Policy
Vulnerabilities are often introduced as a result of inadequate policies or a lack of policies relating to system security. Each implemented control or countermeasure should be tracable to a policy which defines the parameters for the implementation of the control and the threat/vulnerability it addresses.

## No Formal Security Training or Awareness Programme
NIST: A documented formal security training and awareness policy and program is designed to keep staff up to date on organizational security policies and procedures as well as threats, industry cybersecurity standards, and recommended practices. Without training on specific policies and
procedures, staff cannot be expected to maintain a secure environment.

## Absent or Deficient Equipment Implementation Guidelines
Implementation guidelines should be kept up to date and made available to relevant staff. Such guidelines are a key part of security processes in the event of an incident.

## Lack of Administrative Mechanisms for Security Policy Enforcement
NIST: Staff responsible for enforcing security should be held accountable for administering documented security policies and procedures.

## Inadequate Review of the Security Control Effectiveness
NIST: Procedures and schedules should exist to determine the extent to which the security program and its constituent controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting the security requirements for the system. The examination is sometimes called an “audit,” “evaluation,” or “assessment.” Policy should address the stage of the life-cycle, purpose, technical expertise, methodology, and level of independence.

## No Contingency Plan
NIST: A contingency plan should be prepared, tested and available in the event of a major hardware or software failure or destruction of facilities. Lack of a specific plan for the system could lead to extended downtimes and associated business impact depending on the function of the affected system.

## Lack of Configuration Management Policy
NIST: Lack of policy and procedures for configuration change management can lead to unmanageable and highly vulnerable inventory of hardware, firmware, and software.

## Lack of Adequate Access Control Policy
NIST: Access control enforcement depends of policy the correctly models roles, responsibilities, and authorizations. The policy model must enable the way the organization functions.

## Lack of Adequate Authentication Policy
NIST: Authentication policies are needed to define when authentication mechanisms (e.g., passwords, smart cards) must be used, how strong they must be, and how they must be maintained. Without policy, systems might not have appropriate authentication controls, making unauthorized access to systems more likely. Authentication policies should be developed as part of an overall security program taking into account the capabilities of the system and its personnel to handle more complex passwords and other mechanisms.

## Inadequate Incident Detection and Response Plan and Procedures
NIST: Incident detection and response plans, procedures, and methods are necessary for rapidly detecting incidents, minimizing loss and destruction, preserving evidence for later forensic examination, mitigating the weaknesses that were exploited, and restoring services. Establishing a successful incident response capability includes continually monitoring for anomalies, prioritizing the handling of incidents, and implementing effective methods of collecting, analyzing, and reporting data.

## Lack of Redundancy for Critical Components
NIST: Lack of redundancy in critical components could provide single point of failure possibilities 

# Architecture and Design Issues
## Inadequate Security Considerations Made
NIST: Incorporating security into the architecture and design must start with budget, and schedule of the system. The security architecture is part of the Enterprise Architecture. The architectures must address the identification and authorization of users, access control mechanism, network topologies, and system configuration and integrity mechanisms.

## Insecure Architecture Allowed to Evolve
NIST: The network infrastructure environment within the environment has often been developed and modified based on business and operational requirements, with little consideration for the potential security impacts of the changes. Over time, security gaps may have been inadvertently introduced within particular portions of the infrastructure. Without remediation, these gaps may represent entrypoints into the environment.

## No Security Perimeter Defined
NIST: If the environment does not have a security perimeter clearly defined, then it is not possible to ensure that the necessary security controls are deployed and configured properly. This can lead to unauthorized access to systems and data, as well as other problems.

## Inadequate Collection of Event Data History
NIST: Forensic analysis depends on collection and retention of sufficient data. Without proper and accurate data collection, it might be impossible to determine what caused a security incident to occur. Incidents might go unnoticed, leading to additional damage and/or disruption. Regular security monitoring is also needed to identify problems with security controls, such as misconfigurations and failures. 

# Configuration and Maintenance Issues
## Hardware, Firmware or Software Not Under Configuration Management
NIST: The organization doesn’t know what it has, what versions it has, where they are, or what their patch status is, resulting in an inconsistent, and ineffective defense posture. A process for controlling modifications to hardware, firmware, software, and documentation should be implemented to ensure the environment is protected against inadequate or improper modifications before, during, and after system implementation. A lack of configuration change management procedures can lead to security oversights, exposures, and risks. To properly secure an environment, there should be an accurate listing of the assets and their current configurations. These procedures are necessary for executing business continuity and disaster recovery plans.

## OS and Application Security Patches Not Maintained
NIST: Out-of-date operating systems and applications may contain newly discovered vulnerabilities that could be exploited. Documented procedures should be developed for how security patches will be maintained. Security patch support may not even be available for systems that use outdated operating systems, so procedures should include contingency plans for mitigating vulnerabilities where patches may never be available.

## Inadequate Testing of Security Changes
## Poor Remote Access Controls
## Poor Configurations Utilised
NIST: Improperly configured systems may leave unnecessary ports and protocols open, these unnecessary functions may contain vulnerabilities that increase the overall risk to the system. Using default configurations often exposes vulnerabilities and exploitable services. All settings should be examined. 

## Critical Configurations Not Stored or Backed-Up
NIST: Procedures should be available for restoring system configuration settings in the event of accidental or adversary-initiated configuration changes to maintain system availability and prevent loss of data. Documented procedures should be developed for maintaining system configuration settings.

## Data Unprotected on Portable Device
NIST: If sensitive data (e.g., passwords, dial-up numbers) is stored in the clear on portable devices such as laptops and mobile devices and these devices are lost or stolen, system security could be compromised. Policy, procedures, and mechanisms are required for protection.

## Password Generation, Use or Protection Not in Accordance with Policy
NIST: Password policy and procedure must be followed to be effective. Violations of password policy and procedures can drastically increase vulnerability. 

## Inadequate Access Controsl Applied
NIST: Access controls must be matched to the way the organization allocates responsibilities and privilege to its personnel. Poorly specified access controls can result in giving a user too many or too few privileges.

## Inadequate Antimalware Protection
NIST: Installation of malicious software, or malware, is a common attack. Malware protection software, such as antivirus software, must be kept current in a very dynamic environment. Outdated malware protection software and definitions leave the system open to new malware threats.

## Malware Protection Implemented Without Sufficient Testing
NIST: Malware protection software deployed without sufficient testing could impact normal operation of the system and block the system from performing necessary actions. 

## Denial of Service
NIST: The system could be vulnerable to DoS attacks, resulting in the prevention of authorised acces to a system resource or delaying system operations and functions.

## Intrusion Detection/Prevention Software Not Installed
NIST Incidents can result in loss of system availability and integrity; the capture, modification, and deletion of data; and incorrect execution of control commands. IDS/IPS software may stop or prevent various types of attacks, including DoS attacks, and also identify attacked internal hosts, such as those infected with worms. IDS/IPS software must be tested prior to deployment to determine that it does not compromise normal operation of the system.

## Logs Not Maintained
NIST: Without proper and accurate logs, it might be impossible to determine what caused a security event to occur.

# Physical Issues
## Unauthorised Physical Access
NIST: Physical access to equipment should be restricted to only the necessary personnel. Improper access to ICS equipment can lead to any of the following: 
- Physical theft of data and hardware 
- Physical damage or destruction of data and hardware 
- Unauthorized changes to the functional environment (e.g., data connections, unauthorized use of removable media, adding/removing resources) 
- Disconnection of physical data links 
- Undetectable interception of data (keystroke and other input logging)

## Lack of Backup Power
NIST: Without backup power to critical assets, a general loss of power will shut down the system and could create an unsafe situation. Loss of power could also lead to insecure default settings.

## Unsecured Physical Ports
NIST: Unsecured universal serial bus (USB) and PS/2 ports could allow unauthorized connection of thumb drives, keystroke loggers, etc.

# Software Development Issues
## Improper Data Validation
NIST: Software may not properly validate user inputs or received data to ensure validity. Invalid data may result in numerous vulnerabilities, including buffer overflows, command injections, cross-site scripting and path traversals.

## Installed Security Capabilities Not Enabled by Default
NIST: Security capabilities that were installed with the product are useless if they are not enabled or at least identified as being disabled.

## Inadequate Authentication, Privileges and Access Control in Software
NIST: Unauthorized access to configuration and programming software could provide the ability to corrupt a device.

# Communication and Network Configuration Issues
## Data Flow Controls Not Employed
NIST: Data flow controls, based on data characteristics, are needed to restrict which information is permitted between systems. These controls can prevent exfiltration of information and illegal operations.

## Firewalls Not In Use or Improperly Configured
NIST: A lack of properly configured firewalls could permit unnecessary data to pass between network segments, allowing attacks and malware to spread between networks, making sensitive data susceptible to monitoring/eavesdropping, and providing individuals with unauthorized access to systems.

## Inadequate Firewall and Router Logs
NIST: Without proper and accurate logs, it might be impossible to determine what caused a security incident to occur.

## Cleartext Protocols in Use
NIST: Adversaries that can monitor the network activity can use a protocol analyzer or other utilities to decode the data transferred by protocols such as telnet, File Transfer Protocol (FTP), Hypertext Transfer Protocol (HTTP), 
and Network File System (NFS). The use of such protocols also makes it easier for adversaries to perform attacks against the environment and manipulate network activity.

## Authentication of Users, Data or Devices is Substandard or Nonexistent
NIST: Protocols in place have no authentication at any level. Without authentication, there is the potential to replay, modify, or spoof data or to spoof devices such as sensors and user identities.