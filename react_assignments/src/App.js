import React from 'react';
import { Route, Switch,BrowserRouter as Router } from "react-router-dom";
import './App.css';
// import TestCounter from './components/HooksCOunter2'
// import AddTable from './components/addtest'
import AddWsr from './components/addNewWSR'
import GetList from './components/GetWsrlist'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={GetList} />          
        {/* <Route path="/add-risk" component={AddRisk} /> */}
        {/* <Route path="/add-test" component={AddTable} /> */}

        <Route path="/add-wsr" component={AddWsr}/>
        {/* <Route path="/counter" component={TestCounter} /> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
