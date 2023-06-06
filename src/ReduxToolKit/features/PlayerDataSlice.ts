import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState = {
    data: <any>null
}

export const PlayerDataSlice = createSlice({
    name: "PlayerDataSlice",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<any>) => {
            state.data = action.payload
        }
    }
})

export const { setData } = PlayerDataSlice.actions

export default PlayerDataSlice.reducer