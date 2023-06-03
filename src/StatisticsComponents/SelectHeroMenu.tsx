import TankIcon from '../assets/icons/tank_icon.png'
import DamageIcon from '../assets/icons/damage_icon.png'
import SupportIcon from '../assets/icons/support_icon.png'

import SelectHeroesCard from './SelectHeroesCard'
import './SelectHeroMenu.css'

const SelectHeroMenu = ({setSelectHeroOpen, setCurrentHero}) => {

    const handleHeroSelect = (e) => {
        const hero = e.target.parentNode?.getAttribute('name')
        // If element clicked is not a hero card then return
        if (!hero) return;

        setCurrentHero(hero)
        setSelectHeroOpen(false)
    }

    const handleAllHeroesSelect = () => {
        setCurrentHero('all-heroes')
        setSelectHeroOpen(false)
    }

    return (
        <div className="select-hero-menu">
            <h2 className="title" >SELECT HERO</h2>
            <section className="hero-roles" onClick={handleHeroSelect}>
                <div className="role tank">
                    <h3 className="role-title">
                        <img src={TankIcon} alt="tank icon" width="40px" />
                        TANK
                    </h3>
                    <div className="hero-cards tank">
                    <SelectHeroesCard hero="dva" />
                    <SelectHeroesCard hero="doomfist" />
                    <SelectHeroesCard hero="junker-queen" />
                    <SelectHeroesCard hero="orisa" />
                    <SelectHeroesCard hero="ramattra" />
                    <SelectHeroesCard hero="reinhardt" />
                    <SelectHeroesCard hero="roadhog" />
                    <SelectHeroesCard hero="sigma" />
                    <SelectHeroesCard hero="winston" />
                    <SelectHeroesCard hero="wrecking-ball" />
                    <SelectHeroesCard hero="zarya" />
                    </div>

                </div>
                <div className="role damage">
                <h3 className="role-title">
                        <img src={DamageIcon} alt="damage icon" width="40px" />
                        DAMAGE
                    </h3>
                    <div className="hero-cards damage">
                    <SelectHeroesCard hero="ashe" />
                    <SelectHeroesCard hero="bastion" />
                    <SelectHeroesCard hero="cassidy" />
                    <SelectHeroesCard hero="echo" />
                    <SelectHeroesCard hero="genji" />
                    <SelectHeroesCard hero="hanzo" />
                    <SelectHeroesCard hero="junkrat" />
                    <SelectHeroesCard hero="mei" />
                    <SelectHeroesCard hero="pharah" />
                    <SelectHeroesCard hero="reaper" />
                    <SelectHeroesCard hero="sojourn" />
                    <SelectHeroesCard hero="soldier-76" />
                    <SelectHeroesCard hero="sombra" />
                    <SelectHeroesCard hero="symmetra" />
                    <SelectHeroesCard hero="torbjorn" />
                    <SelectHeroesCard hero="tracer" />
                    <SelectHeroesCard hero="widowmaker" />
                    </div>

                </div>
                <div className="role support">
                <h3 className="role-title">
                        <img src={SupportIcon} alt="support icon" width="40px" />
                        SUPPORT
                    </h3>
                    <div className="hero-cards support">
                    <SelectHeroesCard hero="ana" />
                    <SelectHeroesCard hero="baptiste" />
                    <SelectHeroesCard hero="brigitte" />
                    <SelectHeroesCard hero="kiriko" />
                    <SelectHeroesCard hero="lifeweaver" />
                    <SelectHeroesCard hero="lucio" />
                    <SelectHeroesCard hero="mercy" />
                    <SelectHeroesCard hero="moira" />
                    <SelectHeroesCard hero="zenyatta" />
                    </div>
                </div>
            </section>
            <div className="buttons">
                <button className="all-heroes" onClick={handleAllHeroesSelect} >
                    ALL HEROES
                </button>
                <button className="cancel" onClick={() => setSelectHeroOpen(false)} >
                    CANCEL
                </button>
            </div>
        </div>
    )
}

export default SelectHeroMenu