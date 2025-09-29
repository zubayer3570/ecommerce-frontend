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
            dispatch(fetchMyOrders(loggedInUser.email))
        }
    }, [loggedInUser])
    return (

        <div className='sticky top-0 z-[2] bg-3 '>
            <div className='flex justify-between items-center h-[50px] font-bold text-[16px] p-8 lg:ml-[100px]'>
                <div className='flex text-[white] items-center'>
                    <Link to='/' className='text-[18px]' >GadgetGeek</Link>
                </div>

                <div className='hidden grow lg:flex justify-end text-[white]'>
                    {
                        loggedInUser?.admin &&
                        <>
                            <div className='flex grid grid-cols-5 text-[white] mx-2'>
                                <Link to={'/all-orders'} className='col-span-4'>Customer Orders</Link>
                                {
                                    allOrders?.length == 0 ?
                                        <div className='hidden'></div>
                                        :
                                        <button className='mt-[-5px] text-[12px] h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                                            {allOrders?.length}
                                        </button>
                                }
                            </div>
                            <Link to={'/add-product'} className='ml-2 mr-8'>Create Product</Link>
                            <Link to={'/all-users'} className='ml-2 mr-8'>All Users</Link>
                            <Link to={'/all-user-queries'} className='ml-2 mr-8'>All Queries</Link>
                        </>
                    }
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
                </div>

                <div className='hidden lg:block shrink px-8'>
                    <Search />
                </div>

                <div className='flex items-center bg-red-500'>
                    {/* <img src="/search-icon-white.svg" onClick={() => navigate('/search-page')} className='lg:hidden block mr-2' alt="" /> */}
                    {
                        loggedInUser?._id ?
                            <div onClick={() => navigate("/profile")}>
                                <img src={loggedInUser.proPic} className='h-[38px] w-[38px] rounded-full cursor-pointer' alt="" />
                            </div>
                            :
                            <div>
                                <button onClick={() => navigate("/login")} className='px-2 rounded-full text-[white] '>Login</button>
                                <button onClick={() => navigate("/signup")} className='px-2 rounded-full text-[white] ' >Register</button>
                            </div>
                    }
                    <img src="/hamburger.svg" onClick={() => setHamState(!hamState)} className='lg:hidden block mr-2' alt="" />
                </div>

                <Link to={'/contact-us'} className='ml-8 mr-8 text-[white] hidden lg:block'>Contact Us</Link>

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
                                <li><Link to='/contact-us'>Contact Us</Link></li>

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