import {useState, useEffect} from 'react'
import {newsResponse, NewsStory, module} from '../models/newsArticle'

const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const newsCall =
  "https://finnhub.io/api/v1/news?category=general&token=" + apiKey;

const newsCall2 = 
  "https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=markets"

const useNewsStories = () => {
    const [isLoaded, setLoaded] = useState(false);
    const [amntLoaded, setAmntLoaded] = useState(0);
    const [stories, setStories] = useState<NewsStory[]>([]);


    const getData = async () => {
        console.log('gettingNewsStories')
        await fetch(newsCall2, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": String(process.env.REACT_APP_BLOOMBERG_KEY),
                "x-rapidapi-host": String(process.env.REACT_APP_BLOOMBERG_HOST)
            }
        })
          .then((response) => response.json())
          .then((jsonResponse: newsResponse) => {
            const loadedNewsSources: NewsStory[] = []
            jsonResponse.modules.forEach((module) => {
                module.stories.forEach((story) => {
                    loadedNewsSources.push({
                        date: new Date(story.published),
                        headline: story.title,
                        link: story.longURL,
                    })
                })
            })
            console.log(loadedNewsSources)
            setStories(loadedNewsSources)
            setLoaded(true);
            setAmntLoaded(loadedNewsSources.length)
            
          })
          .catch((error: any) => {
            console.error(error);
          });
      };

      useEffect(() => {
        getData()
      }, []);


      return {
        isLoaded, 
        stories, 
        amntLoaded,
        getData
      }
}

export default useNewsStories