import React from 'react';
import MoviesCards from './MoviesCards';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MoviesCards/>
        </div>      
    );
}

export default Home;