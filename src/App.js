import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import Services from './components/Services'
import Header from './components/Header'


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Header/>
            <HowItWorks/>
            <Aboutus/>
            
            <Services/>
            <Contact/>
          </Route>
          <Route exact path="/Home">
          <Header/>
          <HowItWorks/>
          <Aboutus/>
          
          <Services/>
          <Contact/>
          </Route>
          <Route exact  path="/PageServices">
            <Services/>
          </Route>
          <Route exact path="/About_us">
            <Aboutus/>
           
          </Route>
          <Route exact path="/Contact_us">
           <Contact/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  )
}
