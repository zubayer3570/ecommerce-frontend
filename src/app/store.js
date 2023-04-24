import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import loginReducer from '../features/loginSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer
    }
})