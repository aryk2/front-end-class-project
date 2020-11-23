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
    const [loading, setLoading] = useState<boolean>(false);


    const handleSearchStock = (symbol: string) => {
        console.log(symbol)
        setLoading(true);
        setSearchStock(symbol);
        setLoading(false);

    }

    const handleSearchForex = (forexSearch: forexSearch) => {
        setSearchForex(forexSearch);
    }

    useEffect(() => {
        console.log(searchStock)
        history.push(ROUTES.home)
        if(searchStock !== '') {
            history.push(ROUTES.stock)
        }

    }, [searchStock, loading])

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