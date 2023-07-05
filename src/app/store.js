import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import userReducer from '../features/userSlice'
import productReducer from '../features/productSlice'
import orderReducer from '../features/orderSlice'
import loadingReducer from '../features/loadingSlice'
import footerReducer from '../features/footerSlice'

export default configureStore({
    reducer: {
        loading: loadingReducer,
        product: productReducer,
        orders: orderReducer,
        cart: cartReducer,
        user: userReducer,
        footer: footerReducer
    }
})