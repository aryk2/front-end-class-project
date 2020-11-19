import {useState} from 'react'
import {favoriteItem} from '../models/favoriteItem'

const defaultFavorites: favoriteItem[] = [];

const useHomePage = () => {
    const [favoriteItems, setFavoriteItems] = useState<favoriteItem[]>(defaultFavorites);
    
    const handleAddFavorite = (favoriteItem: favoriteItem) => {
        setFavoriteItems([...favoriteItems, favoriteItem]);
    }

    const handleRemoveFavorite = (favoriteItem: favoriteItem) => {
        const newList: favoriteItem[] = favoriteItems.filter((item) => item.symbol != favoriteItem.symbol)
        setFavoriteItems([...newList]);
    }

    return {
        favoriteItems,
        handleAddFavorite,
        handleRemoveFavorite
    }
}

export default useHomePage