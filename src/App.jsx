import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
import Overview from './Overview'


function App() {
  const timePlayedData = [{mode: 'competitive', hours: 3165}, {mode: 'unranked', hours: 175}, {mode: 'arcade', hours: 51}, {mode: 'gameBrowser', hours: 39}, {mode: 'experimental', hours: 28}]
 
  return (
    <>
    <div className="container">
      <Navbar></Navbar>
      <Overview timePlayedData={timePlayedData} />
      </div>
    </>
  )
}

export default App
