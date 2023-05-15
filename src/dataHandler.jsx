import CurrentMode from "./OverviewComponents/CurrentMode"

export default function dataHandler(rawData, platform) {

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

    function roleValuesPerMode(mode, stat) {
        let tank = 0;
        let damage = 0;
        let support = 0;

        getHeroComparisonStats(stat)[mode].forEach(item => {
            if (heroesPerRoles.tank.includes(item.hero)) tank += item.value
            if (heroesPerRoles.damage.includes(item.hero)) damage += item.value
            if (heroesPerRoles.support.includes(item.hero)) support += item.value
         })

         let roleValues;

         if (stat === 'time_played') {
            return {
                tank: Math.round(tank / 3600),
                damage: Math.round(damage / 3600),
                support: Math.round(support / 3600),
            }
         } else if (stat === 'games_won') {
            return {
                tank,
                damage,
                support,
            }
         }

         return roleValues
     }

    const heroes = ['doomfist', 'dva', 'junker-queen', 'orisa', 'ramattra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya', 'ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta', 'ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier-76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker'];

    // API sometimes sends time played in seconds and sometimes in hours. Decide if there is a need to divide.
    const compUntested = rawData.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value

    // 

    const timePlayedCompetitive = Math.round(compUntested / 3600) !== 0 ? Math.round(compUntested / 3600) : compUntested;
    const timePlayedQuickplay = Math.round(rawData.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value / 3600);
    const timePlayedOverall = timePlayedCompetitive + timePlayedQuickplay;


    const timePlayedHeroComparison = getHeroComparisonStats('time_played')
    const gamesWonHeroComparison = getHeroComparisonStats('games_won')
    const objectiveKillsHeroComparison = getHeroComparisonStats('objective_kills')
    const elimsPerLifeHeroComparison = getHeroComparisonStats('eliminations_per_life')
    const multikillBestHeroComparison = getHeroComparisonStats('multikill_best')
    const critHitAccHeroComparison = getHeroComparisonStats('critical_hit_accuracy')
    const weaponAccHeroComparison = getHeroComparisonStats('weapon_accuracy')

    const heroesPerRoles = {
        tank: ['doomfist', 'dva', 'junker-queen', 'orisa', 'ramattra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya'],
        support: ['ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta'],
        damage: ['ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker']
    }

    const quickplayRoleHours = roleValuesPerMode('quickplay', 'time_played')
    const competitiveRoleHours = roleValuesPerMode('competitive', 'time_played')
    const allRoleHours = roleValuesPerMode('all', 'time_played')
    const quickplayRoleGamesWon = roleValuesPerMode('quickplay', 'games_won')
    const competitiveRoleGamesWon = roleValuesPerMode('competitive', 'games_won')
    const allRoleGamesWon = roleValuesPerMode('all', 'games_won')

    const tankRank = rawData.summary.competitive[platform].tank?.rank_icon
    const damageRank = rawData.summary.competitive[platform].damage?.rank_icon
    const supportRank = rawData.summary.competitive[platform].support?.rank_icon
    
    // NAVBAR
    const username = rawData.summary.username;
    const title = rawData.summary.title;
    const avatar = rawData.summary.avatar;
    const endorsement = rawData.summary.endorsement.frame;
    const privacy = rawData.summary.privacy;

    let mode = 'quickplay'
    console.log(rawData.stats[platform][mode].career_stats.moira)

    function getHeroStats(hero, mode) {

        const timePlayedIndex = rawData.stats[platform][mode].career_stats[hero][3].stats.find(stat => stat.key === 'time_played')
        
        const gamesPlayedIndex = rawData.stats[platform][mode].career_stats[hero][3].stats.find(stat => stat.key === 'games_played')

        const gamesWonIndex = rawData.stats[platform][mode].career_stats[hero][3].stats.find(stat => stat.key === 'games_played')

        const gamesLostIndex = rawData.stats[platform][mode].career_stats[hero][3].stats.find(stat => stat.key === 'games_lost')

        const timePlayed = rawData.stats[platform][mode].career_stats[hero][3].stats[timePlayedIndex].value
        const gamesPlayed = rawData.stats[platform][mode].career_stats[hero][3].stats[gamesPlayedIndex].value
        const gamesWon = rawData.stats[platform][mode].career_stats[hero][3].stats[gamesWonIndex].value
        const gamesLost = rawData.stats[platform][mode].career_stats[hero][3].stats[gamesLostIndex].value


// games lost
// eliminations
// assists
// kill streak - best
// win percentage
// eliminations
// eliminations per life
// deaths
// final blows
// solo kills 
// hero damage done
// hero damage done per life  
// objective time
// objective kils
// environmental kills
// best kill streak
// multikills
//         
    }


    return {
            navbar: {
                username,
                title,
                avatar,
                endorsement,
                privacy,
            },
            roleRank: {
                tank: tankRank,
                damage: damageRank,
                support: supportRank,
            },
            roleHours: {
                quickplay: quickplayRoleHours,
                competitive: competitiveRoleHours,
                all: allRoleHours,
            },
            roleGamesWon: {
                quickplay: quickplayRoleGamesWon,
                competitive: competitiveRoleGamesWon,
                all: allRoleGamesWon,
            },
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
            },
            mostPlayedHeroes: {
                competitive: timePlayedHeroComparison.competitive.slice(0, 3),
                quickplay: timePlayedHeroComparison.quickplay.slice(0, 3),
                all: timePlayedHeroComparison.all.slice(0, 3)
            }
        }
}