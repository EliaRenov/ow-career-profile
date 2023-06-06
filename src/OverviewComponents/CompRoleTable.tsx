import React from 'react'
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';
    
    
    const CompRoleTable = () => {
    const { data } = useSelector((state: RootState) => state.PlayerData)

    const tankRank = data.roleRank.tank;
    const damageRank = data.roleRank.damage;
    const supportRank = data.roleRank.support;

    const tankGamesWon = data.roleGamesWon.competitive.tank;
    const damageGamesWon = data.roleGamesWon.competitive.damage;
    const supportGamesWon = data.roleGamesWon.competitive.support;


    return (
        <ul className="overview__current-mode_ranked">
                <li className='role-data cell'>
                    <ul className="role-cell-layout">
                        <li>
                            ROLE
                        </li>
                        <li>
                            CURRENT
                        </li>
                        <li>
                            SEASON HIGH
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
                            {tankRank ? <img className={`rank-logo`} src={tankRank} /> : '--'} 

                            
                        </li>
                        <li>
                            {tankRank ? <img className={`rank-logo`} src={tankRank} /> : '--'} 

                            
                        </li>
                        <li>
                            {tankGamesWon}
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
                            {damageRank ? <img className={`rank-logo`} src={damageRank} /> : '--'} 
                        </li>
                        <li>
                            {damageRank ? <img className={`rank-logo`} src={damageRank} /> : '--'} 
                        </li>
                        <li>
                            {damageGamesWon}
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
                        {supportRank ? <img className={`rank-logo`} src={supportRank} /> : '--'} 
                            
                        </li>
                        <li>
                            {supportRank ? <img className={`rank-logo`} src={supportRank} /> : '--'} 
                            
                        </li>
                        <li>
                            {supportGamesWon}
                        </li>
                    </ul>
                </li>

            </ul>
    )

}

export default CompRoleTable