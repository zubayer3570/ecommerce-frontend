import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../init.firebase'



export const userSignup = createAsyncThunk("signup", async (data) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, data.get("email"), data.get("password"))
        await sendEmailVerification(user)
        const res = await axios.post("http://localhost:5000/signup", data);
        localStorage.removeItem("accessToken")
        localStorage.setItem("accessToken", JSON.stringify({ jwt: res.data.jwt }))
        return res.data;
    } catch (err) {
        return { message: err.message }
    }
})

export const userLogin = createAsyncThunk("login", async (data) => {
    try {
        if (!auth.currentUser) {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        }
        const res = await axios.post("http://localhost:5000/login", data);
        localStorage.removeItem("accessToken")
        localStorage.setItem("accessToken", JSON.stringify({ jwt: res.data.jwt }))
        return res.data;
    } catch (err) {
        return { message: err.message }
    }
})


export const fetchAllUsers = createAsyncThunk("all-users", async (data) => {
    const res = await axios.get("http://localhost:5000/all-users",
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data.allUsers
})


const userSlice = createSlice({
    name: "userSlice",
    initialState: { loggedInUser: {}, allUsers: [], loading: false },
    reducers: {
        logout: (state) => {
            signOut(auth)
            return { ...state, loggedInUser: {} }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userSignup.fulfilled, (state, action) => {
            return { ...state, loggedInUser: action.payload, loading: false };
        })
        builder.addCase(userSignup.pending, (state, action) => {
            return { ...state, loading: true };
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            const data = action.payload
            return { ...state, loggedInUser: data, loading: false };
        })
        builder.addCase(userLogin.pending, (state) => {
            return { ...state, loading: true };
        })

        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload
            return { ...state, allUsers: action.payload };
        })
    }
})
export const { logout } = userSlice.actions
export default userSlice.reducer