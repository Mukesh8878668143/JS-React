import React, { useState, useEffect } from 'react';
import Poster1 from '../assets/Poster.png';
import Poster2 from '../assets/poster2.jpg';
import Poster3 from '../assets/Poster3.jpg';
import GodzillaPoster from '../assets/godzilla-vs-kong-poster04.jpg';
import axios from 'axios';

const Banner = () => {
    const images = [Poster1, Poster2, Poster3, GodzillaPoster];

    const[currentIndex, setCurrentIndex] = useState(0);

    const [movies, setmovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5d141214fd2c717673a888e6ab2e6ccb');
                setmovies(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount 
    },[images.length]);



    return (
        <div className='flex flex-col items-center justify-center bg-gray-800 text-white py-10'>
            <h1>Poster</h1>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}
        className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
    );
}

export default Banner;