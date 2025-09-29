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

export const fetchUserThunk = createAsyncThunk("fetchUser", async (data) => {
    try {
        const res = await axios.post("http://localhost:5000/user-information", data, {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        });
        return res.data;
    } catch (err) {
        return { message: err.message }
    }
})

export const fetchAllUsersThunk = createAsyncThunk("allUsers", async () => {
    try {
        console.log("fetching all users frontend")
        const res = await axios.get("http://localhost:5000/all-users",
            {
                headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
            })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

export const makeAdminThunk = createAsyncThunk("makeAdmin", async (data) => {
    const res = await axios.post("http://localhost:5000/make-admin", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})

export const deleteUserThunk = createAsyncThunk("deleteUser", async (data) => {
    const res = await axios.post("http://localhost:5000/delete-user", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})


const userSlice = createSlice({
    name: "userSlice",
    initialState: { loggedInUser: {}, allUsers: [], userInformation: {}, loading: false },
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
            return { ...state, loggedInUser: action.payload, loading: false };
        })
        builder.addCase(userLogin.pending, (state) => {
            return { ...state, loading: true };
        })

        builder.addCase(fetchAllUsersThunk.pending, (state, action) => {
            return { ...state, loading: true };
        })

        builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
            return { ...state, userInformation: action.payload.userInfo, loading: false };
        })

        builder.addCase(fetchAllUsersThunk.fulfilled, (state, action) => {
            return { ...state, allUsers: action.payload.allUsers, loading: false };
        })

        builder.addCase(makeAdminThunk.fulfilled, (state, action) => {
            const newAllUsers = state.allUsers.map(user => {
                if (user._id === action.payload.newAdmin._id) {
                    return action.payload.newAdmin
                }
                return user
            })
            return { ...state, allUsers: newAllUsers, loading: false };
        })

        builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
            const remainingUsers = state.allUsers.filter(user => user._id !== action.payload.deletedUser._id)
            return { ...state, allUsers: remainingUsers, loading: false };
        })
    }
})
export const { logout } = userSlice.actions
export default userSlice.reducer