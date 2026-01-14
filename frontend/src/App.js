import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/home/header/Header'
import HomePages from './components/pageContent/HomePages'
import './App.css'
import Footer from './components/home/footer/Footer'
import UnderDevelopment from './components/pageContent/UnderDevelopment'
import ScrollToTop from './components/ScrollToTop'
import Divisions from './components/pageContent/Divisions'
import AboutNexaPages from './components/pageContent/AboutNexaPages'
import GrowthPages from './components/pageContent/GrowthPages'
import Impact from './components/impact/Impact'
import ExplorePages from './components/pageContent/ExplorePages'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path='/' exact component={HomePages} />
            <Route path='/about' exact component={AboutNexaPages} />
            <Route path='/divisions' exact component={Divisions} />
            <Route path='/impact' exact component={Impact} />
            <Route path='/growth' exact component={GrowthPages} />
            <Route path='/innovation' exact component={ExplorePages} />
          </Switch>
          <Footer />
        </Router>
        
      </div>
    </>
  )
}

export default App