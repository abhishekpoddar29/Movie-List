import { createContext , useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if (context === undefined){
        throw new Error("App context must be within AppContextProvider!");

    }
    return context;
};


const AppContextProvider = ({ children }) =>{
    const [favorites,setFavorites] = useState([]);


    const addToFavorites = (movies) =>{
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(movies) ;

        setFavorites(newFavorites);


    };


    const removeFromFavorite = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((movies) => movies.id !== id);

        setFavorites(newFavorites);
    };



    return(
        <AppContext.Provider 
            value={{favorites , addToFavorites , removeFromFavorite}}
        >
            {children}
        </AppContext.Provider>
    )



};

export default AppContextProvider;