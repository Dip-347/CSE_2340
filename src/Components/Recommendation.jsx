import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination1,
      title: "Bangkok: The City of Life",
      subTitle: "Bangkok, the lively capital of Thailand, is a vibrant city where ancient culture and modern life blend seamlessly. ",
      cost: "38,800",
      duration: "Approx 3 night trip",
    },
    {
      image: Destination2,
      title: "Dubai: A City of Dreams in the Desert",
      subTitle: "Dubai, a dazzling metropolis in the United Arab Emirates, is famous for its futuristic architecture, luxury lifestyle, and Arabian charm. ",
      cost: "54,200",
      duration: "Approx 3 night trip",
    },
    {
      image: Destination3,
      title: "Malaysia: A Colorful Blend of Culture ",
      subTitle: "Malaysia is a vibrant Southeast Asian country where modern cities meet ancient rainforests, and diverse cultures live in harmony. ",
      cost: "35,500",
      duration: "Approx 3 night trip",
    },
    {
      image: Destination4,
      title: "Cox’s Bazar: World’s Longest Sea Beach",
      subTitle: "Cox’s Bazar, located in southeastern Bangladesh, is a popular coastal town known for having the world’s longest natural sandy sea beach",
      cost: "19,100",
      duration: "Approx 3 night trip",
    },
    {
      image: Destination5,
      title: "Sylhet: The Emerald Land of Tranquility",
      subTitle: "Sylhet, in northeastern Bangladesh, is a land of rolling tea gardens, misty hills, and spiritual heritage. ",
      cost: "14,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Sundarbans: The Mysterious Mangrove ",
      subTitle: "The Sundarbans, located in the southern part of Bangladesh, is the world’s largest mangrove forest and a UNESCO World Heritage Site. ",
      cost: "17,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${item.cost}</p>
              </div>

              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
