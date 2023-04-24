import { createSlice } from '@reduxjs/toolkit'
const loginSlice = createSlice({
    name: "loginSlice",
    initialState: JSON.parse(localStorage.getItem("soundex-user-credentials")),
    reducers: {
        loginUser: (state, action) => {
            const userCredentials = action.payload
            localStorage.setItem("soundex-user-credentials", JSON.stringify(userCredentials))
            return userCredentials
        },
        logout: () => {
            localStorage.removeItem("soundex-user-credentials")
            return null
        }
    }
})
export const {loginUser, logout} = loginSlice.actions
export default loginSlice.reducer