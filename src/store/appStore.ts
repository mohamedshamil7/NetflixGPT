import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice"
import gptReducer from "./slice/gptSlice"

const appStore = configureStore(
    {
      reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer
      }  
    }
)
export type RootState = ReturnType<typeof appStore.getState>;
export default appStore