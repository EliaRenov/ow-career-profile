import './Navbar.css'
import PlayerLogo from './assets/icons/sf_shock_logo.png'
import SocialLogo from './assets/icons/social_logo.png'
import ChallengesLogo from './assets/icons/challenges_logo.png'
import Endorsement4Logo from './assets/icons/endorsement_level_4.png'


const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar__nav-links">
                <li className="navbar__current_tab">
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
            <div className="navbar__small-player">
                <img className="navbar__small-player-logo" src={PlayerLogo} alt="navbar__small-player-logo" height="62px"/>
                <h4 className="navbar__small-player-name">
                    SUPER
                </h4>
            </div>
                <h4 className="navbar__small-player-hover">
                    <p className="navbar__small-player-hover-name">
                        SUPER
                    </p>
                    <p className="navbar__small-player-hover-btag-nums">
                        #00000
                    </p>
                </h4>

            <div className="navbar__top-right_icons">
                <div className="navbar__small-player-line" />
                <div className="navbar__social-logo">
                <img  src={SocialLogo} alt="social-logo"/>
                </div>
                <h4 className="navbar__social-logo-hover">
                    SOCIAL
                </h4>

                <div className="navbar__challenges-logo">
                <img src={ChallengesLogo} alt="navbar__challenges-logo" />
                </div>
                <h4 className="navbar__challenges-logo-hover">
                    CHALLENGES
                </h4>
            </div>

            <div className="navbar__player-profile">
                <img className="navbar__player-profile-logo" src={PlayerLogo} alt="player logo" height="140"/>
                <div className="navbar__player-profile-name_and_title">
                    <h1 className="navbar__player-profile-name">
                        SUPER
                    </h1>
                    <h3 className="navbar__player-profile-title">
                        TITAN
                    </h3>
                </div>
            <div className="endorsement-level">
                <img src={Endorsement4Logo} alt="endorsement level" />
            </div>
            <div className="navbar__player-profile_line" />
            <div className="navbar__player-profile_level">
                23
            </div>
            

            </div>


        </div>
    )
}

export default Navbar