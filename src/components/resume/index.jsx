import React from "react";
import myResume from "../../assets/resumeupd.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
       Click link above ^ for my Resume.     
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* // Resume */}
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Front-End Skills Acquired</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GitHub</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          {}

          <p className="column-title">Back-End Skills Acquired</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          {}
          <p className="column-title">Performance Skills Acquired</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrDocumentPerformance />
              </li>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;