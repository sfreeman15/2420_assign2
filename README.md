# 2420 Assignment 2

## Distributing HTTP Traffic to Servers With Load Balancing

**Simon Freeman**
**A01074210**

## Setup

This assignment will require several things to set up:
- VPC
- At least 2 Droplets
- Load Balancer
- Firewall (DigitalOcean Cloud Firewall)

**Create a VPC in Digital Ocean**

![step1_vpc_san_fran](images/step1_vpc_san_fran.png)
![step1_vpc](images/step1_vpc.png)

**Create two droplets in Digital Ocean**

When creating them, make sure to give them both the same tag, and that they use the VPC network you created. In this example, both droplets have the **Web** tag.

![step1_droplet_web_vpc](images/step1_droplet_web_vpc.png)
![step1_droplets](images/step1_droplets.png)

**Create a load balancer in Digital Ocean**

Make sure that the load balancer is connected to the two droplets by using the tag associated with the droplets. The IP of the load balancer address will be used to visit content from the droplet servers.

![step1_droplets_load_balancer](images/step1_droplets_load_balancer.png)

**Create a firewall in Digital Ocean**

Add an additional inbound rule for HTTP and make the source the load balancer that was created. Apply the firewall rules to the droplets by using the tag associated with the droplets.

![step1_firewall_rules](images/step1_firewall_rules.png)

![step_fwall_droplet](images/step_fwall_droplet.png)

![step1_firewall](images/step1_firewall.png)

Once you have completed all these steps, **your setup is complete.**