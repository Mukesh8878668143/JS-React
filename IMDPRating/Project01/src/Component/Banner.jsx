<<<<<<< HEAD
import axios from 'axios';
import { useEffect, useState } from 'react';

=======
import React, { useState, useEffect } from 'react';
import Poster1 from '../assets/Poster.png';
import Poster2 from '../assets/poster2.jpg';
import Poster3 from '../assets/Poster3.jpg';
import GodzillaPoster from '../assets/godzilla-vs-kong-poster04.jpg';

>>>>>>> c128bf45db949884cc05c17d6d72546dfc0107e3
const Banner = () => {
<<<<<<< HEAD

    const [movies,setmovies]=useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
        .then(function(response){
            setmovies(response.data.result);
        })
        .catch(function(error){
            console.log(error);
        })
    })
=======
    const images = [Poster1, Poster2, Poster3, GodzillaPoster];

    const[currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount 
    },[images.length]);

>>>>>>> c128bf45db949884cc05c17d6d72546dfc0107e3
    return (
<<<<<<< HEAD
        <div className="banner">
            <div className='text-2xl fonrt bold text-center m-4'>
                <h1>Trending Movies</h1>
            </div>
            <div>
                {/* {movies.map((movieobj,i)=>{
                    return <MovieCard movieobj = {movieobj}></>
                })} */}
            </div>
=======
        <div className='flex flex-col items-center justify-center bg-gray-800 text-white py-10'>
            <h1>Poster</h1>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}
        className="w-full max-w-md rounded-lg shadow-lg" />
>>>>>>> c128bf45db949884cc05c17d6d72546dfc0107e3
        </div>
    );
}

export default Banner;