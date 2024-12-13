Infrastruce Setup(IAC)
1. Compute instance for a node.js backend with a status and uptime.
   Install terraform locally
   cmd: choco install terraform
   write code for Node.js application (It includes app.js,package.json,gitignore)
   Create terraform on local cluster(main.tf)
   run on port: http://localhost:3000/status
   ![Screenshot (86)](https://github.com/user-attachments/assets/60e8a4a8-ac48-4b3c-ad60-363498691f3c)

Static website hosting
3.  create a html doument file for the static website and run it
    create a s3 bucket and name it as "kops-rag-storage-2"
    There we can upload file from the local system and modify the properties
    Enable the static website hosting.
    Enable every one public acess in Acess Control list(ACL)
    url:https://kops-rag-storage-2.s3.us-east-1.amazonaws.com/index.html
    ![Screenshot (89)](https://github.com/user-attachments/assets/0bb691a9-17eb-423e-b0a1-3abebb163a84)

4.  Networking,VPC,subnets and security groups
    Here we create all of these in aws UI console
    In security groups allow the port number 3000
    security policy to acess SSH-TCP-> 20
5. HTTPS enabled domain and domain accessible urls(www.hello.com,https://www.hello.com,hello.com,https://hello.com)
   We need to configure Route 53 for must accessing all the url's
   Request for SSL Certificate
   create a hosted zone where we manage the DNS records for your domain
   create a file in terraform route53.tf and acm.tf(AWS certificate manager) which provides the SSL certificate for HTTPs connection
   Here the url https:hello.com redirects to -> hello.com
   main.tf file must be present where it provides details of provider nad region.
   ![Screenshot (88)](https://github.com/user-attachments/assets/50c08e10-dd5d-46e9-a81c-b2a30631772a)

CI/CD pipeline
7. Backend :Build and Deploy node.js application
    Ensure the Node.js code in github repository with a Dockerfile for containerization
    Create a CI/CD pipeline using Github Actions
    How it works?
    Here firstly we create a docker file which leads to creation of docker image .
    deployment of node.js application using githyb actions
    create a workflow file .github/workflows inside of it create a file deploy.yml
    set up the github secrets Docker username,Docker password,SSH.user,SSH.host.
Note:Previously we created a Node.js application on a server which in turn returns returns a status code and time and for deployment
    create a docker file
    Adding secrets in repository secrets
    Docker need to be created in Ec2 and login sucessfully
    change the security policy and acess port number 22 and 3000
    Start your instance and run the deployment.54.226.71.189
8.  Frontend deploy static html
    modify the code in deployment where add deploy code code to it necessary aws s3 crediantials.
    Integrate monitoring with cloudwatch and configure an alert for backend downtime.
url link:http://54.226.71.189:3000
![Screenshot (92)](https://github.com/user-attachments/assets/bf841f61-0dc9-4812-9dad-2e69fa85317c)


9. Create a cloud watch alarm metric for integrate monitoring.
  and SNS topic for backend downtime.
  ![Screenshot (90)](https://github.com/user-attachments/assets/a6bcbf72-8335-4598-9e63-2c6924d0b3f8)

11. Deploy backend as docker container in  kubernetes
   create a kubernetes deployment and verifythe kubernetes deployment.
  
