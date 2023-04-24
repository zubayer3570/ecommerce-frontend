import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyOrders = () => {
    const userCredentials = useSelector(state=>state.login)
    useEffect(()=>{
        fetch("http://localhost:5000/my-orders")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default MyOrders;