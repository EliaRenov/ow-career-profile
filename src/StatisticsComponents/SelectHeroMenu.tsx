import TankIcon from '../assets/icons/tank_icon.png'
import DamageIcon from '../assets/icons/damage_icon.png'
import SupportIcon from '../assets/icons/support_icon.png'

import SelectHeroesCard from './SelectHeroesCard'
import '../styling/StatisticsStyling/SelectHeroMenu.css'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../ReduxToolKit/app/store';

type MenuProps = {
    setSelectHeroOpen: (bool: boolean) => void
    setCurrentHero: (bool: string) => {
        type: string
        payload: string
    }
}

const SelectHeroMenu = ({setSelectHeroOpen, setCurrentHero}: MenuProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleHeroSelect = (e: React.MouseEvent) => {
        if (e.target instanceof HTMLElement && e.target.parentNode instanceof HTMLElement) {
            const hero = e.target.parentNode.getAttribute('data-name')

            if (!hero) return;

            dispatch(setCurrentHero(hero))

        }
        
        setSelectHeroOpen(false)
    }

    const handleAllHeroesSelect = () => {
        dispatch(setCurrentHero('all-heroes'))
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