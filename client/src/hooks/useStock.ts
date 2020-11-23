import {useState, useEffect} from 'react'
const fetch = require("node-fetch");

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

const useStock = (symbol: string) => {
    const [stock, setStock] = useState(symbol);

    const [open, setOpen] = useState<any>(null);
    const [close, setClose] = useState<any>(null);
    const [high, setHigh] = useState<any>(null);
    const [low, setLow] = useState<any>(null);
    const [dates, setDates] = useState<any>(null);
    const [loaded, setLoaded] = useState<null | true>(null);

    const endpoint =
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
        stock +
        "&outputsize=compact" +
        "&apikey=" +
        apiKey;

    const openExp = new RegExp(/(open":")[\d.]+"/, "g");
    const highExp = new RegExp(/(close":")[\d.]+"/, "g");
    const lowExp = new RegExp(/(low":")[\d.]+"/, "g");
    const closeExp = new RegExp(/(close":")[\d.]+"/, "g");
    const numExp = new RegExp(/[\d.]+/, "g");
    const dateExp = new RegExp(/[\d]{4}[-][\d]{2}[-][\d]{2}/, "g");

    useEffect(() => {
        const getData = async (endpoint: string) => {
        await fetch(endpoint)
            .then((response: any) => response.json())
            .then(async (jsonResponse: any) => {
            let temp = JSON.stringify(jsonResponse);
            let openTemp = temp.match(openExp);
            let highTemp = temp.match(highExp);
            let lowTemp = temp.match(lowExp);
            let closeTemp = temp.match(closeExp);
            let datesTemp = temp.match(dateExp);

            let openArr = [];
            for (let i = 0; i < openTemp!.length; ++i) {
                openArr.push(openTemp![i].match(numExp));
            }

            let highArr = [];
            for (let i = 0; i < highTemp!.length; ++i) {
                highArr.push(highTemp![i].match(numExp));
            }

            let lowArr = [];
            for (let i = 0; i < lowTemp!.length; ++i) {
                lowArr.push(lowTemp![i].match(numExp));
            }

            let closeArr = [];
            for (let i = 0; i < closeTemp!.length; ++i) {
                closeArr.push(closeTemp![i].match(numExp));
            }
            setOpen(openArr);
            setClose(closeArr);
            setLow(lowArr);
            setHigh(highArr);
            setDates(datesTemp);
            setLoaded(true);
            })
            .catch((err: any) => {
            console.error(err);
            });
        };
        if (loaded === true) {
        setLoaded(null);
        getData(endpoint);
        } else {
        getData(endpoint);
        }
    }, [stock]);

    return {
        open, 
        close, 
        high, 
        low,
        dates, 
        loaded
    }
}

export default useStock