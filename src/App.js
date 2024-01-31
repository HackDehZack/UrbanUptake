import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './loginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/LoginPage' exact={true} component={LoginPage} />
        <Route path='/HeaderArea' exact={true} component={HeaderArea} />
      </Switch>
    </div>
  );
}

export default App;