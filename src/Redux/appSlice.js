import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
        name: "app",
        initialState: {
            showSideBar: true,
            absoluteSideBar: false,
        },
        reducers:{
            ToggleMenu: (state) =>{
                    state.showSideBar = !state.showSideBar;
                    state.absoluteSideBar = !state.absoluteSideBar;
                },
         

        },

})

export const {ToggleMenu} = appSlice.actions;
export default appSlice.reducer;