import {forexSearch} from './forexSearch' 

export interface PageProps {
    searchProps: {
        searchStock: string
        searchForex: forexSearch
        handleSearchStock: (searchStock: string) => void
        handleSearchForex: (searchForex: forexSearch) => void
    }
}