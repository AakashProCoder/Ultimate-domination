import { createSlice } from "@reduxjs/toolkit";
import { players, continents, countries } from "./gameData";

const gameStates = createSlice({
  name: "gameStates",
  initialState: {
    continents: continents,
    players: players,
    countries,
  },
  reducers: {},
});
export default gameStates.reducer;
export const gameStateSlice = gameStates.actions;
