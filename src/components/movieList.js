import React, { useState, useEffect } from 'react';
import "../App";
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/appContext';


const MovieList = () => {

    const [movie, setMovie] = useState([]);

    const { favorites, addToFavorites, removeFromFavorite } = useAppContext();

    const favoriteChecker = (id) => {
        const boolean = favorites.some((movie) => movie.id === id);
        return boolean;
    }

    console.log("Favourites are ", favorites);

    useEffect(() => {
        fetch("https://imdb-api.com/en/API/MostPopularMovies/k_gx33lx5w")
            .then(res => res.json())
            .then(data => setMovie(data.items))
    }, [])



    return (
        <div className='movie-list'>
            {movie.map((movie) => (
                <div key={movie.id}>
                    <div>
                        <h4>{movie.title}</h4>
                    </div>
                    <div>
                        <h4>{movie.year}</h4>
                    </div>
                    <div>
                        <img src={movie.image} alt='#' />
                    </div>
                    <div>
                        {favoriteChecker(movie.id) ?
                            <button onClick={() => removeFromFavorite(movie.id)}>Remove Favorite</button>
                            : <button onClick={() => addToFavorites(movie)}>Favorite</button>}

                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default MovieList;
