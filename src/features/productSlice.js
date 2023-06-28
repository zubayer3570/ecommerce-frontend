import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fech-product", async (producID) => {
    const { data } = await axios.get("http://localhost:5000/fetch-product/" + producID)
    return data;
})
export const fetchAllProducts = createAsyncThunk("fech-all-product", async () => {
    const { data } = await axios.get("http://localhost:5000/all-products")
    return data;
})

const productSlice = createSlice({
    name: "productSlice",
    initialState: {selectedProduct: null, allProducts: []},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
            return {...state, allProducts: action.payload.allProducts}
        })
        builder.addCase(fetchProduct.fulfilled, (state, action)=>{
            return {...state, selectedProduct: action.payload}
        })
    }
})


export default productSlice.reducer