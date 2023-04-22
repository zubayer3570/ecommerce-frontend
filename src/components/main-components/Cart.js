import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const Cart = () => {
    const cart = useSelector(state=> state.cart)
    return (
        <>
            <div className='mx-4'>
                {
                    cart.map(cartItem=> <CartCard key={cartItem.id} data={cartItem} />)
                }
            </div>
        </>
    );
};

export default Cart;