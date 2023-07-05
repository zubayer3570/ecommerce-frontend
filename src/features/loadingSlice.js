import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState: false,
    reducers: {
        setLoadingState: (state, action) => {
            return action.payload
        }
    }
})

export const { setLoadingState } = loadingSlice.actions
export default loadingSlice.reducer