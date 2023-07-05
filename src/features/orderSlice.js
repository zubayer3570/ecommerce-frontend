import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllOrders = createAsyncThunk("all-orders", async () => {
    const res = await axios.get("https://ecommerce-backend-d4lh.onrender.com/all-orders")
    return res.data.allOrders
})
export const fetchOrder = createAsyncThunk("fetch-order", async (orderID) => {
    const res = await axios.get("https://ecommerce-backend-d4lh.onrender.com/fetch-order/" + orderID)
    return res.data
})

export const updateOrderStatus = createAsyncThunk("updating-status", async (data) => {
    const res = await axios.post("https://ecommerce-backend-d4lh.onrender.com/update-order-status", data)
    return res.data
})

export const fetchMyOrders = createAsyncThunk("fetchMyOrders", async (data) => {
    const { data: ordersData } = await axios.post("https://ecommerce-backend-d4lh.onrender.com/my-orders", { email: data })
    return ordersData;
})

export const addOrder = createAsyncThunk("addOrder", async (data) => {
    const { data: addedOrder } = await axios.post("https://ecommerce-backend-d4lh.onrender.com/add-order", data)
    return addedOrder;
})

export const cancelOrder = createAsyncThunk("cancelOrder", async (data) => {
    const { data: canceledOrder } = await axios.post("https://ecommerce-backend-d4lh.onrender.com/cancel-order", data)
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