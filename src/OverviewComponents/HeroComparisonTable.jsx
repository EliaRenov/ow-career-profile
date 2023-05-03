import { useContext } from "react"
import Heroes from "../Heroes"
import HeroComparisonCell from "./HeroComparisonCell"
import OverfastAPIContext from '../OverfastAPIContext';

const HeroComparisonTable = ({stat}) => {
    const {data, currentMode, platform} = useContext(OverfastAPIContext)

    const unrankedHeroComparison = structuredClone(data.stats[platform].quickplay.heroes_comparisons[stat].values);
  const compHeroComparison = structuredClone(data.stats[platform].competitive.heroes_comparisons[stat].values);
  let allHeroComparison = structuredClone(unrankedHeroComparison)

  for (let hero of compHeroComparison) {
    let element = allHeroComparison.find(playTimeHero => playTimeHero.hero === hero.hero);

    if (stat === 'time_played' || stat === 'objective_kills' || stat === 'games_won') {
        if (element) {
            element.value += hero.value
        } else {
            allHeroComparison.push(hero)
        }
    } else if (stat === 'weapon_accuracy' || stat === 'win_percentage' || stat === 'critical_hit_accuracy' || stat === 'eliminations_per_life') {
        if (element) {
            element.value = (element.value + hero.value) / 2
        } else {
            allHeroComparison.push(hero)
        }
    } else if (stat === 'multikill_best') {
        if (element) {
            element.value = element.value > hero.value ? element.value : hero.value
        } else {
            allHeroComparison.push(hero)
        }
    }

} 
  allHeroComparison = allHeroComparison.sort((a, b) => b.value - a.value)

    let sortedComparison;

    if (currentMode === 'unranked') {
        sortedComparison = unrankedHeroComparison
    } else if (currentMode === 'all') {
        sortedComparison = allHeroComparison
    } else if (currentMode === 'competitive') {
        sortedComparison = compHeroComparison
    }

    const mostPlayed = sortedComparison[0]

    return (
        <div className="hero-comparison-table">
            {sortedComparison.map(hero => {
                return <HeroComparisonCell data={hero} heroes={Heroes} mostPlayed={mostPlayed} key={hero.hero} type={stat} />
                
            })}
        </div>
    )

}

export default HeroComparisonTable