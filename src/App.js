// new_zub

import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import SearchResults from './components/Pages/SearchResults';
import Product from './components/Pages/Product';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Checkout from './components/Pages/Checkout';
import ProfilePage from './components/Pages/ProfilePage';
import Payment from './components/Pages/Payment';
import MyOrders from './components/Pages/MyOrders';
import OrderDetails from './components/Pages/OrderDetails';
import Footer from './components/main-components/Footer';
import Cart from './components/Pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsersThunk, userLogin } from './features/userSlice';
import ManageAllOders from './components/Pages/ManageAllOders';
import AdminOrderDetails from './components/Pages/AdminOrderDetails';
import { fetchAllProducts } from './features/productSlice';
import AddProduct from './components/Pages/AddProduct';
import { fetchAllOrders } from './features/orderSlice';
import SearchPage from './components/Pages/SearchPage';
import { auth } from './init.firebase'
import { onAuthStateChanged } from 'firebase/auth'
import RequireUser from './components/main-components/RequireUser';
import UpdateProduct from './components/Pages/UpdateProduct';
import ContactUs from './components/Pages/ContactUs';
import AllUsers from './components/main-components/AllUsers';
import UserInformationPage from './components/Pages/UserInformationPage';
import AllUserQueries from './components/Pages/AllUserQueries';
import QueryReply from './components/Pages/QueryReply';

// (function () { if (!window.chatbase || window.chatbase("getState") !== "initialized") { window.chatbase = (...args) => { if (!window.chatbase.q) { window.chatbase.q = [] } window.chatbase.q.push(args) }; window.chatbase = new Proxy(window.chatbase, { get(target, prop) { if (prop === "q") { return target.q } return (...args) => target(prop, ...args) } }) } const onLoad = function () { const script = document.createElement("script"); script.src = "https://www.chatbase.co/embed.min.js"; script.id = "PDT5l6yzj3Mhh7KJYZbu2"; script.domain = "www.chatbase.co"; document.body.appendChild(script) }; if (document.readyState === "complete") { onLoad() } else { window.addEventListener("load", onLoad) } })();
function App() {
  const dispatch = useDispatch()
  const { loggedInUser } = useSelector(state => state.user)



  useEffect(() => {
    dispatch(fetchAllProducts())
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userLogin({
          email: user.email
        }))
      }
    })
  }, [])

  useEffect(() => {
    if (loggedInUser?.admin) {
      dispatch(fetchAllOrders())
    }
  }, [loggedInUser])

  const footerState = useSelector(state => state.footer)



  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/search-results' element={<SearchResults />}></Route>
        <Route path='/product/:productID' element={<Product />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/order-details/:orderID' element={<OrderDetails />}></Route>
        <Route path='/search-page' element={<SearchPage />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>

        {/* User Protected Routes */}
        <Route path='/payment/:productID' element={<RequireUser><Payment /></RequireUser>}></Route>
        <Route path='/my-orders' element={<RequireUser><MyOrders /></RequireUser>}></Route>
        <Route path='/checkout' element={<RequireUser><Checkout /></RequireUser>}></Route>

        {/* Admin Protected Routes */}
        <Route path='/user-information/:userID' element={<UserInformationPage />}></Route>
        <Route path='/all-orders' element={<RequireUser><ManageAllOders /></RequireUser>}></Route>
        <Route path='/admin-order-details/:orderID' element={<RequireUser><AdminOrderDetails /></RequireUser>}></Route>
        <Route path='/add-product' element={<RequireUser><AddProduct /></RequireUser>}></Route>
        <Route path='/all-users' element={<RequireUser><AllUsers /></RequireUser>}></Route>
        <Route path='/update-product/:productID' element={<UpdateProduct />}></Route>
        <Route path='/all-user-queries' element={<AllUserQueries />}></Route>
        <Route path='/reply-to-query/:queryID' element={<QueryReply />}></Route>



      </Routes>
      <Footer position={footerState} />
    </>
  );
}

export default App;
