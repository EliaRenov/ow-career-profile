import { useContext } from 'react';
import OverfastAPIContext from '../OverfastAPIContext'
import DataContext from '../DataContext';
import TankLogo from '../assets/icons/overview_tank-icon.png';
import DamageLogo from '../assets/icons/overview_damage-icon.png';
import SupportLogo from '../assets/icons/overview_support-icon.png';
import Ranks from '../Ranks';
import Heroes from '../Heroes'

const CompRoleTable = () => {
    const { data, platform } = useContext(OverfastAPIContext)

    console.log(data.summary.competitive)

    let tankRank;
    let damageRank;
    let supportRank;

    let tankGamesWon = 0;
    let damageGamesWon = 0;
    let supportGamesWon = 0;

    if (data.summary.competitive) {

        const {tank, damage, support} = (data.summary.competitive[platform])
        
        tankRank = tank && tank.rank_icon
        damageRank = damage && damage.rank_icon
        supportRank = support && support.rank_icon
        

        const getRoleStats = () => {
            
            let gamesWon = data.stats[platform].competitive.heroes_comparisons.games_won.values
            
            gamesWon.forEach(item => {
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
    
    const allData = useContext(DataContext);
    const ranks = allData.rank
    const top500 = allData.top500
    
    const tankTop500Pos = top500.currentTank
    const peakTankRank = ranks.peakTank
    const peakTankTop500Pos = top500.peakTank
    
    const damageTop500Pos = top500.currentDamage
    const peakDamageRank = ranks.peakDamage
    const peakDamageTop500Pos = top500.peakDamage
    
    const supportTop500Pos = top500.currentSupport
    const peakSupportRank = ranks.peakSupport
    const peakSupportTop500Pos = top500.peakSupport
    
    } else {
    }

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
                            {tankRank ? <img className={`rank-logo ${tankRank === 'top500' && 'rank-logo-top500'}`} src={tankRank} /> : '--'} 
                            {/* {tankRank === 'top500' && <h5 className="rank-text-top500">#{tankTop500Pos}</h5>} */}
                        </li>
                        <li>
                            {tankRank ? <img className={`rank-logo ${tankRank === 'top500' && 'rank-logo-top500'}`} src={tankRank} /> : '--'} 
                            {/* {peakTankRank === 'top500' && <h5 className="rank-text-top500">#{peakTankTop500Pos}</h5>} */}
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
                            {damageRank ? <img className={`rank-logo ${damageRank === 'top500' && 'rank-logo-top500'}`} src={damageRank} /> : '--'} 
                            {/* {damageRank === 'top500' && <h5 className="rank-text-top500">#{damageTop500Pos}</h5>} */}
                        </li>
                        <li>
                            {damageRank ? <img className={`rank-logo ${damageRank === 'top500' && 'rank-logo-top500'}`} src={damageRank} /> : '--'} 
                            {/* {peakDamageRank === 'top500' && <h5 className="rank-text-top500">#{peakDamageTop500Pos}</h5>} */}
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
                            {supportRank ? <img className={`rank-logo ${supportRank === 'top500' && 'rank-logo-top500'}`} src={supportRank} /> : '--'}
                            {/* {supportRank === 'top500' && <h5 className="rank-text-top500">#{supportTop500Pos}</h5>} */}
                        </li>
                        <li>
                            {supportRank ? <img className={`rank-logo ${supportRank === 'top500' && 'rank-logo-top500'}`} src={supportRank} /> : '--'} 
                            {/* {peakSupportRank === 'top500' && <h5 className="rank-text-top500">#{peakSupportTop500Pos}</h5>} */}
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