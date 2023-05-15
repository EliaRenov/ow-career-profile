import OverfastAPIContext from './OverfastAPIContext';
import { useContext, useState } from 'react';
import './Statistics.css';

import AssistsIcon from './assets/icons/statistics_assists_icon.png'
import EliminationsIcon from './assets/icons/statistics_eliminations_icon.png'
import GamesPlayedIcon from './assets/icons/statistics_games_played_icon.png'
import GamesWonIcon from './assets/icons/statistics_games_won_icon.png'
import KillstreakIcon from './assets/icons/statistics_kill_streak_best_icon.png'
import TimePlayedIcon from './assets/icons/statistics_time_played_icon.png'

import Heroes from './Heroes';
import SelectHeroMenu from './StatisticsComponents/SelectHeroMenu';


const Statistics = () => {
    const {data, platform, currentHero, setCurrentHero, currentMode} = useContext(OverfastAPIContext);

    const [selectHeroOpen, setSelectHeroOpen] = useState(false)
    
    return (
        <main className="statistics">
            {selectHeroOpen && <SelectHeroMenu setSelectHeroOpen={setSelectHeroOpen} setCurrentHero={setCurrentHero} />}

            <section className="hero-select">
                <img className="hero-logo" src={Heroes[currentHero].logo} alt="" />
                <button className="change-hero-btn" onClick={() => setSelectHeroOpen(true)} >CHANGE HERO</button>
            </section>

            <section className="main-stats" >
                <div className="main-stats-card">
                    <img className="card-logo" src={TimePlayedIcon} alt="" />
                    <h3 className="card-value" >Value HRS</h3>
                    <h4 className="card-desc">TIME PLAYED</h4>
                </div>
                <div className="main-stats-card">
                    <img className="card-logo" src={GamesPlayedIcon} alt="" />
                    <h3 className="card-value" >Value</h3>
                    <h4 className="card-desc">GAMES PLAYED</h4>
                </div>
                <div className="main-stats-card">
                    <img className="card-logo" src={GamesWonIcon} alt="" />
                    <h3 className="card-value" >Value</h3>
                    <h4 className="card-desc">GAMES WON</h4>
                </div>
                <div className="main-stats-card">
                    <img className="card-logo" src={EliminationsIcon} alt="" />
                    <h3 className="card-value" >Value</h3>
                    <h4 className="card-desc">ELIMINATIONS</h4>
                </div>
                <div className="main-stats-card">
                    <img className="card-logo" src={AssistsIcon} alt="" />
                    <h3 className="card-value" >Value</h3>
                    <h4 className="card-desc">ASSISTS</h4>
                </div>
                <div className="main-stats-card">
                    <img className="card-logo" src={KillstreakIcon} alt="" />
                    <h3 className="card-value" >Value</h3>
                    <h4 className="card-desc">KILL STREAK - BEST</h4>
                </div>
            </section>
        </main>
    )
}

export default Statistics;