// new_zub


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fech-product", async (producID) => {
    const { data } = await axios.get("http://localhost:5000/fetch-product/" + producID)
    return data;
})
export const fetchAllProducts = createAsyncThunk("fech-all-product", async (param) => {
    const res = await axios.get("http://localhost:5000/all-products")
    return res.data;
})

export const addProduct = createAsyncThunk("addProduct", async (data) => {
    const res = await axios.post("http://localhost:5000/add-product", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})

export const updateProductThunk = createAsyncThunk("updateProduct", async (data) => {
    const res = await axios.post("http://localhost:5000/update-product", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})

export const deleteProductThunk = createAsyncThunk("deleteProduct", async (data) => {
    const res = await axios.post("http://localhost:5000/delete-product", data,
        {
            headers: { Authorization: JSON.parse(localStorage.getItem('accessToken')).jwt }
        })
    return res.data
})



const productSlice = createSlice({
    name: "productSlice",
    initialState: { allProducts: [], selectedProduct: {}, loading: false },
    reducers: {
        selectProduct: (state, action) => {
            return { ...state, selectedProduct: action.payload }
        }
    },

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
        builder.addCase(updateProductThunk.fulfilled, (state, action) => {
            const updatedProducts = state.allProducts.map(prod => prod._id === action.payload._id ? action.payload : prod)
            return { ...state, allProducts: updatedProducts, loading: false }
        })
        builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
            const updatedProducts = state.allProducts.filter(prod => prod._id != action.payload._id)
            return { ...state, allProducts: updatedProducts, loading: false }
        })
    }
})


export default productSlice.reducer