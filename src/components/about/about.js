import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profile.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            I started tinkering with webdesign over ten years ago, but it never
            crossed my mind that it could be my career until I rediscovered
            coding in 2017. Now, I'm a London-based developer seeking meaningful
            challenges and opportunities, looking to help others a solve
            problems in new and exciting ways.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Millie Clare</span>
                <br />
                <span>millie_clare@outlook.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href="https://github.com/MillieClare/CV/blob/master/CV_2020.pdf"
                  className="button"
                >
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
