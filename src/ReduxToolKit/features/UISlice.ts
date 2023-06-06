import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isFirstLoad: true,
    platform: 'pc',
    currentMode: 'all',
    isFormOpen: false,
    username: 'super-12850',
    currentTab: 'overview',
    currentHero: 'all-heroes',
    stat: 'time_played',
}

export const UISlice = createSlice({
    name: "UISlice",
    initialState,
    reducers: {
        setPlatform: (state, action: PayloadAction<string>) => {
            state.platform = action.payload
        },
        setCurrentMode: (state, action: PayloadAction<string>) => {
            state.currentMode = action.payload
        },
        setStat: (state, action: PayloadAction<string>) => {
            state.stat = action.payload
        },
        setCurrentHero: (state, action: PayloadAction<string>) => {
            state.currentHero = action.payload
        },
        setCurrentTab: (state, action: PayloadAction<string>) => {
            state.currentTab = action.payload
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setIsFormOpen: (state, action: PayloadAction<boolean>) => {
            state.isFormOpen = action.payload
        },
        setFirstLoadFalse: (state) => {
            state.isFirstLoad = false;
        }
    }
})

export const { setPlatform, setFirstLoadFalse, setCurrentMode, setCurrentTab, setIsFormOpen, setUsername, setCurrentHero, setStat } = UISlice.actions

export default UISlice.reducer