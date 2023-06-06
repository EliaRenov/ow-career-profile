import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "../features/UISlice";
import PlayerDataReducer from "../features/PlayerDataSlice";

export const store = configureStore({
    reducer: {
        UI: UIReducer,
        PlayerData: PlayerDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch