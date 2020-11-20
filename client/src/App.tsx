import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/dashboard'
// todo pick a better name
import Graphs from './pages/other-graphs/Graphs'
import Error from './pages/error'
import Forex from './pages/forex'
import Stock from './pages/stock'

import useSearch from './hooks/useSearch'

function App() {
  const searchProps = {...useSearch()}

  return (
    <div className="App">
      <main>
            <Switch>
                <Route path="/" exact render={() => (
                  <Dashboard searchProps={searchProps}/>
                )}/>
                <Route path="/forex" exact render={() => (
                  <Forex searchProps={searchProps}/>
                )}/> 
                <Route path="/stock" exact render={() => (
                  <Stock searchProps={searchProps} stock={searchProps.searchStock}/>
                )}/> 


                {/* <Route path="/another-page" component={AnotherPage} /> */}
                <Route component={Error} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
