import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Happy Customers</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            Travel Loop offers an incredibly user-friendly website — easy to navigate, search for destinations, and adjust travel dates without needing to call. Once I made my choice, the booking process was quick and hassle-free. Thank you.
          </p>

          <div className={Classes.info}>
            <img src={avatar} alt="image" />
            <div>
              <h3>Dip Chy</h3>
              <span>CEO • webtechbyrahi channel</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <p>
            Great support throughout. Even with a tight timeline, quick and helpful replies made sure the preferred dates were confirmed .
          </p>

          <div className={Classes.info}>
            <img src={avatar2} alt="image" />
            <div>
              <h3>Anthony Tony</h3>
              <span>Researcher • wikipedia.com</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            I have to say, the service from this company was outstanding. I would confidently recommend them to anyone looking for a trustworthy experience. The rewards you receive with your holidays are truly fantastic.
          </p>

          <div className={Classes.info}>
            <img src={avatar3} alt="image" />
            <div>
              <h3>John Lee</h3>
              <span>CEO • Grand Thornton</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
