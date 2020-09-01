import React, { useState } from 'react';


const MailOnline = {
  companyName: "MailOnline",
  jobTitle: "Junior Developer",
  employmentDuration: "April 2019 - Present      ",
  jobDescription: `At MailOnline, I worked across the front-end and back-end systems. I particularly enjoyed refactoring and migrating our modules
  to a new implementation. Working in Ad Tech is fast-paced and I get exposure to a lot of different aspects. I work on tickets that have a direct impact on 
  revenue, for example, implementing Connatix to increase ad revenue from videos. Due to the millions of users who visit the site each day, we handled large amounts of data. 
  To capture data from users at particular times or who exhibit certain behaviours, I used ksqlDB and Kafka Connect to process and serve queries for a range of user sets, 
  allowing the company to track revenue easily and clearly.`
}

const Decibel = {
  companyName: "Decibel",
  jobTitle: "Technical Support Assistant",
  employmentDuration: "November 2018 - April 2019      ",
  jobDescription: `At Decibel I worked within a small team supporting our clients and Customer Success Managers. I worked with many large companies such as Vodafone
  Currys, Asda and British Airways. As first line support when tickets came through, my tasks could range from hopping onto a call to walk a client
  through some of the dashboard features and tools, to adding in some bespoke JavaScript which ensured the data we collected was suited to the client's needs.`
}

export default function Work() {
  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <Employer {...MailOnline} />
        <br />
        <Employer {...Decibel} />
      </div>
    </div>
  );
}



function Employer(props) {
  const tempArray = useState(false);
  const isVisible = tempArray[0];
  const setIsVisible = tempArray[1];

  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>{props.companyName}</h3>
        <p className={`info`}>{props.jobTitle} <span>•</span> <em className="date">{props.employmentDuration}</em>
        <a><i className="fa fa-chevron-down" onClick={() => setIsVisible(!isVisible)} /></a></p>
        <p className={`${isVisible ? "info-text" : "info-hide"}`}>
          {props.jobDescription}
        </p>
      </div>
    </div>
  );
}
