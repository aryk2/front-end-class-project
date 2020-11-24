import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/dashboard'
import News from './pages/news/News'
import Error from './pages/error'
import Forex from './pages/forex'
import Stock from './pages/stock'

import useSearch from './hooks/useSearch'
import useHomePage from './hooks/useHomePage';

function App() {
  const searchProps = {...useSearch()}
  const homePageProps = {...useHomePage()}

  return (
    <div className="App">
      <main>
            <Switch>
                <Route path="/" exact render={() => (
                  <Dashboard searchProps={searchProps} homePageProps={homePageProps}/>
                )}/>
                <Route path="/forex" exact render={() => (
                  <Forex searchProps={searchProps}
                  favoriteFunctions={{
                    favorites: homePageProps.favoriteItems,
                    handleAddFavorite: homePageProps.handleAddFavorite, 
                    handleRemoveFavorite: homePageProps.handleRemoveFavorite
                  }}
                  
                  />
                )}/> 
                <Route path="/stock" exact render={() => (
                  <Stock 
                    searchProps={searchProps} 
                    stock={searchProps.searchStock} 
                    favoriteFunctions={{
                      favorites: homePageProps.favoriteItems,
                      handleAddFavorite: homePageProps.handleAddFavorite, 
                      handleRemoveFavorite: homePageProps.handleRemoveFavorite
                    }}
                  />
                )}/> 
                <Route path="/news" exact render={() => (
                  <News 
                    searchProps={searchProps} 
                  />
                )}/> 


                {/* <Route path="/another-page" component={AnotherPage} /> */}
                <Route component={Error} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
