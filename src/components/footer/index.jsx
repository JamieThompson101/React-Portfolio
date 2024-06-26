import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Jamie Thompson</h2>
      <p>
        <ul>
          <a href="https://github.com/jamiethompson101">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jamie-thompson-0462932a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;