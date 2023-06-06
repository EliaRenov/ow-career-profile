import React from 'react'
import UnrankedRoleTable from './UnrankedRoleTable'
import CompRoleTable from './CompRoleTable'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';


const RoleData = () => {
    const { currentMode } = useSelector((state: RootState) => state.UI)
    return (
        <>
       {currentMode !== 'competitive' && <UnrankedRoleTable />}
       {currentMode === 'competitive' && <CompRoleTable />}
        </>
    )
}

export default RoleData