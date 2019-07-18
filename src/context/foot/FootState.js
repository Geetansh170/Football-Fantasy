import React, { useReducer } from "react";
import axios from "axios";
import FootContext from "./footContext";
import FootReducer from "./footReducer";
import { SHOW_STANDING, SET_STANDING } from "../types";

const FootState = (props) => {
  const initialState = {
    standings: [],
    stand: {}
  };

  const [state, dispatch] = useReducer(FootReducer, initialState);

  // Show Standings
  const showStanding = async (id) => {
    const res = axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/${id}/standings`,
        {
          headers: { "X-Auth-Token": "da5c42a68c554cd69f76bc5fb67d71e7" }
        }
      )
      .then((res) => {
        setStanding(res.data.competition);
        dispatch({
          type: SHOW_STANDING,
          payload: res.data.standings[0].table
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // set standing
  const setStanding = async (info) => {
    dispatch({
      type: SET_STANDING,
      payload: info
    });
  };

  return (
    <FootContext.Provider
      value={{
        standings: state.standings,
        stand: state.stand,
        showStanding,
        setStanding
      }}
    >
      {props.children}
    </FootContext.Provider>
  );
};

export default FootState;
