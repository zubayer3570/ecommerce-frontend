import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import SearchResults from './components/Pages/SearchResults';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/search-results/:searchText' element={<SearchResults />}></Route>
    </Routes>
  );
}

export default App;
