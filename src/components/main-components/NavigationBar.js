import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import { fetchMyOrders } from '../../features/myOrdersSlice';
import { userLogin } from '../../features/userSlice';

const NavigationBar = () => {
    const dispatch = useDispatch()
    const userCredentials = useSelector(state => state.user)
    const cartItem = useSelector(state => state.cart)
    const myOrders = useSelector(state => state.myOrders)
    const navigate = useNavigate()
    useEffect(() => { dispatch(fetchMyOrders(userCredentials?.email)) }, [])
    return (

        <div className='sticky top-0 z-[2]'>
            <div className='grid grid-cols-3 h-[60px] bg-3 font-bold text-[18px] rounded-md m-4'>
                <div className='hidden lg:flex text-[white] items-center pl-8'>
                    <Link to='/' >Soundex</Link>
                </div>
                <div className='flex items-center'>
                    <Search />
                </div>

                <div className='hidden lg:flex items-center justify-end pr-8'>
                    <div className='relative text-[white] text-[18px]'>
                        {
                            cartItem?.length == 0 ?
                                <div></div>
                                :
                                <div className='absolute top-[-8px] left-[35px] text-[12px] flex justify-center items-center h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                                    <p>{cartItem?.length}</p>
                                </div>
                        }
                        <Link to='/cart' className='mr-8'>Cart</Link>
                    </div>
                    <div className='relative text-[white] text-[18px]'>
                        {
                            myOrders?.length == 0 ?
                                <div></div>
                                :
                                <div className='absolute top-[-8px] left-[55px] text-[12px] flex justify-center items-center h-[18px] w-[18px] bg-[red] text-[white] font-black rounded-full'>
                                    <p>{myOrders?.length}</p>
                                </div>
                        }
                        {
                            userCredentials?.admin ?
                                <Link to={'/all-orders'}>Manage Orders</Link>
                                :
                                <Link to={'/my-orders'}>Orders</Link>
                        }
                    </div>
                    <div className='text-[white] mr-8 cursor-pointer'>

                    </div>
                    {
                        userCredentials?._id ?
                            <div onClick={() => navigate("/profile")}>
                                <img src={userCredentials.proPic} className='h-[35px] w-[35px] rounded-full cursor-pointer' alt="" />
                            </div>
                            :
                            <div>
                                <button onClick={() => navigate("/login")} className='mr-2 py-1 px-2 rounded-full bg-[white] text-[16px]'>Login</button>
                                <button onClick={() => navigate("/signup")} className='py-1 px-2 rounded-full bg-[white] text-[16px]' >Register</button>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;