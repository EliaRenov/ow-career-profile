import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
import Overview from './Overview'


function App() {
  const timePlayedModesData = [{mode: 'competitive', hours: 3165}, {mode: 'unranked', hours: 175}, {mode: 'arcade', hours: 51}, {mode: 'gameBrowser', hours: 39}, {mode: 'experimental', hours: 28}]

  const timePlayedHeroesData = [{hero: 'reinhardt', hours: 938}, {hero: 'winston', hours: 341}, {hero: 'roadhog', hours: 313}]

 
  return (
    <>
    <div className="container">
      <Navbar />
      <Overview timePlayedModesData={timePlayedModesData} timePlayedHeroesData={timePlayedHeroesData} />
      </div>
    </>
  )
}

export default App
