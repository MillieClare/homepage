import React from 'react';

export default function Footer() {
  return (
      <div>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
              <li><a href="https://twitter.com/TheMilliebug"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/millie-clare/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/milliebugg/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/millieclare"><i className="fa fa-github" /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2014 CeeVee</li>
                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                <li>Adapted for use by Millie</li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </div>
  );
}
