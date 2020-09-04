import React from "react";

export default function Cv() {
  return (
    <div className="row cv">
      <div className="three columns header-col"></div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>CV</h3>
            <p className="info">
              Last updated<span>•</span> <em className="date">August 2020</em>
            </p>
            <p>
              You can find my entire CV{" "}
              <a href="https://github.com/MillieClare/CV/blob/master/CV_2020.pdf">
                here
              </a>
              . <br />
              Alternatively, read below for a summary of my employment and
              skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
