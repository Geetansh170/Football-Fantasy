import { SHOW_STANDING, SET_STANDING, SHOW_TEAM, SHOW_SQUAD } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_TEAM:
      return {
        ...state,
        team: action.payload
      };

    case SHOW_SQUAD:
      return {
        ...state,
        squad: action.payload
      };

    case SET_STANDING:
      return {
        ...state,
        stand: action.payload
      };

    case SHOW_STANDING:
      return {
        ...state,
        standings: action.payload
      };
    default:
      return state;
  }
};
