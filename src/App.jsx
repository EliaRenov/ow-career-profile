import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
import Overview from './Overview'
import DataContext from './DataContext'


function App() {

    const [currentMode, setCurrentMode] = useState('all') 
    
    const data = { 
      rank: {
        tank: 'grandmaster1',
        damage: 'grandmaster1',
        support: 'grandmaster1',
        tankGamesWon: 526,
        damageGamesWon: 174,
        supportGamesWon: 146,
      },
      top500: {
        tank: null,
        damage: null,
        support: 242
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
            {hero: 'mei', hours: 532, role: 'damage', gamesWon: 517},
            {hero: 'genji', hours: 812, role: 'genji', gamesWon: 517},
            {hero: 'lifeweaver', hours: 313, role: 'support', gamesWon: 517},
            {hero: 'mercy', hours: 812, role: 'support', gamesWon: 517},
            {hero: 'torbjorn', hours: 532, role: 'damage', gamesWon: 517},
            {hero: 'ana', hours: 532, role: 'support', gamesWon: 517},
            {hero: 'zarya', hours: 532, role: 'tank', gamesWon: 517},
            // {hero: 'ramattra', hours: 313, role: 'tank', gamesWon: 517},
            {hero: 'junkrat', hours: 532, role: 'damage', gamesWon: 517},
            {hero: 'zenyatta', hours: 313, role: 'support', gamesWon: 517}
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
