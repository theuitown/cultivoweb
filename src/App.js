import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/Home';
import Contact from './views/Contact';
import Ourteam from './views/team';
import About from './views/about';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/ourteam" exact component={Ourteam}/>
      <Route path="/aboutus" exact component={About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
