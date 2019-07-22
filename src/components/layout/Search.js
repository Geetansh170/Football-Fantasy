import React, { useContext } from "react";
import FootContext from "../../context/foot/footContext";
import axios from "axios";

const Search = () => {
  const footContext = useContext(FootContext);

  const onClick1 = () => {
    //console.log("hahah");

    footContext.showStanding("PL");
    //console.log(res.data);
  };
  const onClick2 = () => {
    //console.log("hahah");

    footContext.showStanding("SA");
    //console.log(res.data);
  };
  const onClick3 = () => {
    //console.log("hahah");

    footContext.showStanding("BL1");
    //console.log(res.data);
  };

  return (
    <div className='text-center shadow p-3 mb-5 rounded-circle '>
      <h1
        style={{
          textShadow: " 0 0 3px #FF0000",
          fontWeight: "bolder",
          fontFamily: "serif",
          fontSize: "4vw",
          textAlign: "center"
        }}
      >
        <u>SELECT THE LEAGUE</u>
      </h1>
      <br />
      <button
        type='button'
        className='btn btn-primary btn-lg btn-block shadow p-3 mb-5 rounded bg-dark '
        type='submit'
        onClick={onClick1}
      >
        Premier League
      </button>
      <button
        type='button'
        className='btn btn-secondary btn-lg btn-block shadow p-3 mb-5 rounded  bg-secondary'
        type='submit'
        onClick={onClick2}
      >
        SERIE A
      </button>
      <button
        type='button'
        className='btn btn-success btn-lg btn-block shadow p-3 mb-5 rounded bg-dark'
        type='submit'
        onClick={onClick3}
      >
        BundesLiga
      </button>
    </div>
  );
};

export default Search;
