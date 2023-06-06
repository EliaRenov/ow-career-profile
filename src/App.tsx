import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import './styling/index.css';
import Overview from './Overview';
import Statistics from './Statistics';
import Form from './miscComponents/Form'
import { tempData } from './data/tempdata';
import dataHandler from './data/dataHandler'
import Loading from './miscComponents/Loading';

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './ReduxToolKit/app/store';
import { setPlatform, setFirstLoadFalse } from './ReduxToolKit/features/UISlice';
import { setData } from './ReduxToolKit/features/PlayerDataSlice';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const { platform, isFirstLoad, currentTab, isFormOpen, username } = useSelector((state: RootState) => state.UI)

  const { data } = useSelector((state: RootState) => state.PlayerData)

  async function fetchData() {
    if (isFirstLoad) {
      dispatch(setData(dataHandler(tempData, 'pc')))
      dispatch(setFirstLoadFalse())
      return;
    }
    
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`)
      const data = await response.json()
      const handledData = dataHandler(data, platform)
      
      dispatch(setData(handledData))

      if (data.stats.pc) {
        dispatch(setPlatform('pc'))
      } else if (data.stats.console) {
        dispatch(setPlatform('console'))
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
    <>
    {!data && <Loading />}

    {data && <div className="container">
      {isFormOpen && <Form />}
      <Navbar />
      {data.navbar.privacy === 'private' && <h1 className="private-profile">PRIVATE PROFILE</h1>}
      {data.navbar.privacy === 'public' && currentTab === 'overview' && <Overview />}
      {data.navbar.privacy === 'public' && currentTab === 'statistics' && <Statistics />}
    </div>}
    </>
  )
}

export default App
