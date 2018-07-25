import React from 'react';

const AboutMe = () => (
  <div id="about-me" className="contain-site">
    <div id="title-about-me">
      <p> William Hideki Kondo </p>
    </div>

    <div id="description-about-me"> 
      <p> 
        <b>Hi</b>! I'm a computer science student on <a href="https://www.ime.usp.br/en" target="_blank">Institue of Mathematics and Statistics</a>, 
        part of <a href="http://www5.usp.br/english/?lang=en" target="_blank">University of São Paulo</a>.
      </p>

      <p> 
        I enjoy to build apps and learn new things in the process. I also like to take part on programming competitions. 
      </p>
    </div> 

    <div id="site-about-me"> 
      About this site
    </div>

    <div id="site-description-about-me">
      <p> The purpose of this site is to show my projects and to train my programming skills. </p>
      <p> The main technologies that I used to build this site are:</p>
      <ul>
        <li>React</li>
        <li>React-Router</li>
        <li>Redux</li>
        <li>SCSS</li>
      </ul>
    </div>



  </div>
);

export default AboutMe;