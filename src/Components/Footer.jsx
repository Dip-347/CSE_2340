import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.jpg";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+8801877456880</p>
          <p>travelloopBD@gmail.com</p>
          <a href="https://web.facebook.com/rahi680/">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/asfak-ahmed-731212245/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/asfak00">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              Travel <span>Loop</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Let us be your guide — discover the world.</h3>
          <p>
            Unlock stories, sights, and secrets from every corner of the globe — with us as your guide.
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
