import React from 'react';
export default function Header() {
  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello, I'm Millie.</h1>
            <h3>I'm a London based <span>developer</span>, <span>musician</span> and <span>educator</span>. I enjoy working in fast-paced, nurturing
              environments, and good food.<br />Let's <a className="smoothscroll" href="#about">start</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://twitter.com/TheMilliebug"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/millie-clare/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/milliebugg/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/millieclare"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    </React.Fragment>
  )
}
