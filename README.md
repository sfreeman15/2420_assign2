# 2420 Assignment 2

## Distributing HTTP Traffic to Servers With Load Balancing

**Simon Freeman**
**A01074210**

------------

### Setup

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

![step1_firewallrule](images/step1_firewallrule.png)

![step_fwall_droplet](images/step_fwall_droplet.png)

![step1_firewall](images/step1_firewall.png)

Once you have completed all these steps, **your setup is complete.**

------------

### Installing Web Servers

Once you have created regular users for each of your droplets, install a web server on **both of them**. In the context of this example, **Caddy** is being used. Make sure to not configure them yet.

Download the .tar.gz file for x86_64 of caddy by using the following command:
 ```bash
  wget https://github.com/caddyserver/caddy/releases/download/v2.6.2/caddy_2.6.2_linux_amd64.tar.gz
  ```

You should see something similar to this appear once it's been downloaded, and the archived file should appear be in your server:

![step3_archivedCaddy](images/step3_archivedCaddy.png)

To extract the contents of the download, use the following command:

```bash
tar xvf caddy_2.6.2_linux_amd64.tar.gz
```

Once extracted, you should have a LICENSE, README.MD, and caddy in the location in which you extracted caddy:

![step3_unarchivedCaddy](images/step3_unarchivedCaddy.png)

Make sure to change the caddy file’s owner and group to root:

```bash
sudo chown root: caddy
```