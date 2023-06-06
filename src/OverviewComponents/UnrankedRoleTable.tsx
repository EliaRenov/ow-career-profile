import React from 'react'
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';


const UnrankedRoleTable = () => {
    const { currentMode } = useSelector((state: RootState) => state.UI)
    const { data } = useSelector((state: RootState) => state.PlayerData)


    const tankHours = data.roleHours[currentMode].tank;
    const tankGamesWon = data.roleGamesWon[currentMode].tank;
    const damageHours = data.roleHours[currentMode].damage;
    const damageGamesWon = data.roleGamesWon[currentMode].damage;
    const supportHours = data.roleHours[currentMode].support;
    const supportGamesWon = data.roleGamesWon[currentMode].support;

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