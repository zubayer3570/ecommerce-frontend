import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("all-users", async () => {
    const res = await axios.get("http://localhost:5000/all-users")
    return res.data.allUsers
})
export const fetchAllOrders = createAsyncThunk("all-orders", async () => {
    const res = await axios.get("http://localhost:5000/all-orders")
    return res.data.allOrders
})
export const fetchOrder = createAsyncThunk("fetch-order", async (orderID) => {
    const res = await axios.get("http://localhost:5000/fetch-order/" + orderID)
    return res.data
})

export const updateOrderStatus = createAsyncThunk("updating-status", async (orderID, text) => {
    console.log(text)
    await axios.post("http://localhost:5000/update-order-status", { orderID, text })
})

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: { allUsers: null, allOrders: null, selectedOrder: null },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload
            return { ...state, allUsers: action.payload };
        })
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            return { ...state, allOrders: action.payload };
        })
        builder.addCase(fetchOrder.fulfilled, (state, action) => {
            return { ...state, selectedOrder: action.payload };
        })
    }
})

export default adminSlice.reducer