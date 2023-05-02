import { useContext } from 'react';
import DataContext from '../DataContext';
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';
import OverfastAPIContext from '../OverfastAPIContext'
import Heroes from '../Heroes'

const UnrankedRoleTable = () => {
    const {data, platform, currentMode} = useContext(OverfastAPIContext)

    let tankHours = 0;
    let tankGamesWon = 0;
    let damageHours = 0;
    let damageGamesWon = 0;
    let supportHours = 0;
    let supportGamesWon = 0;

    const getRoleStats = () => {

        if (currentMode === 'all') {
            let compTimePlayed = data.stats[platform].competitive.heroes_comparisons.time_played.values

            compTimePlayed.forEach(item => {
                if (Heroes.tank.includes(item.hero)) {
                    tankHours += item.value
                }
                if (Heroes.damage.includes(item.hero)) {
                    damageHours += item.value
                }
                if (Heroes.support.includes(item.hero)) {
                    supportHours += item.value
                }
            })
    
            let compGamesWon = data.stats[platform].competitive.heroes_comparisons.games_won.values
            
            compGamesWon.forEach(item => {
                if (Heroes.tank.includes(item.hero)) {
                    tankGamesWon += item.value
                }
                if (Heroes.damage.includes(item.hero)) {
                    damageGamesWon += item.value
                }
                if (Heroes.support.includes(item.hero)) {
                    supportGamesWon += item.value
                }
            })
        }

        let unrankedTimePlayed = data.stats[platform].quickplay.heroes_comparisons.time_played.values

        unrankedTimePlayed.forEach(item => {
            if (Heroes.tank.includes(item.hero)) {
                tankHours += item.value
            }
            if (Heroes.damage.includes(item.hero)) {
                damageHours += item.value
            }
            if (Heroes.support.includes(item.hero)) {
                supportHours += item.value
            }
        })

        let unrankedGamesWon = data.stats[platform].quickplay.heroes_comparisons.games_won.values
        
        unrankedGamesWon.forEach(item => {
            if (Heroes.tank.includes(item.hero)) {
                tankGamesWon += item.value
            }
            if (Heroes.damage.includes(item.hero)) {
                damageGamesWon += item.value
            }
            if (Heroes.support.includes(item.hero)) {
                supportGamesWon += item.value
            }
        })
    }

    getRoleStats()

    tankHours = Math.floor(tankHours / 3600)
    damageHours = Math.floor(damageHours / 3600)
    supportHours = Math.floor(supportHours / 3600)
    

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
                            {tankHours ? tankHours.toLocaleString() + ' HRS' : '--'}
                        </li>
                        <li>
                            {tankGamesWon ? tankGamesWon.toLocaleString() : '--'}
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
                            {damageHours ? damageHours.toLocaleString() + ' HRS' : '--'}
                        </li>
                        <li>
                            {damageGamesWon ? damageGamesWon.toLocaleString() : '--'}
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
                            {supportHours ? supportHours.toLocaleString() + ' HRS' : '--'}
                        </li>
                        <li>
                            {supportGamesWon ? supportGamesWon.toLocaleString() : '--'}
                        </li>
                    </ul>
                </li>

            </ul>
    )
}

export default UnrankedRoleTable;