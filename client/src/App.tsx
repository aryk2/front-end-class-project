import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/dashboard'
// todo pick a better name
import Graphs from './pages/other-graphs/Graphs'
import Error from './pages/error'
import Forex from './pages/forex'
import Stock from './pages/stock'


function App() {
  return (
    <div className="App">
      <main>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/other-graphs" component={Graphs} exact /> 
                <Route path="/forex" component={Forex} exact /> 
                <Route path="/stock" component={Stock} exact /> 


                {/* <Route path="/another-page" component={AnotherPage} /> */}
                <Route component={Error} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
