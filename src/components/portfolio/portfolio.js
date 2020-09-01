import React from 'react';

const MiniMiniBot = {
  itemHref: "#modal-01",
  imgSrc: "images/portfolio/hi.png",
  projectName: "Miniminibot",
  languagesUsed: "JavaScript"
}

const ProjectTwo = {
  itemHref: "#modal-02",
  imgSrc: "images/portfolio/drum1.jpg",
  projectName: "JS Drumkit",
  languagesUsed: "HTML, JavaScript"
}

const ProjectThree = {
  itemHref: "#modal-03",
  imgSrc: "images/portfolio/judah.jpg",
  projectName: "Judah",
  languagesUsed: "Web Designs"
}

const ProjectFour = {
  itemHref: "#modal-04",
  imgSrc: "images/portfolio/into-the-light.jpg",
  projectName: "Into The Light",
  languagesUsed: "Photography"
}

const ProjectFive = {
  itemHref: "#modal-05",
  imgSrc: "images/portfolio/farmerboy.jpg",
  projectName: "Farmer Boy",
  languagesUsed: "Branding"
}

const ProjectSix = {
  itemHref: "#modal-06",
  imgSrc: "images/portfolio/girl.jpg",
  projectName: "Girl",
  languagesUsed: "Photography"
}

const ProjectSeven = {
  itemHref: "#modal-07",
  imgSrc: "images/portfolio/origami.jpg",
  projectName: "Origami",
  languagesUsed: "Illustrations"
}

const ProjectEight = {
  itemHref: "#modal-08",
  imgSrc: "images/portfolio/retrocam.jpg",
  projectName: "Retrocam",
  languagesUsed: "Web Development"
}

const MiniMiniBotPopout = {
  projectId: "modal-01",
  projectImage: "images/portfolio/hi.png", // can use different images if needed?
  projectTitle: "MiniMiniBot",
  projectDescription: "A chat bot written using Twitch's API to connect to chat which interacts with viewers and responds to commands.",
  projectCategories: "JavaScript",
  githubLink: "https://github.com/MillieClare/miniminibot_"
}

const ProjectTwoPopout = {
  projectId: "modal-02",
  projectImage: "images/portfolio/drum2.jpg", // can use different images if needed?
  projectTitle: "JS Drumkit",
  projectDescription: "Links the different parts of a drumkit to keyboard inputs.",
  projectCategories: "JavaScript",
  githubLink: "https://github.com/MillieClare/JSDrumkit"
}

const ProjectThreePopout = {
  projectId: "modal-03",
  projectImage: "images/portfolio/modals/m-judah.jpg", // can use different images if needed?
  projectTitle: "Project 3",
  projectDescription: "Blablabla.",
  projectCategories: "JavaScript",
  githubLink: "github repo link"
}

const ProjectFourPopout = {
  projectId: "modal-04",
  projectImage: "images/portfolio/modals/m-intothelight.jpg", // can use different images if needed?
  projectTitle: "Project 4",
  projectDescription: "Blablabla.",
  projectCategories: "JavaScript",
  githubLink: "github repo link"
}

const ProjectFivePopout = {
  projectId: "modal-05",
  projectImage: "images/portfolio/modals/m-farmerboy.jpg", // can use different images if needed?
  projectTitle: "Project 5",
  projectDescription: "Blablabla.",
  projectCategories: "JavaScript",
  githubLink: "github repo link"
}

const ProjectSixPopout = {
  projectId: "modal-06",
  projectImage: "images/portfolio/modals/m-girl.jpg", // can use different images if needed?
  projectTitle: "Project 6",
  projectDescription: "Blablabla.",
  projectCategories: "JavaScript",
  githubLink: "github repo link"
}

const ProjectSevenPopout = {
  projectId: "modal-07",
  projectImage: "images/portfolio/modals/m-origami.jpg", // can use different images if needed?
  projectTitle: "Project 7",
  projectDescription: "Blablabla.",
  projectCategories: "JavaScript",
  githubLink: "github repo link"
}

const ProjectEightPopout = {
  projectId: "modal-08",
  projectImage: "images/portfolio/modals/m-retrocam.jpg", // can use different images if needed?
  projectTitle: "Project 8",
  projectDescription: "Blablabla.",
  projectCategories: "JavaScript",
  githubLink: "github repo link"
}


function PortfolioItem(props) {
  return(
    <div className="columns portfolio-item">
    <div className="item-wrap">
      <a href={props.itemHref} title>
        <img alt="" src={props.imgSrc} />
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{props.projectName}</h5>
            <p>{props.languagesUsed}</p>
          </div>
        </div>
        <div className="link-icon"><i className="icon-plus" /></div>
      </a>
    </div>
  </div>
  )
}

function PortfolioPopup(props) {
  return (
    <div id={props.projectId} className="popup-modal mfp-hide">
    <img className="scale-with-grid" src={props.projectImage} alt="" />
    <div className="description-box">
      <h4>{props.projectTitle}</h4>
      <p>{props.projectDescription}</p>
      <span className="categories"><i className="fa fa-tag" />{props.projectCategories}</span>
    </div>
    <div className="link-box">
      <a href={props.githubLink}>Github</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>
  )
}


// add props
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          {/* portfolio-wrapper */}
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <PortfolioItem {...MiniMiniBot} />
          <PortfolioItem {...ProjectTwo} />
          <PortfolioItem {...ProjectThree} />
          <PortfolioItem {...ProjectFour} />
          <PortfolioItem {...ProjectFive} />
          <PortfolioItem {...ProjectSix} />
          <PortfolioItem {...ProjectSeven} />
          <PortfolioItem {...ProjectEight} />
          </div>
        </div>
        <PortfolioPopup {...MiniMiniBotPopout} />
        <PortfolioPopup {...ProjectTwoPopout} />
        <PortfolioPopup {...ProjectThreePopout} />
        <PortfolioPopup {...ProjectFourPopout} />
        <PortfolioPopup {...ProjectFivePopout} />
        <PortfolioPopup {...ProjectSixPopout} />
        <PortfolioPopup {...ProjectSevenPopout} />
        <PortfolioPopup {...ProjectEightPopout} />
      </div>
  </section> 
  );
};

