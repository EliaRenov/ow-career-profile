import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
import Overview from './Overview'
import DataContext from './DataContext'


function App() {

    const [currentMode, setCurrentMode] = useState('all') 
    
    const data = { 
      rank: {
        tank: 'grandmaster-1',
        damage: 'bronze-1',
        support: 'gold-4'
      },
      timePlayedModesData:
          [{mode: 'competitive', hours: 3165}, {mode: 'unranked', hours: 175}, {mode: 'arcade', hours: 51}, {mode: 'gameBrowser', hours: 39}, {mode: 'experimental', hours: 28}],
      timePlayedHeroesData: 
      {
          all:
            [{hero: 'reinhardt', hours: 938, role: 'tank', gamesWon: 2583},
            {hero: 'winston', hours: 341, role: 'tank', gamesWon: 1392},
            {hero: 'reaper', hours: 482, role: 'damage', gamesWon: 823},
            {hero: 'roadhog', hours: 313, role: 'tank', gamesWon: 517},
            ],
      
          competitive:
            [{hero: 'reinhardt', hours: 832, role: 'tank', gamesWon: 1830},
            {hero: 'roadhog', hours: 300, role: 'tank', gamesWon: 1200},
            {hero: 'reaper', hours: 231, role: 'damage', gamesWon: 823},
            {hero: 'winston', hours: 276, role: 'tank', gamesWon: 474}],
            
          unranked: 
            [{hero: 'reaper', hours: 251, role: 'damage', gamesWon: 823},
            {hero: 'reinhardt', hours: 106, role: 'tank', gamesWon: 753},
            {hero: 'winston', hours: 65, role: 'tank', gamesWon: 192},
            {hero: 'roadhog', hours: 13, role: 'tank', gamesWon: 43}]
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
