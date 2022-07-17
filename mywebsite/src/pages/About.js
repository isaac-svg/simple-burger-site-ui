import React from "react";

import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <h1>ABOUT US</h1>
      <div className="aboutBottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          quia velit, incidunt recusandae animi laudantium non similique amet,
          nesciunt debitis excepturi! Facilis perspiciatis unde molestiae ex
          deserunt veritatis, ipsa neque veniam numquam magni, minima quasi,
          placeat corrupti. Minus beatae fuga exercitationem accusamus cum nulla
          perspiciatis.
        </p>
      </div>
    </div>
  );
}

export default About;
