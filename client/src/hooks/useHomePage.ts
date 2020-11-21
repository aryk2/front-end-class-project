import {useState, useEffect} from 'react'
import {favoriteItem} from '../models/favoriteItem'

const defaultFavorites: favoriteItem[] = [];

const getStoredFavorites = () => {
    const storedFavorites = localStorage.getItem("storedFavorites")
    if(!storedFavorites) {
        return defaultFavorites
    }
    const retrievedObject = JSON.parse(storedFavorites)
    console.log(!retrievedObject?.favoritesArray)
    if(!retrievedObject?.favoritesArray) {
        return defaultFavorites
    }
    return retrievedObject?.favoritesArray
}

const useHomePage = () => {
    const [favoriteItems, setFavoriteItems] = useState<favoriteItem[]>(getStoredFavorites());
    
    useEffect(() => {
        console.log(getStoredFavorites())
    }, [])

    const handleAddFavorite = (favoriteItem: favoriteItem) => {
        const favoritesObject = {favoritesArray: [...favoriteItems, favoriteItem]}
        localStorage.setItem("storedFavorites", JSON.stringify(favoritesObject))
        setFavoriteItems([...favoriteItems, favoriteItem]);
    }

    const handleRemoveFavorite = (favoriteItem: favoriteItem) => {
        const newList: favoriteItem[] = favoriteItems.filter((item) => item.symbol != favoriteItem.symbol)
        const favoritesObject = {favoritesArray: [...newList]}
        localStorage.setItem("storedFavorites", JSON.stringify(favoritesObject))
        setFavoriteItems([...newList]);
    }

    return {
        favoriteItems,
        handleAddFavorite,
        handleRemoveFavorite
    }
}

export default useHomePage