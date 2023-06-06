import './styling/Navbar.css'
import PlayerLogo from './assets/icons/sf_shock_logo.png'
import SocialLogo from './assets/icons/social_logo.png'
import ChallengesLogo from './assets/icons/challenges_logo.png'
import SettingsLogo from './assets/icons/settings_icon.png'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './ReduxToolKit/app/store';
import { setCurrentTab, setIsFormOpen } from './ReduxToolKit/features/UISlice';

const Navbar = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { currentTab } = useSelector((state: RootState) => state.UI)
    const { data } = useSelector((state: RootState) => state.PlayerData)

    
    const username = data.navbar.username.toUpperCase()
    const title = data.navbar.title?.toUpperCase() || ''
    const avatar = data.navbar.avatar
    const endorsementLogo = data.navbar.endorsement
    
    return (
        <nav className="navbar">
            <nav className="nav-links">
                <li className={`${currentTab === 'overview' && 'current-tab'}`} onClick={() => dispatch(setCurrentTab('overview'))}>
                    OVERVIEW
                </li>
                <li className={`${currentTab === 'statistics' && 'current-tab'}`} onClick={() => dispatch(setCurrentTab('statistics'))}> 
                    STATISTICS
                </li>
                {/* <li>
                    ACHIEVEMENTS
                </li>
                <li>
                    CUSTOMIZATION
                </li> */}
            </nav>

            <div className="player-settings" >
            <div className="small-player">
                <img className="small-player-logo" src={avatar} alt="small-player-logo" height="62px"/>
                <h4 className="small-player-name">
                    {username}
                </h4>
                <h3 className={title.length < 14 ? "player-profile-title" : "player-profile-title-small"}>
                        {title}
                </h3>
                <div className="endorsement-level">
                <img src={endorsementLogo} alt="endorsement level" />
            </div>
                <h4 className="small-player-hover">
                    <p className="small-player-hover-name">
                        {username}
                    </p>
                    <p className="small-player-hover-btag-nums">
                        #00000
                    </p>
                </h4>
            </div>

            <div className="top-right_icons">
                <div className="small-player-line" />
                <div className="social-logo">
                <img  src={SocialLogo} alt="social-logo"/>
                <h4 className="social-logo-hover">
                    SOCIAL
                </h4>
                </div>

                <div className="settings-logo" onClick={() => dispatch(setIsFormOpen(true))}>
                <img src={SettingsLogo} alt="settings logo" />
                <h4 className="settings-logo-hover">
                    SETTINGS
                </h4>
                </div>
            </div>
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

            {/* <div className="player-profile_line" /> */}

            {/* API Does not provide player level: */}
            {/* <div className="player-profile_level">
                23
            </div> */}
            

            </div>


        </nav>
    )
}

export default Navbar