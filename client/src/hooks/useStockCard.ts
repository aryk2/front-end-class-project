import {useState, useEffect} from 'react'

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

const useStockCard = (symbol: string, type: 'stock' | 'forex') => {

    const [loaded, setLoaded] = useState<null | true>(null);
    const [current, setCurrent] = useState<any>(null);

    const openExp = new RegExp(/(open":")[\d.]+"/, "g");
    const numExp = new RegExp(/[\d.]+/, "g");

    

    const getStockData = async () => {
      const endpoint =
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
        symbol +
        "&outputsize=compact" +
        "&apikey=" +
        apiKey;

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
        
     

  const getForexData = async () => {

    const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
    const quoteEndpoint =
      "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

    const quoteUrl =
    quoteEndpoint +
    symbol.split('-')[0] +
    "&to_currency=" +
    symbol.split('-')[1] +
    "&apikey=" +
    apiKey;

    await fetch(quoteUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {

        if(!jsonResponse?.["Realtime Currency Exchange Rate"]) {
          setLoaded(true);
          setCurrent('Error Loading Stock Data')
          console.error('error loading: ', jsonResponse)
        }

        let temp =
          jsonResponse["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        temp = Number(temp);
        temp = temp.toFixed(3);
        temp = temp.toString();
        setCurrent(temp);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (type === 'forex') { 
      if (loaded === true) {
        setLoaded(null);
        getForexData();
      } else {
        getForexData();
      }
      return
    }
    if (type === 'stock') { 
      if (loaded === true) {
        setLoaded(null);
        getStockData();
      } else {
        getStockData();
      }
    }
    
  }, []);

    return {
        loaded, 
        current,
    }

}

export default useStockCard