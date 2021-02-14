import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";


import Web from '../Web/Web'
import Login from '../Login/Login'



const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Web" component={Web}/>           
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;