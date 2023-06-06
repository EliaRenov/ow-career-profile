import Competitive from '../assets/icons/competitive_icon.png'
import Unranked from '../assets/icons/unranked_icon.png'
import Arcade from '../assets/icons/arcade_icon.png'
import GameBrowser from '../assets/icons/gamebrowser_icon.png'
import Experimental from '../assets/icons/experimental_icon.png'

type BarProps = {
    mode: 'competitive' | 'unranked' | 'arcade' | 'gameBrowser' | 'experimental'
    hours: number
    mostPlayed: {
        mode: 'competitive' | 'unranked' | 'arcade' | 'gameBrowser' | 'experimental'
        hours: number
    }
}

const TimePlayedBar = (props: BarProps) => {

    const logos = {
        'competitive': Competitive,
        'unranked': Unranked,
        'arcade': Arcade,
        'gameBrowser': GameBrowser,
        'experimental': Experimental
    }
    
    let img = logos[props.mode];

    
    const isModeMostPlayed = props.mode === props.mostPlayed.mode
    const fillWidthNotMostPlayed = Math.ceil(props.hours / props.mostPlayed.hours * 100)
    const fillWidthMostPlayed = 100

    const fillWidth = isModeMostPlayed ? fillWidthMostPlayed : fillWidthNotMostPlayed
    
    return (
        <div className={`overview_time-played-bar`}>
            <img src={img} alt="mode logo" height="24px" className='overview_mode-logo' />
            <p className="overview_time-played-mode">
            {props.mode === 'gameBrowser' ? 'GAME BROWSER' : props.mode.toUpperCase()}
            </p>
            <p className="overview_time-played-hours">
                <span className="overview_time-played-hours-numbers">
                {props.hours.toLocaleString()}
                </span> HRS
            </p>
            <div style={{width: fillWidth + '%'}} className={`overview_time-played-fill overview_time-played-fill-${props.mode}`}>

            </div>
        </div>
    )

}

export default TimePlayedBar

