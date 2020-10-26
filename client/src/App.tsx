import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/dashboard'
import Error from './pages/error'

function App() {
  return (
    <div className="App">
      <main>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                {/* <Route path="/another-page" component={AnotherPage} /> */}
                <Route component={Error} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
