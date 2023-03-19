import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './pages/landingpage';
import PrivateRoutes from './utils/privateRoutes/privateRoutes';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={< Landingpage/>}/>
        <Route path='/home' element={< Landingpage/>}/>
        <Route path='/about' element={< Landingpage/>}/>
        <Route path='/portfolio' element={< Landingpage/>}/>
        <Route path='/contact' element={< Landingpage/>}/>
      </Routes>
    </>
  )
}

export default App
