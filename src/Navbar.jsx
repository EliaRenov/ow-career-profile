import './Navbar.css'
import PlayerLogo from './assets/icons/sf_shock_logo.png'
import SocialLogo from './assets/icons/social_logo.png'
import ChallengesLogo from './assets/icons/challenges_logo.png'

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
                    HISTORY
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
                    <h5 className="navbar__small-player-hover-name">
                        SUPER
                    </h5>
                    <h5 className="navbar__small-player-hover-btag-nums">
                        #00000
                    </h5>
                </h4>

            <div className="navbar__top-right_icons">
                <div className="navbar__player-line" />
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

        </div>
    )
}

export default Navbar