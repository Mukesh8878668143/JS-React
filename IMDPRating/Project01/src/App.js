import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import WatchList from './Component/WatchList';
import Home from './Component/Home';
import Navbar from './Component/Navbar'; 
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
      </Routes>
    </>
  )
}

export default App;
