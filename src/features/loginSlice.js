import { createSlice } from '@reduxjs/toolkit'
const loginSlice = createSlice({
    name: "loginSlice",
    initialState: null,
    reducers: {
        loginUser: (state, action) => {
            const userCredentials = action.payload
            localStorage.setItem("user-credentials", JSON.stringify(userCredentials))
            return userCredentials
        },
        logout: () => {
            localStorage.removeItem("user-credentials")
            return null
        }
    }
})
export const {loginUser, logout} = loginSlice.actions
export default loginSlice.reducer