import './style.less';
import React, { Component } from 'react'
import {NavLink,Switch,Route} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Foods from "./pages/Foods"
class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/home/foods/:id" component={Foods}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}


export default App;
