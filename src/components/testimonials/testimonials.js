import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>I came to Millie with a very clear design idea that I just didn't know how to replicate on the screen! 
                        She was completely faithful to my vision when building my WordPress site and was always happy to tweak things, 
                        no matter how small my request. After the initial setup she helped me gain confidence in editing the site myself, 
                        encouraging and supporting me with great enthusiasm for my project and giving me the freedom I needed to ensure 
                        I can keep my online portfolio up to date.
                      </p>
                      <cite>Lucia D'Avanzo-Lewis - econotes.co.uk/</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>I did good tings
                      </p>
                      <cite>a colleague</cite>
                    </blockquote>
                  </li> 
                </ul>
              </div> 
            </div>
          </div>
        </div>  
      </section>
      </React.Fragment>
    );
  }
}