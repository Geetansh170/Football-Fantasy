import React, { useReducer } from "react";
import axios from "axios";
import FootContext from "./footContext";
import FootReducer from "./footReducer";
import { SHOW_STANDING, SET_STANDING, SHOW_TEAM, SHOW_SQUAD } from "../types";

const FootState = (props) => {
  const initialState = {
    standings: [],
    stand: {},
    team: {},
    squad: []
  };

  const [state, dispatch] = useReducer(FootReducer, initialState);

  //Get team data
  const getTeam = async (id) => {
    const res = axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/teams/${id}`,
        {
          headers: { "X-Auth-Token": "da5c42a68c554cd69f76bc5fb67d71e7" }
        }
      )
      .then((res) => {
        console.log(res.data.squad);
        dispatch({
          type: SHOW_TEAM,
          payload: res.data
        });

        dispatch({
          type: SHOW_SQUAD,
          payload: res.data.squad
        });
      });
  };

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
        team: state.team,
        squad: state.squad,
        showStanding,
        setStanding,
        getTeam
      }}
    >
      {props.children}
    </FootContext.Provider>
  );
};

export default FootState;
