import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import WatchList from './Component/WatchList';
import Home from './Component/Home';
import './App.css';
import Navbar from './Component/Navbar';
import Logout from './Component/Logout';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App;
