type CardProps = {
    icon: string
    value: number
    desc: string
}

const MainStatsCard = (props: CardProps) => {
  return (
    <div className="main-stats-card">
        <img className="card-logo" src={props.icon} alt={`${props.desc} icon`} />
        <h3 className="card-value" >
            {props.value} {props.desc === 'TIME PLAYED' && 'HRS'}</h3>
        <h4 className="card-desc">{props.desc}</h4>
    </div>
  )
}

export default MainStatsCard