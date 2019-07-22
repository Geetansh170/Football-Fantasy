import React, { useContext } from "react";
import FootContext from "../../context/foot/footContext";

const Teamitem = ({ squad: { name, position, nationality } }) => {
  const footContext = useContext(FootContext);

  const { squad } = footContext;

  return (
    <div
      className='card shadow p-3 mb-5 rounded'
      style={{ backgroundColor: "black" }}
    >
      <h2
        className='text-center'
        style={{
          fontWeight: "bolder",
          textShadow: " 2px 2px 4px #000000",
          fontFamily: "serif",
          color: "white"
        }}
      >
        Name : {name}
      </h2>
      <br />
      <br />
      <h3
        style={{
          fontWeight: "bold",
          textShadow: " 2px 2px 4px #000000",
          fontFamily: "serif",
          color: "grey"
        }}
      >
        Position : {position}{" "}
      </h3>
      <h3
        style={{
          fontWeight: "bold",
          textShadow: " 2px 2px 4px #000000",
          fontFamily: "serif",
          color: "grey"
        }}
      >
        Nationality : {nationality}
      </h3>
    </div>
  );
};

export default Teamitem;
