import Competitive from '../assets/icons/competitive_icon.png'
import Unranked from '../assets/icons/unranked_icon.png'
import Arcade from '../assets/icons/arcade_icon.png'
import GameBrowser from '../assets/icons/gamebrowser_icon.png'
import Experimental from '../assets/icons/experimental_icon.png'

const TimePlayedBar = (props) => {
    let img;

    switch (props.mode) {
        case 'competitive':
            img = Competitive;
            break;
        case 'unranked':
            img = Unranked;
            break;
        case 'arcade':
            img = Arcade
            break;
        case 'gameBrowser':
            img = GameBrowser
            break;
        case 'experimental':
            img = Experimental
            break;
    }

    const fillWidth = Math.ceil(
    props.mode === props.mostPlayed.mode ? 100 : `${props.hours / props.mostPlayed.hours * 100}`)
    

    return (
        <div className={`overview_time-played-bar`}>
            <img src={img} alt="mode logo" height="24px" className='overview_mode-logo' />
            <p className="overview_time-played-mode">
            {props.mode === 'gameBrowser' ? 'GAME BROWSER' : props.mode.toUpperCase()}
            </p>
            <p className="overview_time-played-hours">
            {props.hours.toLocaleString()} HRS
            </p>
            <div style={{width: fillWidth + '%'}} className={`overview_time-played-fill overview_time-played-fill-${props.mode}`}>

            </div>
        </div>
    )

}

export default TimePlayedBar

