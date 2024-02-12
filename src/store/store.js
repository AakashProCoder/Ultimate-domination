import { configureStore } from "@reduxjs/toolkit";
import homeScreenuiReducer from "./homeScreemUi";
import gameStateReducer from "./gameStates";
const store = configureStore({
  reducer: { homeScreenuiReducer: homeScreenuiReducer, gameStateReducer },
});
export default store;
