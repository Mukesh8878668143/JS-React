import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Imdb-Logo-2001.png"; // Assuming you have a logo image in the assets folder
import Home from "./Home";
import WatchList from "./WatchList";
import Logout from "./Logout";

const Navbar = () => {
    return (
        <>
            <div className='flex space-x-8 item center pl-3 py-4'>
            <Link to={'/'}>
                <img src={logo} alt="Imdp icon" />
            </Link>
            <Link to={'/'}>Movies</Link>
            <Link to={'/watchlist'}>WatchList</Link>
            <Link to={'/Logout'}>Log-out</Link>
            </div>
        </>
    );
}

export default Navbar;