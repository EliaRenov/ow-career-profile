import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import './index.css';
import Overview from './Overview';
import OverfastAPIContext from './OverfastAPIContext';
import Form from './OverviewComponents/Form'
import { tempData } from './tempdata';

function App() {

  let modesHrs = {
    arcadeHrs: 0,
    gamebrowserHrs: 0,
    experimentalHrs: 0
  }

  const [data, setData] = useState(tempData)
  const [platform, setPlatform] = useState('pc') 
  const [currentMode, setCurrentMode] = useState('all') 
  const [isFormOpen, setIsFormOpen] = useState(true) 
  const [username, setUsername] = useState('super-12850') 


  async function fetchData() {
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`)
      const data = await response.json()
      if (data.stats.pc) {
        setPlatform('pc')
      } else if (data.stats.console) {
        setPlatform('console')
      }
      setData(data)
    } catch (error) {
      alert('PLAYER NOT FOUND')
    }
  }

  useEffect(() => {
    fetchData()

  }, [username])

 
  return (
    <OverfastAPIContext.Provider value={{data, modesHrs, platform, currentMode, setCurrentMode, isFormOpen, setIsFormOpen, setUsername, setPlatform}}>
    <div className="container">
      {isFormOpen && <Form />}
      <Navbar />
      {data.summary.privacy === 'private' && <h1 className="private-profile">PRIVATE PROFILE</h1>}
      {data.summary.privacy === 'public' && <Overview />}
    </div>
    </OverfastAPIContext.Provider>
  )
}

export default App
