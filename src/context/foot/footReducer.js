import { SHOW_STANDING, SET_STANDING } from "../types";

export default (state, action) => {
  switch (action.type) {
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
