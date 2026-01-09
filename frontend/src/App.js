import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/home/header/Header'
import HomePages from './components/pageContent/HomePages'
import './App.css'
import Footer from './components/home/footer/Footer'
import UnderDevelopment from './components/pageContent/UnderDevelopment'
import ScrollToTop from './components/ScrollToTop'
import Divisions from './components/pageContent/Divisions'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path='/' exact component={HomePages} />
            <Route path='/about' exact component={UnderDevelopment} />
            <Route path='/divisions' exact component={Divisions} />
            <Route path='/impact' exact component={UnderDevelopment} />
            <Route path='/growth' exact component={UnderDevelopment} />
            <Route path='/explore' exact component={UnderDevelopment} />
          </Switch>
          <Footer />
        </Router>
        
      </div>
    </>
  )
}

export default App