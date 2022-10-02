import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components imported
import LandingPage from './components/LandingPage'
import Create from './components/Create'
import Event from './components/Event';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes> 
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path ='/create' element={<Create/>}></Route> 
        <Route path ='/event' element={<Event/>}></Route> 
        
      </Routes>
      
    </Router>
  </div>
  )
}

export default App