import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./components/home";
import Shows from "./components/Shows";
import Show1 from "./components/show1";
import Navbar from "./components/Navbar";


import Error from "./components/Error";


  class App extends Component {
    render() {
      return (

          <BrowserRouter>
          <div>
          <Navbar />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Shows" component={Shows} />
              <Route path="/Show1" component={Show1} />
              <Route  component={Error} />
            </Switch>
            </div>
          </BrowserRouter>

      );
    }
  }

  export default App;
