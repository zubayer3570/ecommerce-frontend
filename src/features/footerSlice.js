import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
    name: "footerSlice",
    initialState: "relative",
    reducers: {
        updateFooter: (state, action) => {
            return action.payload < (window.innerHeight - 260) ? "absolute" : "relative"
        }
    }
})

export const { updateFooter } = footerSlice.actions
export default footerSlice.reducer