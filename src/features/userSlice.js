import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../init.firebase'



export const userSignup = createAsyncThunk("signup", async (data, { dispatch }) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, data.get("email"), data.get("password"))
        await sendEmailVerification(user)
        const res = await axios.post("http://192.168.1.104:5000/signup", data);
        return res.data;
    } catch (err) {
        return { message: err.message }
    }
})

export const userLogin = createAsyncThunk("login", async (data, { dispatch }) => {
    try {
        if (!auth.currentUser) {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        }
        const res = await axios.post("http://192.168.1.104:5000/login", data);
        localStorage.removeItem("accessToken")
        localStorage.setItem("accessToken", JSON.stringify({ jwt: res.data.jwt }))
        return res.data;
    } catch (err) {
        console.log(err)
        return { message: err.message }
    }
})


export const fetchAllUsers = createAsyncThunk("all-users", async (data, { dispatch }) => {
    const res = await axios.get("http://192.168.1.104:5000/all-users",
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data.allUsers
})


const userSlice = createSlice({
    name: "userSlice",
    initialState: { loggedInUser: {}, allUsers: [] },
    reducers: {
        logout: (state) => {
            signOut(auth)
            return { ...state, loggedInUser: {} }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userSignup.fulfilled, (state, action) => {
            return { ...state, loggedInUser: action.payload };
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            const data = action.payload
            return { ...state, loggedInUser: data };
        })

        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload
            return { ...state, allUsers: action.payload };
        })
    }
})
export const { logout } = userSlice.actions
export default userSlice.reducer