import React from 'react';

export default function Skills() {
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <p>I value simple designs and clean, thoughtful code.
          </p>
        <div className="bars">
          <ul className="skills">
            <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
            <li><span className="bar-expand html5" /><em>HTML</em></li>
            <li><span className="bar-expand css" /><em>CSS</em></li>
            <li><span className="bar-expand react" /><em>React</em></li>
            <li><span className="bar-expand jquery" /><em>jQuery</em></li>
            <li><span className="bar-expand sql" /><em>SQL</em></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
