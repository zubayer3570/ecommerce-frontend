import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const cartSlice = createSlice({
    name: "cart",
    initialState: JSON.parse(localStorage.getItem("soundex-cart")),
    reducers: {
        addToCart: (state, action) => {
            if (state) {
                const exists = state.find(cartItem => cartItem.id === action.payload.id)
                if (!exists) {
                    localStorage.setItem("soundex-cart", JSON.stringify([...state, action.payload]))
                    toast("Added to the Cart!")
                    return [...state, action.payload]
                }
                toast("Already added to the Cart!")
            } else {
                localStorage.setItem("soundex-cart", JSON.stringify([action.payload]))
                return [action.payload]
            }
        },
        removeFromCart: (state, action) => {
            const target = action.payload
            state.forEach((cartItems, index) => {
                if (cartItems.id === target.id) {
                    state.splice(index, 1)
                    const newState = JSON.parse(localStorage.getItem("soundex-cart"))
                    newState.splice(index, 1)
                    localStorage.setItem("soundex-cart", JSON.stringify(newState))
                }
            })
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;