import React from 'react'
import Syllabus from '../../components/common/Syllabus';

const CloudComputingSyllabus = () => {
  // Define topics here
  const topics = [
    {
      heading: "Linux M1",
      subtopics: [
        "Deep dive with Linux flavors",
        "Installing Centos / Redhat",
        "Basic command",
        "The Environment",
        "A Gentle Introduction to vi / vim / nano",
        "Customizing the Prompt",
        "Text Processing & IO",
        "Tar extracting and compression",
        "What Is the Shell?",
        "Basic shell scripting",
        "User management",
        "Basic permission",
        "Networking concept",
        "DHCP & DNS",
        "Firewalld",
        "Creating partitions with XFS format",
        "NFS, SSHFS",
        "Growing partitions",
        "SSH & RDP"
      ]
    },
    {
      heading: "Planning Business Applications M2",
      subtopics: [
        "What is cloud computing",
        "Types Of Cloud Computing",
        "Cloud Computing Issues",
        " Virtualization",
        "Types of virtualization",
        "Cloud Delivery Models",
        "Features of Cloud Computing",
        "Amazon Web Services (AWS)",
        "Creating ec2 instances",
        "Introduction to IAM services",
        "Creating user groups and accounts using IAM",
        "Creating permission boundary and policies",
        "Deploying applications with apache httpd and nginx web servers",
        "Elastic Ip's, ELB (Elastic Load Balancer)",
        "Storage services - EBS",
        "introduction to amazon RDS",
        "Creating RDS free tier instances",
        "Monitoring with cloud watch",
        "Introduction to other monitoring tools",
      ]
    },
    {
      heading: "Containerization using Docker M4",
      subtopics: [
        "Container History",
        "Container runtime engines",
        "Installation of docker on various platforms",
        "Need of containers",
        "Docker architecture understanding",
        "Docker operations",
        "Docker images and registry",
        "Docker building with Dockerfile",
        "Container basic operations",
        "Python and java based containerization",
        "Pushing image to docker registry",
        "Pushing image to ECR and ACR",
        "Docker networking",
        "Docker webui demo using portainer",
        "Docker compose demo and understanding"
      ]
    },
    {
      heading: "Kubernetes M5",
      subtopics: [
        "Introduction of kubernetes",
        "Introduction to container orchestration engine",
        "Setup k8s cluster using minikube & kubeadm",
        "K8s client options",
        "Pod concept",
        "Pod details",
        "Introduction to service",
        "Nodeport service demo",
        "Configmap demo",
        "Intro to deployment",
        "Javabase app deployment",
        "Kubernetes secrets",
        "Storage demo for local storage",
        "K8s dashboard",
        "App deployment using dashboard"
      ]
    },
    {
      heading: "SCM & VSC GIT/github M3",
      subtopics: [
        "Introduction to Github",
        "Creating repo and updating code"
      ]
    },
    {
      heading: "Ansible & Terraform for Infrastructure Provisioning M6",
      subtopics: [
        "Introduction",
        "Terraform Setup",
        "Terraform configuration and HCL",
        "provisioning of AWS for ec2 resources",
        "Understanding terraform state file",
        "Terraform provider and versioning",
        "Terraform variables and data types",
        "Introduction to ansible",
        "Difference b/w ansible and terraform",
        "Lab- Setup VMs and Install Ansible",
        "Ansible inventory",
        "Introduction to YAML",
        "Ansible Playbooks"
      ]
    },
    {
      heading: "CICD – Jenkins DevOps M7",
      subtopics: [
        "What is ci &cd",
        "Need of the industry",
        "Installing Jenkins",
        "Understanding Jenkins",
        "Creating jobs and connecting to technology",
        "Docker & k8s connecting",
        "Aws connection",
        "Design entire pipeline"
      ]
    },
    {
      heading: "Monitoring with Datadog M8",
      subtopics: [
        "Creating datadog account",
        "Integrations and alerts",
        "Container and cloud monitoring",
        "Kubernetes monitoring"
      ]
    }
  ];

  return (
    <>
      <Syllabus topics={topics} courseHeading="Cloud Computing & DevOps Course" />
    </>
  );
};

export default CloudComputingSyllabus