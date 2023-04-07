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
        <Route path='/' element={< Landingpage viewPage='home'/>}/>
        <Route path='/home' element={< Landingpage viewPage='home'/>}/>
        <Route path='/about' element={< Landingpage viewPage='about'/>}/>
        <Route path='/project' element={< Landingpage viewPage='project' />}/>
        <Route path='/contact' element={< Landingpage viewPage='contact' />}/>
        <Route path='/*' element={< Landingpage viewPage="404"/>}/>
      </Routes>
    </>
  )
}

export default App
