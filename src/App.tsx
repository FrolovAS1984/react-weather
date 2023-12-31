import React from 'react';

import {Home} from './pages/Home/Home';
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./pages/shared/Header/Header";

import { Route, Switch } from "react-router";




function App() {
  return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/month-statistics" exact component={MonthStatistics}/>
        </Switch>
      </div>
  );

}

export default App;
