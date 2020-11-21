import {useState, useEffect} from 'react'

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

const useStockCard = (symbol: string) => {

    const [loaded, setLoaded] = useState<null | true>(null);
    const [current, setCurrent] = useState<any>(null);


    const openExp = new RegExp(/(open":")[\d.]+"/, "g");
    const numExp = new RegExp(/[\d.]+/, "g");

    useEffect(() => {
        const getData = async (endpoint: string) => {
          await fetch(endpoint)
            .then((response: any) => response.json())
            .then(async (jsonResponse: any) => {
              let temp = JSON.stringify(jsonResponse);
              let openTemp = temp.match(openExp);
    
              let openArr = [];
              for (let i = 0; i < openTemp!.length; ++i) {
                openArr.push(openTemp![i].match(numExp));
              }
    
              setCurrent(openArr[0])
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
      }, []);


    const endpoint =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
    symbol +
    "&outputsize=compact" +
    "&apikey=" +
    apiKey;

    return {
        loaded, 
        current,
    }

}

export default useStockCard