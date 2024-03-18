import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import IntroPage from './components/IntroPage'

function App() {

  return (
    <div className='app-container'>
      <LandingPage />
      <IntroPage />
    </div>
 
  )
}

export default App
