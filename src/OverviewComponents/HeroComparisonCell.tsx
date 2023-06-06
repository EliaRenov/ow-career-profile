import React from 'react'
import { AppDispatch } from '../ReduxToolKit/app/store';
import { useDispatch } from 'react-redux'
import { setCurrentTab, setCurrentHero } from '../ReduxToolKit/features/UISlice';
import Heroes from "../data/Heroes"


type CellProps = {
    data: {
        hero: string
        value: number
    }
    mostPlayed: {
        hero: string
        value: number
    }
    type: string
}

const set = (stat: number) => stat
const setToFixed = (stat: number) => stat.toFixed(2)
const setAddPercentage = (stat: number) => stat + '%'
const setTimePlayed = (stat: number) => Math.ceil(stat / 3600).toLocaleString() + ' HRS'

const statFormatting = {
    games_won: set,
    objective_kills: set,
    multikill_best: set,
    eliminations_per_life: setToFixed,
    critical_hit_accuracy: setAddPercentage,
    weapon_accuracy: setAddPercentage,
    win_percentage: setAddPercentage,
    time_played: setTimePlayed
}

const HeroComparisonCell = (props: CellProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const data = props.data

    function handleClick() {
        dispatch(setCurrentHero(data.hero))
        dispatch(setCurrentTab('statistics'))
    }
    

    const isModeMostPlayed = props.data.hero === props.mostPlayed.hero
    const fillWidthNotMostPlayed = Math.ceil(props.data.value / props.mostPlayed.value * 100)
    const fillWidthMostPlayed = 100

    let fillWidth = isModeMostPlayed ? fillWidthMostPlayed : fillWidthNotMostPlayed

    if (fillWidth < 9 && fillWidth > 1) fillWidth = 9;
    const heroName = data.hero.toUpperCase().replace("DV", "D.V").replace("GB", "G B").replace("r7", "r-7")
    
    const stat = statFormatting[props.type as keyof typeof statFormatting](props.data.value);
    
    return (
        <div className="table-cell" onClick={handleClick} >
            <div className="hero-logo" 
            style={{
                backgroundImage: `url(${Heroes[data.hero].logo})`}}
                 />
            <h5 className="hero-name">
                {heroName.replace('-', ' ')}
            </h5>
            <h5 className="hero-hours">
                {stat} 
            </h5>
            <div 
            style={{width: fillWidth + '%', backgroundColor: Heroes[data.hero].color}}
            className="cell-fill"></div>
        </div>
    )
}

export default HeroComparisonCell