import { useContext } from 'react';
import DataContext from '../DataContext';
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';
import Ranks from '../Ranks';

const CompRoleTable = () => {
    const allData = useContext(DataContext);
    const tankRank = allData.rank.tank
    const tankGamesWon = allData.rank.tankGamesWon
    const damageRank = allData.rank.damage
    const damageGamesWon = allData.rank.damageGamesWon
    const supportRank = allData.rank.support
    const supportGamesWon = allData.rank.supportGamesWon
    const tankTop500Pos = allData.top500.tank
    const damageTop500Pos = allData.top500.damage
    const supportTop500Pos = allData.top500.support

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
                            {tankRank ? <img className={`rank-logo ${tankRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[tankRank]} /> : '--'} 
                            {tankRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>}
                        </li>
                        <li>
                            {tankRank ? <img className={`rank-logo ${tankRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[tankRank]} /> : '--'} 
                            {tankRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>}
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
                            {damageRank ? <img className={`rank-logo ${damageRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[damageRank]} /> : '--'} 
                            {damageRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>}
                        </li>
                        <li>
                            {damageRank ? <img className={`rank-logo ${damageRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[damageRank]} /> : '--'}
                            {damageRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>}
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
                            {supportRank ? <img className={`rank-logo ${supportRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[supportRank]} /> : '--'}
                            {supportRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>}
                        </li>
                        <li>
                            {supportRank ? <img className={`rank-logo ${supportRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[supportRank]} /> : '--'}
                            {supportRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>}
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