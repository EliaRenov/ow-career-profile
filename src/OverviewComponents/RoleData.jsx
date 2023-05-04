import { useContext } from 'react'
import OverfastAPIContext from '../OverfastAPIContext'
import UnrankedRoleTable from './UnrankedRoleTable'
import CompRoleTable from './CompRoleTable'


const RoleData = () => {
    const { currentMode } = useContext(OverfastAPIContext)
    return (
        <>
       {currentMode !== 'competitive' && <UnrankedRoleTable />}
       {currentMode === 'competitive' && <CompRoleTable />}
        </>
    )
}

export default RoleData