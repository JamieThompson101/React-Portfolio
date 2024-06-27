//import React from "react";
//import gameImage from "../../assets/icon/gamebargains.png";
//import passImage from "../../assets/icon/passgen.png";
//import weatherDashImage from "../../assets/icon/Weather_Dashboard.png";
//import codingquizImage from "../../assets/icon/codingquiz.png";
//import readmeImage from "../../assets/icon/readmegenerator.png";
//import VideoVaultImage from "../../assets/icon/VideoVault.png";
//import pwatextImage from "../../assets/icon/pwatext.png";

//function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work/Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={gameImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="gamebargains"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Game Bargains</h4>
              <p>
                {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={passImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="passgen"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
            .{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={codingquizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="codingquiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
              {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={readmeImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="readmegenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Readme Generator</h4>
              <p>
              {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={VideoVaultImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="VideoVault"
                />
              </a>
            </div>
            <div className="job-text">
              <h4></h4>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href=" ">
                {" "}
                <img
                  src={pwatextImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="pwatext"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor PWA</h4>
              <p>
              {" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default Portfolio;