import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
import Overview from './Overview'
import DataContext from './DataContext'


function App() {
  const timePlayedModesData = 
    [{mode: 'competitive', hours: 3165},
    {mode: 'unranked', hours: 175},
    {mode: 'arcade', hours: 51},
    {mode: 'gameBrowser', hours: 39},
    {mode: 'experimental', hours: 28}];

    const [currentMode, setCurrentMode] = useState('all') 
    
    const data = { 
      timePlayedModesData:
          [{mode: 'competitive', hours: 3165}, {mode: 'unranked', hours: 175}, {mode: 'arcade', hours: 51}, {mode: 'gameBrowser', hours: 39}, {mode: 'experimental', hours: 28}],
      timePlayedHeroesData: 
      {
          all:
            [{hero: 'reinhardt', hours: 938},
            {hero: 'winston', hours: 341},
            {hero: 'roadhog', hours: 313}],
      
          competitive:
            [{hero: 'reinhardt', hours: 832},
            {hero: 'roadhog', hours: 300},
            {hero: 'winston', hours: 276}],
            
          quickplay: 
            [{hero: 'reinhardt', hours: 106},
            {hero: 'winston', hours: 65},
            {hero: 'roadhog', hours: 13}]
          
        },
      states: {
        current: currentMode,
        setCurrent: setCurrentMode
      }
  }


 
  return (
    <DataContext.Provider value={data}>
    <div className="container">
      <Navbar />
      <Overview />
    </div>
    </DataContext.Provider>
  )
}

export default App
