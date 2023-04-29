import { useContext } from 'react'
import DataContext from '../DataContext'
import TankLogo from '../assets/icons/overview_tank-icon.png'
import DamageLogo from '../assets/icons/overview_damage-icon.png'
import SupportLogo from '../assets/icons/overview_support-icon.png'
import NonCompRoleTable from './NonCompRoleTable'


const RoleData = () => {
    const allData = useContext(DataContext)
    const mode = allData.states.current

    return (
        <>
        {mode === 'all' && <NonCompRoleTable />}
        
        </>
    )
}

export default RoleData