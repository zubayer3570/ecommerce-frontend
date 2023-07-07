import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingState } from "./loadingSlice";


export const fetchAllOrders = createAsyncThunk("all-orders", async (data) => {
    const res = await axios.get("http://192.168.1.104:5000/all-orders",
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data.allOrders
})
export const fetchOrder = createAsyncThunk("fetch-order", async (orderID) => {
    const res = await axios.get("http://192.168.1.104:5000/fetch-order/" + orderID,
    {
        headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
    })
    return res.data
})

export const updateOrderStatus = createAsyncThunk("updating-status", async (data) => {
    const res = await axios.post("http://192.168.1.104:5000/update-order-status", data,
    {
        headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
    })
    return res.data
})

export const fetchMyOrders = createAsyncThunk("fetchMyOrders", async (data) => {
    const { data: ordersData } = await axios.post("http://192.168.1.104:5000/my-orders", { email: data })
    return ordersData;
})

export const addOrder = createAsyncThunk("addOrder", async (data) => {
    const { data: addedOrder } = await axios.post("http://192.168.1.104:5000/add-order", data,
    {
        headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
    })
    return addedOrder;
})

export const cancelOrder = createAsyncThunk("cancelOrder", async (data) => {
    const { data: canceledOrder } = await axios.post("http://192.168.1.104:5000/cancel-order", data,
    {
        headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
    })
    return canceledOrder;
})



const orderSlice = createSlice({
    name: "orderSlice",
    initialState: { allOrders: [], myOrders: [], selectedOrder: {} },
    extraReducers: (builder) => {
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            return { ...state, allOrders: action.payload };
        })
        builder.addCase(fetchOrder.fulfilled, (state, action) => {
            return { ...state, selectedOrder: action.payload };
        })
        builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
            return { ...state, selectedOrder: action.payload }
        })
        builder.addCase(fetchMyOrders.fulfilled, (state, action) => {
            return { ...state, myOrders: action.payload }
        })
        builder.addCase(addOrder.fulfilled, (state, action) => {
            return { ...state, myOrders: [...state.myOrders, action.payload] }
        })
        builder.addCase(cancelOrder.fulfilled, (state, action) => {
            const newState = state.myOrders.filter(order => order._id != action.payload._id)
            return { ...state, myOrders: [...newState] };
        })
    }
})

export default orderSlice.reducer