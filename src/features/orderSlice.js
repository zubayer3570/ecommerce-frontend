import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllOrders = createAsyncThunk("all-orders", async (data) => {
    const res = await axios.get("https://ecommerce-backend-d4lh.onrender.com/all-orders",
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data.allOrders
})
export const fetchOrder = createAsyncThunk("fetch-order", async (orderID) => {
    const res = await axios.get("https://ecommerce-backend-d4lh.onrender.com/fetch-order/" + orderID,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})

export const updateOrderStatus = createAsyncThunk("updating-status", async (data) => {
    const res = await axios.post("https://ecommerce-backend-d4lh.onrender.com/update-order-status", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    console.log("slice", res.data)
    return res.data
})

export const fetchMyOrders = createAsyncThunk("fetchMyOrders", async (data) => {
    const { data: ordersData } = await axios.post("https://ecommerce-backend-d4lh.onrender.com/my-orders", { email: data })
    return ordersData;
})

export const addOrder = createAsyncThunk("addOrder", async (data) => {
    const { data: addedOrder } = await axios.post("https://ecommerce-backend-d4lh.onrender.com/add-order", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return addedOrder;
})

export const cancelOrder = createAsyncThunk("cancelOrder", async (data) => {
    const { data: canceledOrder } = await axios.post("https://ecommerce-backend-d4lh.onrender.com/cancel-order", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return canceledOrder;
})



const orderSlice = createSlice({
    name: "orderSlice",
    initialState: { allOrders: [], myOrders: [], selectedOrder: {}, loading: false },
    extraReducers: (builder) => {
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            return { ...state, allOrders: action.payload, loading: false };
        })
        builder.addCase(fetchAllOrders.pending, (state, action) => {
            return { ...state, loading: true };
        })

        builder.addCase(fetchOrder.fulfilled, (state, action) => {
            return { ...state, selectedOrder: action.payload, loading: false };
        })
        builder.addCase(fetchOrder.pending, (state, action) => {
            return { ...state, loading: true };
        })

        builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
            return { ...state, selectedOrder: action.payload, loading: false }
        })
        builder.addCase(updateOrderStatus.pending, (state, action) => {
            return { ...state, loading: true };
        })


        builder.addCase(fetchMyOrders.fulfilled, (state, action) => {
            return { ...state, myOrders: action.payload, loading: false }
        })
        builder.addCase(fetchMyOrders.pending, (state, action) => {
            return { ...state, loading: true };
        })

        builder.addCase(addOrder.fulfilled, (state, action) => {
            return { ...state, myOrders: [...state.myOrders, action.payload], loading: false }
        })
        builder.addCase(addOrder.pending, (state, action) => {
            return { ...state, loading: true };
        })

        builder.addCase(cancelOrder.fulfilled, (state, action) => {
            const newState = state.myOrders.filter(order => order._id != action.payload._id)
            return { ...state, myOrders: [...newState], loading: false };
        })
        builder.addCase(cancelOrder.pending, (state, action) => {
            return { ...state, loading: true };
        })
    }
})

export default orderSlice.reducer