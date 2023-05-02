const HeroComparisonCell = (props) => {
    const Heroes = props.heroes;
    const data = props.data
    let fillWidth = Math.ceil(
        data === props.mostPlayed ? 100 : `${data.hours / props.mostPlayed.hours * 100 + 9}`)
    
    if (fillWidth < 9) fillWidth = 9;
    const heroName = data.hero.toUpperCase().replace("DV", "D.V").replace("GB", "G B")
    
    return (
        <div className="table-cell">
            <div className="hero-logo" style={{
                backgroundImage: `url(${Heroes[data.hero].logo})`}} alt="hero logo" />
            <h5 className="hero-name">
                {heroName}
            </h5>
            <h5 className="hero-hours">
                {data.hours.toLocaleString()} HRS
            </h5>
            <div style={{width: fillWidth + '%', backgroundColor: Heroes[data.hero].color}} className={`cell-fill`}></div>
        </div>
    )
}

export default HeroComparisonCell