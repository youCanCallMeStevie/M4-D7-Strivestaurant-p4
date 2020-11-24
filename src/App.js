import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Reservations from './components/Reservations'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" />
          <Route path="/" exact component={Home} />
          <Route path="/reservation" exact component={Reservations} />
        </Router>
      </>
    )
  }
}

export default App
