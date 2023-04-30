import { useContext } from 'react';
import DataContext from '../DataContext';
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';

const UnrankedRoleTable = () => {
    const allData = useContext(DataContext);
    const mode = allData.states.current;

    const getRoleStats = (role, data) => {
        return allData.timePlayedHeroesData[mode].reduce((total, hero) => {
            if (hero.role === role) return total + hero[data];
            return total
        }, 0)
    }

    const tankHours = getRoleStats('tank', 'hours');
    const tankGamesWon = getRoleStats('tank', 'gamesWon');
    const damageHours = getRoleStats('damage', 'hours');
    const damageGamesWon = getRoleStats('damage', 'gamesWon');
    const supportHours = getRoleStats('support', 'hours');
    const supportGamesWon = getRoleStats('support', 'gamesWon');

    return (
        <ul className="overview__current-mode_unranked">
                <li className='role-data cell'>
                    <ul className="role-cell-layout">
                        <li>
                            ROLE
                        </li>
                        <li>
                            TIME PLAYED
                        </li>
                        <li>
                            GAMES WON
                        </li>
                    </ul>
                    
                </li>
                <li className='role-data role-cell'>
                    <ul className="role-cell-layout">
                        <li>
                        <img className="role-logo" src={TankLogo} alt="" />
                            TANK
                        </li>
                        <li>
                            {tankHours ? tankHours + ' HRS' : '--'}
                        </li>
                        <li>
                            {tankGamesWon ? tankGamesWon : '--'}
                        </li>
                    </ul>
                </li>
                <li className='role-data role-cell'>
                <ul className="role-cell-layout">
                        <li>
                        <img className="role-logo" src={DamageLogo} alt="" />
                            DAMAGE
                        </li>
                        <li>
                            {damageHours ? damageHours + ' HRS' : '--'}
                        </li>
                        <li>
                            {damageGamesWon ? damageGamesWon : '--'}
                        </li>
                    </ul>
                </li>
                <li className='role-data role-cell'>
                <ul className="role-cell-layout">
                        <li>
                        <img className="role-logo" src={SupportLogo} alt="" />
                            SUPPORT
                        </li>
                        <li>
                            {supportHours ? supportHours : '--'}
                        </li>
                        <li>
                            {supportGamesWon ? supportGamesWon + ' HRS' : '--'}
                        </li>
                    </ul>
                </li>

            </ul>
    )
}

export default UnrankedRoleTable;