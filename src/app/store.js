import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import userReducer from '../features/userSlice'
import myOrderReducer from '../features/myOrdersSlice'
import adminReducer from '../features/adminSlice'
import selectedReducer from '../features/selectedSlice'
import productReducer from '../features/productSlice'

export default configureStore({
    reducer: {
        product: productReducer,
        selected: selectedReducer,
        cart: cartReducer,
        user: userReducer,
        myOrders: myOrderReducer,
        admin: adminReducer,
    }
})