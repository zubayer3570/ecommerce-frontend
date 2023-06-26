import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchMyOrders = createAsyncThunk("fetchMyOrders", async (data) => {
    const { data: ordersData } = await axios.post("http://localhost:5000/my-orders", { email: data })
    return ordersData;
})
export const addOrder = createAsyncThunk("addOrder", async (data) => {
    const { data: addedOrder } = await axios.post("http://localhost:5000/add-order", data)
    return addedOrder;
})
export const cancelOrder = createAsyncThunk("cancelOrder", async (data) => {
    const { data: canceledOrder } = await axios.post("http://localhost:5000/cancel-order", data)
    return canceledOrder;
})

const myOrdersSlice = createSlice({
    name: "myOrdersSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMyOrders.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(addOrder.fulfilled, (state, action) => {
            return [...state, action.payload]
        })
        builder.addCase(cancelOrder.fulfilled, (state, action) => {
            const newState = state.filter(order => order._id != action.payload._id)
            return newState;
        })
    }
})

export default myOrdersSlice.reducer