import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


import App from './App'

const Root = () => {
    return (
        <Router>
            {/* <Navbar/> */}
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
        </Router>
    )
}
    



export default Root