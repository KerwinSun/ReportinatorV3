ACR-X No Network Segregation
============================

Description
-----------
The VPC configuration is designed with multiple administrative, publically addressable interfaces. Each instance can be reached directly through SSH from the Internet and requires a public IP address. All hosts are within the same Security Groups, which indicates that web services and database services are not segregated.

Reproduction Details
--------------------
To see that all hosts are publically addressable and are within the same Security Groups, from the AWS Management Console, click on EC2. From the resulting left menu, click on Instances. The fourth and final columns show the public IP addresses and that the hosts are in the same Security Groups, respectively.

Severity
--------
Info – This does not represent a vulnerability. However, because each instance is reachable from the Internet, the attack surface of the implementation is increased. It relies on the security of however many SSH installations exist within the VPC. Because services are not segregated, a compromise of one service could more easily lead to a compromise of another. For example, a compromise of the web services, which typically hosts static, backed up content, might also lead to a compromise of the databases, which typically host sensitive, changing content which is more difficult to restore without some loss. Flat networks do not follow security best practices. Please see NZISM section 22.1, which talks about cloud computing for more information.
  * https://www.nzism.gcsb.govt.nz/ism-document/#4760

Recommendation
--------------
All instances should be configured only with private IP addresses. The public IP of the ELB can be leveraged to provide access to the services running on the instances behind it. The databases should be implemented separately from the web service hosts. Each service should be placed within its own Security Group and secured to allow only the required connections. Administration of the environment can be achieved through a VPN connection, which reduces the number of administration interfaces to one. The VPN connections should then be monitored.
