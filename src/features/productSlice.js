import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fech-product", async (producID) => {
    const { data } = await axios.get("https://ecommerce-backend-d4lh.onrender.com/fetch-product/" + producID)
    return data;
})
export const fetchAllProducts = createAsyncThunk("fech-all-product", async (param) => {
    const res = await axios.get("https://ecommerce-backend-d4lh.onrender.com/all-products")
    return res.data;
})

export const addProduct = createAsyncThunk("addProduct", async (data) => {
    const res = await axios.post("https://ecommerce-backend-d4lh.onrender.com/add-product", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})

const productSlice = createSlice({
    name: "productSlice",
    initialState: { allProducts: [], selectedProduct: {}, loading: false },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            return { ...state, loading: true }
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return { ...state, allProducts: action.payload.allProducts, loading: false }
        })
        builder.addCase(fetchProduct.pending, (state) => {
            return { ...state, loading: true }
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return { ...state, selectedProduct: action.payload, loading: false }
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            return { ...state, allProducts: [...state.allProducts, action.payload], loading: false }
        })
        builder.addCase(addProduct.pending, (state, action) => {
            return { ...state, loading: true }
        })
    }
})


export default productSlice.reducer