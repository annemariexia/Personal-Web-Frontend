import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import IntroPage from './components/IntroPage'
import NavBar from './components/NavBar'


function App() {

  return (
    <div className='app-container'>
      <NavBar />
      <LandingPage />
      <IntroPage />
    </div>
 
  )
}

export default App
