import {useState} from 'react'
import {forexSearch} from '../models/forexSearch' 

const defaultForexSearch: forexSearch  = {
    fromCurrency: '',
    toCurrency: '',
};


const useSearch = () => {

    const [searchStock, setSearchStock] = useState<string>('');
    const [searchForex, setSearchForex] = useState<forexSearch>(defaultForexSearch);


    const handleSearchStock = (symbol: string) => {
        setSearchStock(symbol);
    }

    const handleSearchForex = (forexSearch: forexSearch) => {
        setSearchForex(forexSearch);
    }


    return {
        searchStock,
        searchForex,
        handleSearchStock,
        handleSearchForex,
    }
}

export default useSearch