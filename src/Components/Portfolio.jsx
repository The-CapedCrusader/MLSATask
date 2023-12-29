/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/robo.jpg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How can you get started with Competitive Programming?",
    description:
      "Competitive Programming is very crucial for the peoplw who want to get into MAANG. This article will help you to get started with CP.",
    url: "https://docs.google.com/document/d/15aFsMimOysHHEa8BI08nCCDoDcUZtDa1F8xM_WlJBEM/edit?usp=sharing",
  },
  {
    title: "My competitive programming journey",
    description:
      "From this you'll know about my journey of competitive programming and how I got into it.",
    url: "https://docs.google.com/document/d/1s2R_1WCKXhhQa7z_KdpIz5WW6Y6L_piciFDsPNJoTzg/edit?usp=sharing",
  },
  {
    title: "My ICPC journey",
    description:
      "From this you'll know about my journey of ICPC and how I got into it.",
    url: "https://icpc.global/ICPCID/9B1CKSAR1Z6V",
  },
  {
    title: "My AI journey",
    description:
      "From this you'll know about my journey of AI and how I got into it.",
    url: "https://www.coursera.org/account/accomplishments/certificate/NN9CUP8AXNP3",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover" }} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
