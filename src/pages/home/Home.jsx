import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Abdulmajid</h2>
        <div className="prompt">
          <p>A cloud and DevOps Engineer who likes trying out new things.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>AWS</h2>
            <span>
              EC2, Lambda, S3, DynamoDB, CodeBuild, CodePipeline, API Gateway, Amplify
            </span>
          </li>
          <li className="item">
            <h2>DevOps</h2>
            <span>
              Terraform, Docker, AWS SAM, Kubernetes, Linux, Jenkins, Ansible, Github Actions
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, C++</span>
          </li>
        </ol>
      </div>
    </div>

  );
}

export default Home;
