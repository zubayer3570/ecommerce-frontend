import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fech-product", async (producID) => {
    const { data } = await axios.get("https://ecommerce-backend-d4lh.onrender.com/fetch-product/" + producID)
    return data;
})
export const fetchAllProducts = createAsyncThunk("fech-all-product", async () => {
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