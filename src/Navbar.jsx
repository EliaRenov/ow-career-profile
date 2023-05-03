import './Navbar.css'
import PlayerLogo from './assets/icons/sf_shock_logo.png'
import SocialLogo from './assets/icons/social_logo.png'
import ChallengesLogo from './assets/icons/challenges_logo.png'
import SettingsLogo from './assets/icons/settings_icon.png'
import { useContext } from 'react'
import OverfastAPIContext from './OverfastAPIContext'


const Navbar = () => {
    const { data } = useContext(OverfastAPIContext)
    
    const username = data.summary.username.toUpperCase()
    const title = data.summary.title ? data.summary.title.toUpperCase() : ''

    const avatar = data.summary.avatar
    const endorsementLogo = data.summary.endorsement.frame
    

    return (
        <nav className="navbar">
            <nav className="nav-links">
                <li className="current-tab">
                    OVERVIEW
                </li>
                <li>
                    STATISTICS
                </li>
                <li>
                    ACHIEVEMENTS
                </li>
                <li>
                    CUSTOMIZATION
                </li>
            </nav>
            <div className="small-player">
                <img className="small-player-logo" src={avatar} alt="small-player-logo" height="62px"/>
                <h4 className="small-player-name">
                    {username}
                </h4>
            </div>
                <h4 className="small-player-hover">
                    <p className="small-player-hover-name">
                        {username}
                    </p>
                    <p className="small-player-hover-btag-nums">
                        #00000
                    </p>
                </h4>

            <div className="top-right_icons">
                <div className="small-player-line" />
                <div className="social-logo">
                <img  src={SocialLogo} alt="social-logo"/>
                </div>
                <h4 className="social-logo-hover">
                    SOCIAL
                </h4>

                <div className="settings-logo">
                <img src={SettingsLogo} alt="settings logo" />
                </div>
                <h4 className="settings-logo-hover">
                    SETTINGS
                </h4>
            </div>

            <div className="player-profile">
                <img className="player-profile-logo" src={avatar} alt="player logo" height="140"/>
                <div className="player-profile-name_and_title">
                    <h1 className="player-profile-name">
                        {username}
                    </h1>
                    <h3 className={title.length < 14 ? "player-profile-title" : "player-profile-title-small"}>
                        {title}
                    </h3>
                </div>
            <div className="endorsement-level">
                <img src={endorsementLogo} alt="endorsement level" />
            </div>
            <div className="player-profile_line" />
            <div className="player-profile_level">
                23
            </div>
            

            </div>


        </nav>
    )
}

export default Navbar