import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import userReducer from '../features/userSlice'
import productReducer from '../features/productSlice'
import orderReducer from '../features/orderSlice'
import footerReducer from '../features/footerSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        orders: orderReducer,
        cart: cartReducer,
        user: userReducer,
        footer: footerReducer
    }
})

export default store