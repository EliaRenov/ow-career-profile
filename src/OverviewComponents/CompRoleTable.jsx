import { useContext } from 'react';
import DataContext from '../DataContext';
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';

const CompRoleTable = () => {
    const allData = useContext(DataContext);
    const tankRank = allData.rank.tank
    const damageRank = allData.rank.damage
    const supportRank = allData.rank.support

}

export default CompRoleTable