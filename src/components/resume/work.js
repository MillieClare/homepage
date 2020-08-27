import React from 'react';

const MailOnline = {
  companyName: "MailOnline",
  jobTitle: "Junior Developer",
  employmentDuration: "April 2019 - Present",
  jobDescription: "I did some cool stuff involving plugins and Ads."
}

const Decibel = {
  companyName: "Decibel",
  jobTitle: "Technical Support Assistant",
  employmentDuration: "November 2018 - April 2019",
  jobDescription: "I helped people turn it on and off again and got confused by US dates. Also US people don't like to anonymise customer data."
}

export default function Work() {
  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <Employer {...MailOnline} />
        <Employer {...Decibel} />
      </div>
    </div>
  );
}

function Employer(props) {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>{props.companyName}</h3>
        <p className="info">{props.jobTitle} <span>•</span> <em className="date">{props.employmentDuration}</em></p>
        <p>
          {props.jobDescription}
        </p>
      </div>
    </div>
  );
}
