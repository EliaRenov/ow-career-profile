import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import './index.css';
import Overview from './Overview';
import DataContext from './DataContext';
import OverfastAPIContext from './OverfastAPIContext';
import Form from './OverviewComponents/Form'
import { tempData } from './tempdata';

function App() {

  let modesHrs = {
    arcadeHrs: 33,
    gamebrowserHrs: 22,
    experimentalHrs: 15
  }

  const [platform, setPlatform] = useState('pc') 
  const [currentMode, setCurrentMode] = useState('all') 
  const [isFormOpen, setIsFormOpen] = useState(false) 

  const [data, setData] = useState(tempData)

  

  let oldData = { 
    name: 'SUPER',
    title: 'TITAN',
    rank: {
      currentTank: 'grandmaster1',
      currentDamage: 'grandmaster1',
      currentSupport: 'grandmaster1',
      peakTank: 'top500',
      peakDamage: 'top500',
      peakSupport: 'top500',
      tankGamesWon: 526,
      damageGamesWon: 174,
      supportGamesWon: 146,
    },
    top500: {
      currentTank: null,
      currentDamage: null,
      currentSupport: 242,
      peakTank: 23,
      peakDamage: 52,
      peakSupport: 221
    },
    timePlayedModesData:
        [{mode: 'competitive', hours: 3165}, {mode: 'unranked', hours: 175}, {mode: 'arcade', hours: 51}, {mode: 'gameBrowser', hours: 39}, {mode: 'experimental', hours: 28}],
    timePlayedHeroesData: 
    {
        all:
          [{hero: 'reinhardt', hours: 938, role: 'tank', gamesWon: 2720},
          {hero: 'winston', hours: 341, role: 'tank', gamesWon: 873},
          {hero: 'roadhog', hours: 313, role: 'tank', gamesWon: 895},
          {hero: 'orisa', hours: 236, role: 'tank', gamesWon: 655},
          {hero: 'sigma', hours: 212, role: 'tank', gamesWon: 591},
          {hero: 'wreckingball', hours: 192, role: 'tank', gamesWon: 484},
          {hero: 'zarya', hours: 141, role: 'tank', gamesWon: 394},
          {hero: 'genji', hours: 118, role: 'damage', gamesWon: 328},
          {hero: 'cassidy', hours: 112, role: 'damage', gamesWon: 321},
          {hero: 'dva', hours: 91, role: 'tank', gamesWon: 258},
          {hero: 'hanzo', hours: 81, role: 'damage', gamesWon: 232},
          {hero: 'ana', hours: 68, role: 'support', gamesWon: 168},
          {hero: 'tracer', hours: 68, role: 'damage', gamesWon: 188},
          {hero: 'lucio', hours: 60, role: 'support', gamesWon: 207},
          {hero: 'soldier76', hours: 57, role: 'damage', gamesWon: 144},
          {hero: 'doomfist', hours: 45, role: 'tank', gamesWon: 127},
          {hero: 'sojourn', hours: 43, role: 'damage', gamesWon: 121},
          {hero: 'zenyatta', hours: 41, role: 'support', gamesWon: 118},
          {hero: 'widowmaker', hours: 29, role: 'damage', gamesWon: 73},
          {hero: 'reaper', hours: 29, role: 'damage', gamesWon: 87},
          {hero: 'junkerqueen', hours: 26, role: 'tank', gamesWon: 73},
          {hero: 'ashe', hours: 25, role: 'damage', gamesWon: 63},
          {hero: 'mei', hours: 22, role: 'damage', gamesWon: 56},
          {hero: 'junkrat', hours: 22, role: 'damage', gamesWon: 69},
          {hero: 'pharah', hours: 20, role: 'damage', gamesWon: 65},
          {hero: 'brigitte', hours: 17, role: 'support', gamesWon: 49},
          {hero: 'mercy', hours: 12, role: 'support', gamesWon: 39},
          {hero: 'torbjorn', hours: 10, role: 'damage', gamesWon: 33},
          {hero: 'baptiste', hours: 8, role: 'support', gamesWon: 23},
          {hero: 'ramatrra', hours: 7, role: 'tank', gamesWon: 22},
          {hero: 'kiriko', hours: 6, role: 'support', gamesWon: 21},
          {hero: 'symmetra', hours: 5, role: 'damage', gamesWon: 16},
          {hero: 'bastion', hours: 5, role: 'damage', gamesWon: 15},
          {hero: 'moira', hours: 5, role: 'support', gamesWon: 13},
          {hero: 'sombra', hours: 5, role: 'damage', gamesWon: 9},
          {hero: 'echo', hours: 2, role: 'damage', gamesWon: 4},
          {hero: 'lifeweaver', hours: 1, role: 'support', gamesWon: 3}],
    
        competitive:
        [{hero: 'reinhardt', hours: 938, role: 'tank', gamesWon: 2720},
        {hero: 'winston', hours: 341, role: 'tank', gamesWon: 873},
        {hero: 'roadhog', hours: 313, role: 'tank', gamesWon: 895},
        {hero: 'orisa', hours: 236, role: 'tank', gamesWon: 655},
        {hero: 'sigma', hours: 313, role: 'tank', gamesWon: 591},
        {hero: 'wreckingball', hours: 192, role: 'tank', gamesWon: 484},
        {hero: 'zarya', hours: 141, role: 'tank', gamesWon: 394},
        {hero: 'genji', hours: 118, role: 'damage', gamesWon: 328},
        {hero: 'cassidy', hours: 112, role: 'damage', gamesWon: 321},
        {hero: 'dva', hours: 91, role: 'tank', gamesWon: 258},
        {hero: 'hanzo', hours: 81, role: 'damage', gamesWon: 232},
        {hero: 'ana', hours: 68, role: 'support', gamesWon: 168},
        {hero: 'tracer', hours: 68, role: 'damage', gamesWon: 188},
        {hero: 'lucio', hours: 60, role: 'support', gamesWon: 207},
        {hero: 'soldier76', hours: 57, role: 'damage', gamesWon: 144},
        {hero: 'doomfist', hours: 45, role: 'tank', gamesWon: 127},
        {hero: 'sojourn', hours: 43, role: 'damage', gamesWon: 121},
        {hero: 'zenyatta', hours: 41, role: 'support', gamesWon: 118},
        {hero: 'widowmaker', hours: 29, role: 'damage', gamesWon: 73},
        {hero: 'reaper', hours: 29, role: 'damage', gamesWon: 87},
        {hero: 'junkerqueen', hours: 26, role: 'tank', gamesWon: 73},
        {hero: 'ashe', hours: 25, role: 'damage', gamesWon: 63},
        {hero: 'mei', hours: 22, role: 'damage', gamesWon: 56},
        {hero: 'junkrat', hours: 22, role: 'damage', gamesWon: 69},
        {hero: 'pharah', hours: 20, role: 'damage', gamesWon: 65},
        {hero: 'brigitte', hours: 17, role: 'support', gamesWon: 49},
        {hero: 'mercy', hours: 12, role: 'support', gamesWon: 39},
        {hero: 'torbjorn', hours: 10, role: 'damage', gamesWon: 33},
        {hero: 'baptiste', hours: 8, role: 'support', gamesWon: 23},
        {hero: 'ramatrra', hours: 7, role: 'tank', gamesWon: 22},
        {hero: 'kiriko', hours: 6, role: 'support', gamesWon: 21},
        {hero: 'symmetra', hours: 5, role: 'damage', gamesWon: 16},
        {hero: 'bastion', hours: 5, role: 'damage', gamesWon: 15},
        {hero: 'moira', hours: 5, role: 'support', gamesWon: 13},
        {hero: 'sombra', hours: 5, role: 'damage', gamesWon: 9},
        {hero: 'echo', hours: 2, role: 'damage', gamesWon: 4},
        {hero: 'lifeweaver', hours: 1, role: 'support', gamesWon: 3}
      ],
          
        unranked: 
        [{hero: 'reinhardt', hours: 938, role: 'tank', gamesWon: 2720},
        {hero: 'winston', hours: 341, role: 'tank', gamesWon: 873},
        {hero: 'roadhog', hours: 313, role: 'tank', gamesWon: 895},
        {hero: 'orisa', hours: 236, role: 'tank', gamesWon: 655},
        {hero: 'sigma', hours: 313, role: 'tank', gamesWon: 591},
        {hero: 'wreckingball', hours: 192, role: 'tank', gamesWon: 484},
        {hero: 'zarya', hours: 141, role: 'tank', gamesWon: 394},
        {hero: 'genji', hours: 118, role: 'damage', gamesWon: 328},
        {hero: 'cassidy', hours: 112, role: 'damage', gamesWon: 321},
        {hero: 'dva', hours: 91, role: 'tank', gamesWon: 258},
        {hero: 'hanzo', hours: 81, role: 'damage', gamesWon: 232},
        {hero: 'ana', hours: 68, role: 'support', gamesWon: 168},
        {hero: 'tracer', hours: 68, role: 'damage', gamesWon: 188},
        {hero: 'lucio', hours: 60, role: 'support', gamesWon: 207},
        {hero: 'soldier76', hours: 57, role: 'damage', gamesWon: 144},
        {hero: 'doomfist', hours: 45, role: 'tank', gamesWon: 127},
        {hero: 'sojourn', hours: 43, role: 'damage', gamesWon: 121},
        {hero: 'zenyatta', hours: 41, role: 'support', gamesWon: 118},
        {hero: 'widowmaker', hours: 29, role: 'damage', gamesWon: 73},
        {hero: 'reaper', hours: 29, role: 'damage', gamesWon: 87},
        {hero: 'junkerqueen', hours: 26, role: 'tank', gamesWon: 73},
        {hero: 'ashe', hours: 25, role: 'damage', gamesWon: 63},
        {hero: 'mei', hours: 22, role: 'damage', gamesWon: 56},
        {hero: 'junkrat', hours: 22, role: 'damage', gamesWon: 69},
        {hero: 'pharah', hours: 20, role: 'damage', gamesWon: 65},
        {hero: 'brigitte', hours: 17, role: 'support', gamesWon: 49},
        {hero: 'mercy', hours: 12, role: 'support', gamesWon: 39},
        {hero: 'torbjorn', hours: 10, role: 'damage', gamesWon: 33},
        {hero: 'baptiste', hours: 8, role: 'support', gamesWon: 23},
        {hero: 'ramatrra', hours: 7, role: 'tank', gamesWon: 22},
        {hero: 'kiriko', hours: 6, role: 'support', gamesWon: 21},
        {hero: 'symmetra', hours: 5, role: 'damage', gamesWon: 16},
        {hero: 'bastion', hours: 5, role: 'damage', gamesWon: 15},
        {hero: 'moira', hours: 5, role: 'support', gamesWon: 13},
        {hero: 'sombra', hours: 5, role: 'damage', gamesWon: 9},
        {hero: 'echo', hours: 2, role: 'damage', gamesWon: 4},
        {hero: 'lifeweaver', hours: 1, role: 'support', gamesWon: 3}]
      },
    states: {
      current: currentMode,
      setCurrent: setCurrentMode,
      isFormOpen,
      setIsFormOpen
    }
}
// 
  async function fetchData() {
    const response = await fetch('https://overfast-api.tekrop.fr/players/Cat-1188')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

 
  return (
    <OverfastAPIContext.Provider value={{data, modesHrs, platform, currentMode, setCurrentMode}}>
    <DataContext.Provider value={oldData}>
    <div className="container">
      {isFormOpen && <Form />}
      <Navbar />
      {data.summary.privacy === 'private' && <h1 className="private-profile">PRIVATE PROFILE</h1>}
      {data.summary.privacy === 'public' && <Overview />}
    </div>
    </DataContext.Provider>
    </OverfastAPIContext.Provider>
  )
}

export default App
