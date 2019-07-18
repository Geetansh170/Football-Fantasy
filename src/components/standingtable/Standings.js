import React, { useContext } from "react";
import Standingitem from "./Standingitem";
import FootContext from "../../context/foot/footContext";

const Users = () => {
  const footContext = useContext(FootContext);

  const {
    standings,
    stand: { name }
  } = footContext;
  //console.log(stand);
  return (
    <div>
      <h1
        className='text-center shadow p-3 mb-5 rounded bg-dark'
        style={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "Courier New"
        }}
      >
        {name}
      </h1>
      {standings.map((standing) => (
        <Standingitem key={standing.position} standing={standing} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
