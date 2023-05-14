import TankIcon from '../assets/icons/tank_icon.png'
import DamageIcon from '../assets/icons/tank_icon.png'
import SupportIcon from '../assets/icons/tank_icon.png'

import SelectHeroesCard from './SelectHeroesCard'

const SelectHeroMenu = ({setSelectHeroOpen, setCurrentHero}) => {

    return (
        <div className="select-hero-menu">
            <h2 className="title" >SELECT HERO</h2>
            <section className="hero-roles">
                <div className="role tank">
                    <h3 className="role-title">
                        <img src={TankIcon} alt="tank icon" width="40px" />
                        TANK
                    </h3>
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
                <div className="role damage">
                <h3 className="role-title">
                        <img src={DamageIcon} alt="damage icon" width="40px" />
                        DAMAGE
                    </h3>
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
                <div className="role support">
                <h3 className="role-title">
                        <img src={SupportIcon} alt="support icon" width="40px" />
                        SUPPORT
                    </h3>

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

            </section>
        </div>
    )
}

export default SelectHeroMenu