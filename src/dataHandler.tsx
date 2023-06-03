type heroStatComparison = {
    hero: string
    value: number
}

type heroStatCategory = {
    key: string
    label: string
    value: number
}

type heroCareerStat = {
    category: string
    label: string
    stats: object[]
}

type roleStat = 'time_played' | 'games_won'

type modeType = 'competitive' | 'quickplay' | 'all'


export default function dataHandler(rawData: any, platform: string) {


    function combineModesHeroComparisonStats(stat: string, x: heroStatComparison, y: heroStatComparison) {
        if (stat === 'time_played' || stat === 'objective_kills' || stat === 'games_won') return x.value += y.value
        if (stat === 'weapon_accuracy' || stat === 'win_percentage' || stat === 'critical_hit_accuracy' || stat === 'eliminations_per_life') return (x.value + y.value) / 2
        if (stat === 'multikill_best') return x.value > y.value ? x.value : y.value
    }
    
    function getHeroComparisonStats(stat: string) {

        let statHeroesCompetitive = structuredClone(rawData.stats[platform].competitive.heroes_comparisons[stat].values)
        let statHeroesQuickplay = structuredClone(rawData.stats[platform].quickplay.heroes_comparisons[stat].values)

        const heroNames = heroes.filter(x => x !== 'all-heroes')


        for (let heroName of heroNames) {
            if (!statHeroesCompetitive.find((hero: heroStatComparison) => hero.hero === heroName)) statHeroesCompetitive.push({hero: heroName, value: 0})

            if (!statHeroesQuickplay.find((hero: heroStatComparison) => hero.hero === heroName)) statHeroesQuickplay.push({hero: heroName, value: 0})
        }
    
        const statHeroesAllModes = 
        structuredClone(statHeroesQuickplay).map((quickHero: heroStatComparison) => {
            const element = statHeroesCompetitive.find((compHero: heroStatComparison) => compHero.hero === quickHero.hero)
            return {hero: quickHero.hero, value: combineModesHeroComparisonStats(stat, quickHero, element)}
        }).sort((a: heroStatComparison, b: heroStatComparison) => b.value - a.value)

        return {competitive: statHeroesCompetitive, quickplay: statHeroesQuickplay, all: statHeroesAllModes}
    }

    function roleValuesPerMode(mode: modeType, stat: roleStat) {
        let tank = 0;
        let damage = 0;
        let support = 0;

        getHeroComparisonStats(stat)[mode].forEach((item: heroStatComparison) => {
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

    function getHeroStats(hero: string, mode: modeType) {
        const path = rawData.stats[platform][mode]

        if (!path.career_stats[hero]) return;
    
        const [game, average, best, combat, assists, HeroSpecific] = ['game', 'average', 'best', 'combat', 'assists', 'hero_specific'].map(category => {
            if (!path.career_stats[hero].find((x: heroCareerStat) => x.category === category)) return [];
            return path.career_stats[hero].find((x: heroCareerStat) => x.category === category).stats
        })

        const values: any = {};

        for (let category of [game, best, average, combat, assists, HeroSpecific]) {
            category.map((element: heroStatCategory) => {
                    values[element.key] = element.value
                })
        }

        return [
            {
                stat: 'TIME PLAYED',
                total: Math.round(values.time_played / 3600)
            },
            {
                stat: 'GAMES PLAYED',
                total: values.games_played
            },
            {
                stat: 'GAMES WON',
                total: values.games_played - values.games_lost
            },
            {
                stat: 'GAMES LOST',
                total: values.games_lost
            },
            {
                stat: 'HEALING DONE',
                total: values.healing_done,
                best: values.healing_done_most_in_game,
                average: values.healing_done_avg_per_10_min,
            },
            {
                stat: 'ELIMINATIONS',
                total: values.eliminations,
                best: values.eliminations_most_in_game,
                average: values.eliminations_avg_per_10_min,
            },
            {
                stat: 'ASSISTS',
                total: values.assists,
                best: values.assists_most_in_game,
                average: values.assists_avg_per_10_min
            },
            {
                stat: 'DEATHS',
                total: values.deaths,
                average: values.deaths_avg_per_10_min   
            },
            {
                stat: 'FINAL BLOWS',
                total: values.final_blows,
                best: values.final_blows_most_in_game,
                average: values.final_blows_avg_per_10_min
            },
            {
                stat: 'SOLO KILLS',
                total: values.solo_kills,
                best: values.solo_kills_most_in_game,
                average: values.solo_kills_avg_per_10_min
            },
            {
                stat: 'HERO DAMAGE DONE',
                total: values.all_damage_done,
                best: values.all_damage_done_most_in_game,
                average: values.all_damage_done_avg_per_10_min,
            },
            {
                stat: 'ENVIRONMENTAL KILLS',
                total: values.environmental_kills,
                best: values.environmental_kills_most_in_game,
                average: values.environmental_kills_avg_per_10_min,
            },
            {
                stat: 'KILL STREAK - BEST',
                best: values.kill_streak_best
            }
        ].filter(x => x.total || x.best || x.average)

    }

    function combineHeroStats(quickplay: any, competitive: any) {
        if (!quickplay && competitive) return competitive
        if (quickplay && !competitive) return quickplay
        if (!quickplay && !competitive) return

        const all = structuredClone(quickplay)

        // Go through every stat of all, find them in competitive and add them to all.
        for (let allItem of all) {
            const compStat = competitive.find((compItem: any) => compItem.stat === allItem.stat)

            if (!compStat) continue;


            // allItem value does not exist, compStat value exists.
            if (compStat.total && !allItem.total) allItem.total = compStat.total
            if (compStat.best && !allItem.best) allItem.best = compStat.best
            if (compStat.average && !allItem.average) allItem.average = compStat.average


            // Combine value types
            if (compStat.total) allItem.total += compStat.total
            if (compStat.best) allItem.best = Math.max(allItem.best, compStat.best)
            if (compStat.average) allItem.average = Number(((allItem.average + compStat.average) / 2).toFixed(2))

        }

        // If item is in competitive and not in all, add it to all.
        for (let compItem of competitive) {
            if (!all.find((allItem: any) => allItem.stat === compItem.stat)) all.push(compItem)
        }

        return all
    }

    const heroes = ['all-heroes', 'doomfist', 'dva', 'junker-queen', 'orisa', 'ramattra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya', 'ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta', 'ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier-76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker'];

    // API sometimes sends time played in seconds and sometimes in hours. Decide if there is a need to divide.
    
    const compUntested = rawData.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value

    const timePlayedCompetitive = Math.round(compUntested / 3600) !== 0 ? Math.round(compUntested / 3600) : compUntested;
    const timePlayedQuickplay = Math.round(rawData.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value / 3600);
    const timePlayedOverall = timePlayedCompetitive + timePlayedQuickplay;


    const timePlayedHeroComparison = getHeroComparisonStats('time_played')
    
    const heroesPerRoles = {
        tank: ['doomfist', 'dva', 'junker-queen', 'orisa', 'ramattra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya'],
        support: ['ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta'],
        damage: ['ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker']
    }

    // NAVBAR
    
    const heroesStats: any = {}

    for (let hero of heroes) {
        const quickplay = getHeroStats(hero, 'quickplay')
        const competitive = getHeroStats(hero, 'competitive')
        const all = combineHeroStats(quickplay, competitive)
        
        heroesStats[hero] = {
            quickplay,
            competitive,
            all,
        }
    }
    
    
    return {
        navbar: {
                username: rawData.summary.username,
                title: rawData.summary.title,
                avatar: rawData.summary.avatar,
                endorsement: rawData.summary.endorsement.frame,
                privacy: rawData.summary.privacy,
            },
            roleRank: {
                tank: rawData.summary.competitive[platform].tank?.rank_icon,
                damage: rawData.summary.competitive[platform].damage?.rank_icon,
                support: rawData.summary.competitive[platform].support?.rank_icon,
            },
            roleHours: {
                quickplay: roleValuesPerMode('quickplay', 'time_played'),
                competitive: roleValuesPerMode('competitive', 'time_played'),
                all: roleValuesPerMode('all', 'time_played'),
            },
            roleGamesWon: {
                quickplay: roleValuesPerMode('quickplay', 'games_won'),
                competitive: roleValuesPerMode('competitive', 'games_won'),
                all: roleValuesPerMode('all', 'games_won'),
            },
            timePlayedGamemodes: {
                timePlayedCompetitive,
                timePlayedQuickplay,
                timePlayedOverall
            },
            heroComparisonStats: {
                time_played: timePlayedHeroComparison,
                games_won: getHeroComparisonStats('games_won'),
                objective_kills: getHeroComparisonStats('objective_kills'),
                eliminations_per_life: getHeroComparisonStats('eliminations_per_life'),
                multikill_best: getHeroComparisonStats('multikill_best'),
                critical_hit_accuracy: getHeroComparisonStats('critical_hit_accuracy'),
                weapon_accuracy: getHeroComparisonStats('weapon_accuracy'),
            },
            mostPlayedHeroes: {
                competitive: timePlayedHeroComparison.competitive.slice(0, 3),
                quickplay: timePlayedHeroComparison.quickplay.slice(0, 3),
                all: timePlayedHeroComparison.all.slice(0, 3)
            },
            heroesStats,
            modes: rawData.summary.competitive?.[platform] ? ['all', 'quickplay', 'competitive'] : ['all', 'quickplay'],
        }
}

