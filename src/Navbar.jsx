import './Navbar.css'
import PlayerLogo from './assets/icons/sf_shock_logo.png'
import SocialLogo from './assets/icons/social_logo.png'
import ChallengesLogo from './assets/icons/challenges_logo.png'
import Endorsement4Logo from './assets/icons/endorsement_level_4.png'
import { useContext } from 'react'
import DataContext from './DataContext'


const Navbar = () => {
    const allData = useContext(DataContext)
    const name = allData.name
    const title = allData.title

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
                <img className="small-player-logo" src={PlayerLogo} alt="small-player-logo" height="62px"/>
                <h4 className="small-player-name">
                    {name}
                </h4>
            </div>
                <h4 className="small-player-hover">
                    <p className="small-player-hover-name">
                        {name}
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

                <div className="challenges-logo">
                <img src={ChallengesLogo} alt="challenges-logo" />
                </div>
                <h4 className="challenges-logo-hover">
                    CHALLENGES
                </h4>
            </div>

            <div className=" player-profile">
                <img className="player-profile-logo" src={PlayerLogo} alt="player logo" height="140"/>
                <div className="player-profile-name_and_title">
                    <h1 className="player-profile-name">
                        {name}
                    </h1>
                    <h3 className="player-profile-title">
                        {title}
                    </h3>
                </div>
            <div className="endorsement-level">
                <img src={Endorsement4Logo} alt="endorsement level" />
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