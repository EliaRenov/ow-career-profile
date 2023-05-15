export default function dataHandler(rawData, platform) {
    const heroes = ['doomfist', 'dva', 'junker-queen', 'orisa', 'ramattra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya', 'ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta', 'ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier-76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker']

    // API sometimes sends time played in seconds and sometimes in hours. Decide if there is a need to divide.
    const compUntested = rawData.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value

    // 

    const timePlayedCompetitive = Math.round(compUntested / 3600) !== 0 ? Math.round(compUntested / 3600) : compUntested;
    const timePlayedQuickplay = Math.round(rawData.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value / 3600);
    const timePlayedOverall = timePlayedCompetitive + timePlayedQuickplay;

    function combineModesHeroComparisonStats(stat, x, y) {
        if (stat === 'time_played' || stat === 'objective_kills' || stat === 'games_won') return x.value += y.value
        if (stat === 'weapon_accuracy' || stat === 'win_percentage' || stat === 'critical_hit_accuracy' || stat === 'eliminations_per_life') return (x.value + y.value) / 2
        if (stat === 'multikill_best') return x.value > y.value ? x.value : y.value
    }
    
    function getHeroComparisonStats(stat) {
        let statHeroesCompetitive = structuredClone(rawData.stats[platform].competitive.heroes_comparisons[stat].values)
        let statHeroesQuickplay = structuredClone(rawData.stats[platform].quickplay.heroes_comparisons[stat].values)


        for (let element of heroes) {
            if (!statHeroesCompetitive.find(hero => hero.hero === element)) statHeroesCompetitive.push({hero: element, value: 0})
            if (!statHeroesQuickplay.find(hero => hero.hero === element)) statHeroesQuickplay.push({hero: element, value: 0})
        }
    
        const statHeroesAllModes = 
        structuredClone(statHeroesQuickplay).map(quickHero => {
            const element = statHeroesCompetitive.find(compHero => compHero.hero === quickHero.hero)
            return {hero: quickHero.hero, value: combineModesHeroComparisonStats(stat, quickHero, element)}
        }).sort((a, b) => b.value - a.value)

        return {competitive: statHeroesCompetitive, quickplay: statHeroesQuickplay, all: statHeroesAllModes}
    }

    const timePlayedHeroComparison = getHeroComparisonStats('time_played')
    const gamesWonHeroComparison = getHeroComparisonStats('games_won')
    const objectiveKillsHeroComparison = getHeroComparisonStats('objective_kills')
    const elimsPerLifeHeroComparison = getHeroComparisonStats('eliminations_per_life')
    const multikillBestHeroComparison = getHeroComparisonStats('multikill_best')
    const critHitAccHeroComparison = getHeroComparisonStats('critical_hit_accuracy')
    const weaponAccHeroComparison = getHeroComparisonStats('weapon_accuracy')


    // API does not provide win percentage:
    // const [winPercentageComparisonCompetitive, winPercentageComparisonQuickplay, winPercentageComparisonAll] = getHeroComparisonStats('win_percentage')



    


    return {
            timePlayedGamemodes: {
                timePlayedCompetitive,
                timePlayedQuickplay,
                timePlayedOverall
            },
            heroComparisonStats: {
                time_played: timePlayedHeroComparison,
                games_won: gamesWonHeroComparison,
                objective_kills: objectiveKillsHeroComparison,
                eliminations_per_life: elimsPerLifeHeroComparison,
                multikill_best: multikillBestHeroComparison,
                critical_hit_accuracy: critHitAccHeroComparison,
                weapon_accuracy: weaponAccHeroComparison,
            }
        }
}