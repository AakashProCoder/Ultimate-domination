import { configureStore } from "@reduxjs/toolkit";
import homeScreenuiReducer from "./homeScreemUi"
const store = configureStore({homeScreenuiReducer:homeScreenuiReducer});
export default store;
