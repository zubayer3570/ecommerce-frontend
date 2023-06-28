import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// let savedUser = JSON.parse(localStorage.getItem("soundex-user-credentials"))

// const fetchUserFirst = async (data) => {
//     const res = await axios.post("http://localhost:5000/login", data)
//     savedUser = res.data
//     return res.data
// }
// fetchUserFirst(savedUser);

export const userLogin = createAsyncThunk("login", async (data) => {
    const res = await axios.post("http://localhost:5000/login", data);
    return res.data;
})
export const userSignup = createAsyncThunk("signup", async (data) => {
    const res = await axios.post("http://localhost:5000/signup", data);
    return res.data;
})

const userSlice = createSlice({
    name: "userSlice",
    // initialState: JSON.parse(localStorage.getItem("soundex-user-credentials")),
    initialState: null,
    reducers: {
        logout: () => {
            localStorage.removeItem("soundex-user-credentials")
            return null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            const data = action.payload
            if (data._id) {
                localStorage.setItem("soundex-user-credentials", JSON.stringify(data))
            } else {
                localStorage.removeItem("soundex-user-credentials")
            }
            return data;
        })

        builder.addCase(userSignup.fulfilled, (state, action) => {
            const data = action.payload
            localStorage.setItem("soundex-user-credentials", JSON.stringify(data))
            return data;
        })
    }
})
export const { logout } = userSlice.actions
export default userSlice.reducer