import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="Back">
      <div className="App">
        <nav className="nav-div">
          <ul className="nav-cont">
              <li className="nav-li">
                  <Link to='/'>Home</Link>
              </li>
              <li className="nav-li">
                  <Link to='/about'>About</Link>
              </li>
              <li className="nav-li">
                  <Link to='/portfolio'>Portfolio</Link>
              </li>
              <li className="nav-li">
                  <Link to='/contact'>Contact</Link>
              </li>
          </ul>
        </nav>  
        <div className="Body">
          <Switch>
              <Route path='/about'>
                  <About />
              </Route>
              <Route path='/portfolio'>
                  <Portfolio />
              </Route>
              <Route path='/contact'>
                  <Contact />
              </Route>
              <Route path='/'>
                  <Home />
              </Route>
          </Switch>  
        </div>        
      </div>
      </div>
    </Router>
  )
}

export default App