import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingState } from "./loadingSlice";

export const fetchProduct = createAsyncThunk("fech-product", async (producID, { dispatch }) => {
    const { data } = await axios.get("http://192.168.1.104:5000/fetch-product/" + producID)
    if (data) {
        console.log("hi")
    }
    return data;
})
export const fetchAllProducts = createAsyncThunk("fech-all-product", async (param, { dispatch }) => {
    const { data } = await axios.get("http://192.168.1.104:5000/all-products")
    return data;
})

export const addProduct = createAsyncThunk("addProduct", async (data, { dispatch }) => {
    const res = await axios.post("http://192.168.1.104:5000/add-product", data,
    {
        headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
    })
    return res.data
})

const productSlice = createSlice({
    name: "productSlice",
    initialState: { allProducts: [], selectedProduct: {} },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return { ...state, allProducts: action.payload.allProducts }
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return { ...state, selectedProduct: action.payload }
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            return { ...state, allProducts: [...state.allProducts, action.payload] }
        })
    }
})


export default productSlice.reducer