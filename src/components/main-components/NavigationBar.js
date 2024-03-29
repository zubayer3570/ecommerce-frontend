import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import { fetchMyOrders } from '../../features/orderSlice';

const NavigationBar = () => {
    const [hamState, setHamState] = useState(false)
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector(state => state.user) || {}
    const { allOrders } = useSelector(state => state.orders)
    const { myOrders } = useSelector(state => state.orders)
    const cartItem = useSelector(state => state.cart)
    const navigate = useNavigate()
    useEffect(() => {
        if (loggedInUser._id) {
            dispatch(fetchMyOrders(loggedInUser._id.email))
        }
    }, [loggedInUser])
    return (

        <div className='sticky top-0 z-[2]'>
            <div className='flex justify-between items-center h-[50px] bg-3 font-bold text-[16px] rounded-md m-4 px-4'>
                <div className='flex text-[white] items-center'>
                    <Link to='/' >Soundex</Link>
                </div>

                <div className='hidden lg:block grow px-8'>
                    <Search />
                </div>

                <div className='hidden lg:flex text-[white]'>
                    {
                        loggedInUser?.admin ?
                            <>
                                <div className='flex grid grid-cols-5 text-[white] mx-2'>
                                    <Link to={'/all-orders'} className='col-span-4'>All Orders</Link>
                                    {
                                        allOrders?.length == 0 ?
                                            <div className='hidden'></div>
                                            :
                                            <button className='mt-[-5px] text-[12px] h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                                                {allOrders?.length}
                                            </button>
                                    }
                                </div>
                                <Link to={'/add-product'} className='ml-2 mr-8'>Add Product</Link>

                            </>

                            :

                            <>
                                <div className='grid grid-cols-2 text-[white]'>
                                    <Link to='/cart'>Cart</Link>
                                    {
                                        cartItem?.length == 0 ?
                                            <div></div>
                                            :
                                            <button className='mt-[-5px] text-[12px] h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                                                {cartItem?.length}
                                            </button>
                                    }
                                </div>
                                {
                                    loggedInUser?._id ?
                                        <div className='grid grid-cols-2 text-[white]'>
                                            <Link to={'/my-orders'}>Orders</Link>
                                            {
                                                myOrders?.length == 0 ?
                                                    <div></div>
                                                    :
                                                    <button className='mt-[-5px] text-[12px] h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                                                        {myOrders?.length}
                                                    </button>
                                            }
                                        </div>
                                        :
                                        <div className='hidden' ></div>
                                }
                            </>
                    }
                </div>
                <div className='flex items-center bg-red-500'>
                    <img src="/search-icon-white.svg" onClick={() => navigate('/search-page')} className='lg:hidden block mr-2' alt="" />
                    <img src="/hamburger.svg" onClick={() => setHamState(!hamState)} className='lg:hidden block mr-2' alt="" />
                    {
                        loggedInUser?._id ?
                            <div onClick={() => navigate("/profile")}>
                                <img src={loggedInUser.proPic} className='h-[30px] w-[30px] rounded-full cursor-pointer' alt="" />
                            </div>
                            :
                            <div>
                                <button onClick={() => navigate("/login")} className='mr-2 py-1 px-2 rounded-full bg-[white] text-[16px]'>Login</button>
                                <button onClick={() => navigate("/signup")} className='py-1 px-2 rounded-full bg-[white] text-[16px]' >Register</button>
                            </div>
                    }
                </div>
                {
                    hamState ?
                        <div className='lg:hidden absolute top-[50px] bg-[white] rounded-md shadow-first right-4 p-2'>
                            <ul onClick={() => setHamState(!hamState)}>
                                {
                                    loggedInUser._id ?
                                        loggedInUser.admin ?
                                            <>
                                                <li><Link to='/all-orders'>All Orders</Link></li>
                                                <li><Link to='/add-product'>Add products</Link></li>
                                            </>
                                            :
                                            <li><Link to='/my-orders'>Orders</Link> </li>
                                        :
                                        ""
                                }
                                <li><Link to='/cart'>cart</Link> </li>

                            </ul>
                        </div>
                        :
                        <div className='hidden' ></div>
                }
            </div>
        </div>
    );
};

export default NavigationBar;