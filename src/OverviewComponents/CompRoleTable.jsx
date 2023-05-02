import { useContext } from 'react';
import DataContext from '../DataContext';
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';
import Ranks from '../Ranks';

const CompRoleTable = () => {
    const allData = useContext(DataContext);
    const ranks = allData.rank
    const top500 = allData.top500

    const tankRank = ranks.currentTank
    const tankTop500Pos = top500.currentTank
    const peakTankRank = ranks.peakTank
    const peakTankTop500Pos = top500.peakTank

    const damageRank = ranks.currentDamage
    const damageTop500Pos = top500.currentDamage
    const peakDamageRank = ranks.peakDamage
    const peakDamageTop500Pos = top500.peakDamage

    const supportRank = ranks.currentSupport
    const supportTop500Pos = top500.currentSupport
    const peakSupportRank = ranks.peakSupport
    const peakSupportTop500Pos = top500.peakSupport

    const tankGamesWon = ranks.tankGamesWon
    const damageGamesWon = ranks.damageGamesWon
    const supportGamesWon = ranks.supportGamesWon

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
                            {tankRank === 'top500' && <h5 className="rank-text-top500">#{tankTop500Pos}</h5>}
                        </li>
                        <li>
                            {peakTankRank ? <img className={`rank-logo ${peakTankRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[peakTankRank]} /> : '--'} 
                            {peakTankRank === 'top500' && <h5 className="rank-text-top500">#{peakTankTop500Pos}</h5>}
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
                            {peakDamageRank ? <img className={`rank-logo ${peakDamageRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[peakDamageRank]} /> : '--'} 
                            {peakDamageRank === 'top500' && <h5 className="rank-text-top500">#{peakDamageTop500Pos}</h5>}
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
                            {peakSupportRank ? <img className={`rank-logo ${peakSupportRank === 'top500' && 'rank-logo-top500'}`} src={Ranks[peakSupportRank]} /> : '--'} 
                            {peakSupportRank === 'top500' && <h5 className="rank-text-top500">#{peakSupportTop500Pos}</h5>}
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