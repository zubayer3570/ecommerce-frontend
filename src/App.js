import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import SearchResults from './components/Pages/SearchResults';
import Product from './components/Pages/Product';
import Payment from './components/main-components/Payment';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Cart from './components/main-components/Cart';
import Checkout from './components/Pages/Checkout';

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
    </Routes>
  );
}

export default App;
