import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1
        style={{
          textShadow: "3px 3px 10px black",
          color: "red",
          fontWeight: "bolder",
          fontSize: "70px"
        }}
      >
        About This App
      </h1>
      <br />

      <p
        style={{
          textShadow: " 0 0 3px #FF0000",
          fontWeight: "bold",
          fontFamily: "serif",
          fontSize: "40px"
        }}
      >
        Made by: Geetansh Kumar
      </p>
      <p
        style={{
          textShadow: " 0 0 3px #FF0000",
          fontWeight: "bold",
          fontFamily: "serif",
          fontSize: "40px"
        }}
      >
        Github Username:Geetansh170
      </p>
      <p
        style={{
          textShadow: " 0 0 3px #FF0000",
          fontWeight: "bold",
          fontFamily: "serif",
          fontSize: "40px"
        }}
      >
        Version: 1.0.0
      </p>
    </Fragment>
  );
};

export default About;
