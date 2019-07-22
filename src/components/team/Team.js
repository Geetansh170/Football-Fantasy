import React, { useContext } from "react";
import Teamitem from "./Teamitem";
import FootContext from "../../context/foot/footContext";

const Team = () => {
  const footContext = useContext(FootContext);

  const {
    team: { name, tla, founded, crestUrl, venue, clubColors },
    squad
  } = footContext;

  console.log(squad[0]);

  return (
    <div>
      <div className='row'>
        <img
          className='col-4 img-responsive'
          src={crestUrl}
          alt=''
          style={{ height: "250px", width: "250px" }}
        />
        <h1
          style={{
            textShadow: "4px 4px 12px black",
            color: "red",
            fontWeight: "bolder",
            fontSize: "100px"
          }}
          className='col-8'
        >
          {" "}
          {name}{" "}
        </h1>
      </div>
      <br />
      <br />
      <br />
      <ul className='text-centre' style={{ listStyleType: "disc" }}>
        <li
          style={{
            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
            fontWeight: "bolder",
            fontFamily: "serif",
            fontSize: "40px"
          }}
        >
          •Founded : {founded}
        </li>
        <li
          style={{
            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
            fontWeight: "bolder",
            fontFamily: "serif",
            fontSize: "40px"
          }}
        >
          •Short Name : {tla}
        </li>
        <li
          style={{
            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
            fontWeight: "bolder",
            fontFamily: "serif",
            fontSize: "40px"
          }}
        >
          •Club Colors : {clubColors}
        </li>
        <li
          style={{
            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
            fontWeight: "bolder",
            fontFamily: "serif",
            fontSize: "40px"
          }}
        >
          •Stadium : {venue}
        </li>
      </ul>
      <br />
      <br />
      <br />
      <h1
        style={{
          textShadow: " 0 0 3px #FF0000",
          fontWeight: "bolder",
          fontFamily: "serif",
          fontSize: "80px",
          textAlign: "center"
        }}
      >
        {" "}
        Players{" "}
      </h1>
      <div style={userStyle}>
        {squad.map((player) => (
          <Teamitem key={player.id} squad={player} />
        ))}
      </div>
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Team;
