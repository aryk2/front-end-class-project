import {useEffect, useState} from 'react'
import {forexSearch} from '../models/forexSearch' 
import { useHistory } from 'react-router-dom';
import ROUTES from '../models/routes'

const defaultForexSearch: forexSearch  = {
    fromCurrency: '',
    toCurrency: '',
};


const useSearch = () => {
    const history = useHistory();

    const [searchStock, setSearchStock] = useState<string>('');
    const [searchForex, setSearchForex] = useState<forexSearch>(defaultForexSearch);


    const handleSearchStock = (symbol: string) => {
        setSearchStock(symbol);
    }

    const handleSearchForex = (forexSearch: forexSearch) => {
        setSearchForex(forexSearch);
    }

    useEffect(() => {
        if(searchStock !== '') {
            history.push(ROUTES.stock)
        }

    }, [searchStock])

    useEffect(() => {
        if(searchForex.fromCurrency !== '') {
            history.push(ROUTES.forex)
        }

    }, [searchForex])


    return {
        searchStock,
        searchForex,
        handleSearchStock,
        handleSearchForex,
    }
}

export default useSearch