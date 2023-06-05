import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import './index.css';
import Overview from './Overview';
import Statistics from './Statistics';
import OverfastAPIContext from './OverfastAPIContext';
import Form from './OverviewComponents/Form'
import { tempData } from './tempdata';
import dataHandler from './dataHandler'
import Loading from './Loading';


function App() {

  let modesHrs = {
    arcadeHrs: 0,
    gamebrowserHrs: 0,
    experimentalHrs: 0
  }

  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [data, setData] = useState<any>(undefined)
  const [platform, setPlatform] = useState('pc') 
  const [currentMode, setCurrentMode] = useState('all') 
  const [isFormOpen, setIsFormOpen] = useState(false) 
  const [username, setUsername] = useState('super-12850') 
  const [currentTab, setCurrentTab] = useState('overview')
  const [currentHero, setCurrentHero] = useState('all-heroes')
  const [stat, setStat] = useState('time_played')


  async function fetchData() {
    if (isFirstLoad) {
      setData(dataHandler(tempData, 'pc'))
      setIsFirstLoad(false)
      return;
    }

    
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`)
      const data = await response.json()
      const handledData = dataHandler(data, platform)
      
      setData(handledData)

      if (data.stats.pc) {
        setPlatform('pc')
      } else if (data.stats.console) {
        setPlatform('console')
      }

    } catch (error) {
      console.log(error)
      alert('PLAYER NOT FOUND')
    }
  }

  useEffect(() => {
    fetchData()

  }, [username])

 
  return (
    <OverfastAPIContext.Provider value={{data, modesHrs, currentMode, setCurrentMode, isFormOpen, setIsFormOpen, setUsername, platform,setPlatform, currentTab, setCurrentTab, currentHero, setCurrentHero, stat, setStat}}>

    {!data && <Loading />}
    {data && <div className="container">
      {isFormOpen && <Form />}
      <Navbar />
      {data.navbar.privacy === 'private' && <h1 className="private-profile">PRIVATE PROFILE</h1>}
      {data.navbar.privacy === 'public' && currentTab === 'overview' && <Overview />}
      {data.navbar.privacy === 'public' && currentTab === 'statistics' && <Statistics />}
    </div>}
    </OverfastAPIContext.Provider>
  )
}

export default App
