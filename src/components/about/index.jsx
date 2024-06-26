import React from "react";
//import profileImage from "../../assets/img/profile.jpeg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello my name is Jamie Thompson. Welcome to my portfolio.
          </p>
          <p>
            I am a full stack web developer. I have a passion for creating and problem solving. I am a creative thinker and enjoy working with others to create meaningful and impactful projects.
        </p>
        <p>
            I have experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, React, and more. I am always looking to learn new technologies and improve my skills.
        </p>
         </div>
      </div>
    </section>
  );
}

export default About;