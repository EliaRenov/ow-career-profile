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


    return (
        <div className={`overview_time-played-bar`}>
            <img src={img} alt="" />
            {props.mode}
        </div>
    )

}

export default TimePlayedBar

