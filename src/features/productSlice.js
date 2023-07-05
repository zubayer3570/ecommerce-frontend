import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingState } from "./loadingSlice";

export const fetchProduct = createAsyncThunk("fech-product", async (producID) => {
    const { data } = await axios.get("https://ecommerce-backend-d4lh.onrender.com/fetch-product/" + producID)
    return data;
})
export const fetchAllProducts = createAsyncThunk("fech-all-product", async (param, { dispatch }) => {
    dispatch(setLoadingState(true))
    const { data } = await axios.get("https://ecommerce-backend-d4lh.onrender.com/all-products")
    dispatch(setLoadingState(false))
    return data;
})

export const addProduct = createAsyncThunk("addProduct", async (data, {dispatch}) => {
    dispatch(setLoadingState(true))
    const res = await axios.post("https://ecommerce-backend-d4lh.onrender.com/add-product", data)
    dispatch(setLoadingState(false))
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