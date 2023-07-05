import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../main-components/CartCard';
import Footer from '../main-components/Footer';
import { updateFooter } from '../../features/footerSlice';

const Cart = () => {
    const dispatch = useDispatch()
    // const [height, setHeight] = useState(document.getElementById("height")?.offsetHeight)
    const cart = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(updateFooter(document.getElementById("height")?.offsetHeight))
    }, [cart])
    return (
        <>
            <div className='mx-4' id='height'>
                {
                    cart?.map(cartItem => <CartCard key={cartItem._id} data={cartItem} />)
                }
            </div>
        </>
    );
};

export default Cart;