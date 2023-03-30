import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './pages/landingpage';
import PrivateRoutes from './assets/privateRoutes';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={< Landingpage viewPage={null}/>}/>
        <Route path='/home' element={< Landingpage viewPage={null}/>}/>
        <Route path='/about' element={< Landingpage viewPage="about"/>}/>
        <Route path='/portfolio' element={< Landingpage viewPage="portfolio"/>}/>
        <Route path='/contact' element={< Landingpage viewPage="contact"/>}/>
      </Routes>
    </>
  )
}

export default App
