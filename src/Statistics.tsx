import { useState } from 'react';
import './styling/StatisticsStyling/Statistics.css'


import AssistsIcon from './assets/icons/statistics_assists_icon.png'
import EliminationsIcon from './assets/icons/statistics_eliminations_icon.png'
import GamesPlayedIcon from './assets/icons/statistics_games_played_icon.png'
import GamesWonIcon from './assets/icons/statistics_games_won_icon.png'
import KillstreakIcon from './assets/icons/statistics_kill_streak_best_icon.png'
import TimePlayedIcon from './assets/icons/statistics_time_played_icon.png'

import Heroes from './data/Heroes';
import SelectHeroMenu from './StatisticsComponents/SelectHeroMenu';
import Dropdown from './miscComponents/Dropdown';
import MainStatsCard from './StatisticsComponents/MainStatsCard'
import TableRow from './StatisticsComponents/TableRow';

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './ReduxToolKit/app/store';
import { setCurrentMode, setCurrentHero } from './ReduxToolKit/features/UISlice';

type cardStat = {
    stat: string
    total?: number
    best?: number
    average?: number
}

const Statistics = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentMode, currentHero } = useSelector((state: RootState) => state.UI)
    const { data } = useSelector((state: RootState) => state.PlayerData)

    const { timePlayed, gamesPlayed, gamesWon, eliminations, assists, killstreak } = data.cardValues[currentHero][currentMode]
    
    const tableRows = data.heroesStats[currentHero][currentMode]?.slice(1, 15).map((row: cardStat) => {
        return <TableRow key={row.stat} total={row.total} best={row.best} average={row.average} stat={row.stat} />
    })

    const [selectHeroOpen, setSelectHeroOpen] = useState(false)
    
    return (
        <main className="statistics">
            {selectHeroOpen && <SelectHeroMenu setSelectHeroOpen={setSelectHeroOpen} setCurrentHero={ setCurrentHero} />}

            <section className="hero-select">
                <img className="hero-logo" src={Heroes[currentHero].logo} alt="" />
                <button className="change-hero-btn" onClick={() => setSelectHeroOpen(true)} >CHANGE HERO</button>
            </section>

            <Dropdown state={currentMode} setState={setCurrentMode} options={data.modes} class="overview_mode_dropdown" />

            <section className="main-stats" >
                    <MainStatsCard icon={TimePlayedIcon} value={timePlayed} desc='TIME PLAYED' />
                    <MainStatsCard icon={GamesPlayedIcon} value={gamesPlayed} desc='GAMES PLAYED' />
                    <MainStatsCard icon={GamesWonIcon} value={gamesWon} desc='GAMES WON' />
                    <MainStatsCard icon={EliminationsIcon} value={eliminations} desc='ELIMINATIONS' />
                    <MainStatsCard icon={AssistsIcon} value={assists} desc='ASSISTS' />
                    <MainStatsCard icon={KillstreakIcon} value={killstreak} desc='KILL STREAK - BEST' />
            </section>

            <section className="all-stats">
                <div className="table-header table-row">
                    <h4 className="stat">STAT</h4>
                    <h4>TOTAL</h4>
                    <h4>BEST</h4>
                    <h4>AVG/10 MIN</h4>
                </div>
                <div className="table-rows">
                    {tableRows}
                </div>
            </section>
        </main>
    )
}

export default Statistics;