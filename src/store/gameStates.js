import { createSlice } from "@reduxjs/toolkit";
import { players, continents, countries } from "./gameData";

const gameStates = createSlice({
  name: "gameStates",
  initialState: {
    continents: continents,
    players: players,
    countries,
  },
});
