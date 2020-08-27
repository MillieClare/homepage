import React from 'react';
export default function About() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profile.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I started tinkering with webdesign over ten years ago, but it never crossed my mind that it could be my career until I rediscovered coding in 2017. 
                Since then, I have been working at building skills in HTML, CSS, & Javascript, whilst dabbiling in a few other bits and pieces. 
            </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Millie Clare</span><br />
                    <span>millie_clare@outlook.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://github.com/MillieClare/CV/blob/master/Millie_Clare_CV_2018.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}