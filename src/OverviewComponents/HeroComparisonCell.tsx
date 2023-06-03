const HeroComparisonCell = (props) => {
    const Heroes = props.heroes;
    const data = props.data

    function handleClick() {
        props.setCurrentHero(data.hero)
        props.setCurrentTab('statistics')
    }
    
    let fillWidth = Math.ceil(
        data === props.mostPlayed ? 100 : `${data.value / props.mostPlayed.value * 100}`)

    if (fillWidth < 9 && fillWidth > 1) fillWidth = 9;
    const heroName = data.hero.toUpperCase().replace("DV", "D.V").replace("GB", "G B").replace("r7", "r-7")

    let stat;

    if (props.type === 'games_won'
        || props.type === 'objective_kills'
        || props.type === 'multikill_best') {
        stat = data.value;
    } else if (props.type === 'eliminations_per_life') {
        stat = data.value.toFixed(2)
    } else if (props.type === 'critical_hit_accuracy' 
                || props.type === 'weapon_accuracy'
                || props.type === 'win_percentage') {
        stat = data.value + '%'
    } else if (props.type === 'time_played') {
        stat = Math.ceil(data.value / 3600).toLocaleString() + ' HRS'
    } 
    
    return (
        <div className="table-cell" onClick={handleClick} >
            <div className="hero-logo" 
            style={{
                backgroundImage: `url(${Heroes[data.hero].logo})`}}
                 alt="hero logo" />
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