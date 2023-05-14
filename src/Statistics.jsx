import OverfastAPIContext from './OverfastAPIContext';
import { useContext, useState } from 'react';
import './Statistics.css';

import Heroes from './Heroes';
import SelectHeroMenu from './StatisticsComponents/SelectHeroMenu';


const Statistics = () => {
    const {data, platform, currentHero, setCurrentHero, currentMode} = useContext(OverfastAPIContext);

    const [selectHeroOpen, setSelectHeroOpen] = useState(false)

    console.log(currentMode)
    console.log(data.stats[platform])
    
    return (
        <main className="statistics">
            {selectHeroOpen && <SelectHeroMenu setSelectHeroOpen={setSelectHeroOpen} setCurrentHero={setCurrentHero} />}
            <section className="hero-select">
                <img className="hero-logo" src={Heroes[currentHero].logo} alt="" />
                <button onClick={() => setSelectHeroOpen(true)} >CHANGE HERO</button>
            </section>
        </main>
    )
}

export default Statistics;