import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import userReducer from '../features/userSlice'
import myOrderReducer from '../features/myOrdersSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        myOrders: myOrderReducer,
    }
})