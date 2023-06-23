import React from 'react';
import "../App";
import { useAppContext } from './context/appContext';

const Favorite = () => {
    const { favorites, addToFavorites, removeFromFavorite } = useAppContext();

    const favoriteChecker = (id) => {
        const boolean = favorites.some((movie) => movie.id === id);
        return boolean;
    }

    console.log("Favourites are ", favorites);

  return (
    <div className='favorites'>
        {favorites.length>0 ? favorites.map((movie) => (
                <div key={movie.id}>
                    <div>
                        <h4>{movie.title}</h4>
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
            :<h1>you don't have any favorite Movies in here </h1>

            }
    </div>
  )
}

export default Favorite;