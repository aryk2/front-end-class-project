import React, {useState} from 'react'
import {forexSearch} from '../models/forexSearch' 

const useSearch = () => {

    const defaultForexSearch: forexSearch  = {
        fromCurrency: '',
        toCurrency: '',
    }

    const [searchStock, setSearchStock] = useState<string>('');
    const [searchForex, setSearchForex] = useState<forexSearch>(defaultForexSearch);

    const [favoriteItems, setFavoriteItems] = useState<item[]>(null)
}

export default useSearch