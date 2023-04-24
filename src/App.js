import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import SearchResults from './components/Pages/SearchResults';
import Product from './components/Pages/Product';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Cart from './components/main-components/Cart';
import Checkout from './components/Pages/Checkout';
import ProfilePage from './components/Pages/ProfilePage';
import Payment from './components/Pages/Payment';
import MyOrders from './components/Pages/MyOrders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/search-results/:searchText' element={<SearchResults />}></Route>
      <Route path='/product/:productID' element={<Product />}></Route>
      <Route path='/payment/:productID' element={<Payment />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/my-orders' element={<MyOrders />}></Route>
    </Routes>
  );
}

export default App;
