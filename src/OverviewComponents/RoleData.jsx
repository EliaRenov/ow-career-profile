import { useContext } from 'react'
import DataContext from '../DataContext'
import UnrankedRoleTable from './UnrankedRoleTable'
import CompRoleTable from './CompRoleTable'


const RoleData = () => {
    const allData = useContext(DataContext)
    const mode = allData.states.current

    return (
        <>
       {mode !== 'competitive' && <UnrankedRoleTable />}
       {mode === 'competitive' && <CompRoleTable />}
        </>
    )
}

export default RoleData