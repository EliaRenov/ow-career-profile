const HeroComparisonCell = (props) => {
    const Heroes = props.heroes;
    const data = props.data
    const fillWidth = Math.ceil(
        data === props.mostPlayed ? 100 : `${data.hours / props.mostPlayed.hours * 100}`)
    
    return (
        <div className="table-cell">
            <div className="hero-logo" style={{
                backgroundImage: `url(${Heroes[data.hero].logo})`}} alt="hero logo" />
            <h5 className="hero-name">
                {data.hero.toUpperCase()}
            </h5>
            <h5 className="hero-hours">
                {data.hours.toLocaleString()} HRS
            </h5>
            <div style={{width: fillWidth + '%', backgroundColor: Heroes[data.hero].color}} className={`cell-fill`}></div>
        </div>
    )
}

export default HeroComparisonCell