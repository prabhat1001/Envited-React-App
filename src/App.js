import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LandingPage from './components/LandingPage'
import Create from './components/Create'

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes> 
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path ='/create' element={<Create/>}></Route> 
        
      </Routes>
      
    </Router>
  </div>
  )
}

export default App