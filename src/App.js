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
import { userLogin } from './features/userSlice';
import ManageAllOders from './components/Pages/ManageAllOders';
import AdminOrderDetails from './components/Pages/AdminOrderDetails';
import { fetchAllProducts } from './features/productSlice';
import AddProduct from './components/Pages/AddProduct';
import Spinner from './components/main-components/Spinner';
import { fetchAllOrders } from './features/orderSlice';
import SearchPage from './components/Pages/SearchPage';

const savedUser = JSON.parse(localStorage.getItem("soundex-user-credentials"))

function App() {
  const dispatch = useDispatch()
  const {loggedInUser} = useSelector(state => state.user)
  const loading = useSelector(state => state.loading)
  useEffect(() => {
    dispatch(userLogin(savedUser))
    dispatch(fetchAllProducts())
  }, [])
  useEffect(() => {
    if (loggedInUser?.admin) {
      dispatch(fetchAllOrders())
    }
  }, [loggedInUser])
  const footerState = useSelector(state => state.footer)

  // if (loading) {
  //   return <Spinner />
  // }
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/search-results' element={<SearchResults />}></Route>
        <Route path='/product/:productID' element={<Product />}></Route>
        <Route path='/payment/:productID' element={<Payment />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/my-orders' element={<MyOrders />}></Route>
        <Route path='/order-details/:orderID' element={<OrderDetails />}></Route>
        <Route path='/all-orders' element={<ManageAllOders />}></Route>
        <Route path='/admin-order-details/:orderID' element={<AdminOrderDetails />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
        <Route path='/search-page' element={<SearchPage />}></Route>
      </Routes>
      <Footer position={footerState} />
    </>
  );
}

export default App;
