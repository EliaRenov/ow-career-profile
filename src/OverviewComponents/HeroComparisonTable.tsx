import HeroComparisonCell from "./HeroComparisonCell"
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';

type Hero = {
    hero: string
    value: number
}

const HeroComparisonTable = ({stat}: {stat: string}) => {
    const { currentMode } = useSelector((state: RootState) => state.UI)
    const { data } = useSelector((state: RootState) => state.PlayerData)

    const comparison: Hero[] = data.heroComparisonStats[stat][currentMode]
    const mostPlayed = comparison[0]
    

    return (
        <div className="hero-comparison-table">
            {comparison.map(hero => {
                return <HeroComparisonCell data={hero} mostPlayed={mostPlayed} key={Math.random()} type={stat} />
                
            })}
        </div>
    )

}

export default HeroComparisonTable