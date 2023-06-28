import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProduct = createAsyncThunk("fech-product", async (producID) => {
    const { data } = await axios.get("http://localhost:5000/fetch-product/" + producID)
    return data;
})
export const fetchOrder = createAsyncThunk("fech-all-product", async (orderID) => {
    const { data } = await axios.get("http://localhost:5000/fetch-order/" + orderID)
    return data;
})

const selectedSlice = createSlice({
    name: "selected",
    initialState: { selectedProduct: null, selectedOrder: null },
    extraReducers: (buidler) => {
        buidler.addCase(fetchProduct.fulfilled, (state, action) => {
            return { ...state, selectedProduct: action.payload }
        })
        buidler.addCase(fetchOrder.fulfilled, (state, action) => {
            return { ...state, selectedOrder: action.payload }
        })
    }
})

export const { selectOrder, selectProduct } = selectedSlice.actions

export default selectedSlice.reducer