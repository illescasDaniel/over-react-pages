import React, { Component } from 'react'
import './App.sass'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from "../../config/routes"

// css modules

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header/>
          <main role="main">
            <div className="d-flex flex-column">
              <Link to={Routes.links.home}>Home</Link>
              <Link to={Routes.links.about}>About</Link>
            </div>
            <Routes/>
          </main>
          <footer/>
        </div>
      </Router>
    )
  }
}

export default App
