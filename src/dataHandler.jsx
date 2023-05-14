export default function dataHandler(rawData, platform) {
    // const rawData = props.rawData
    const heroes = ['doomfist', 'dva', 'junker-queen', 'orisa', 'ramatrra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya', 'ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta', 'ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker']

    // API sometimes sends time played in seconds and sometimes in hours. Decide if there is a need to divide.
    const compUntested = rawData.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value

    const timePlayedCompetitive = Math.round(compUntested / 3600) !== 0 ? Math.round(compUntested / 3600) : compUntested;
    const timePlayedQuickplay = Math.round(rawData.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value / 3600);
    const timePlayedOverall = timePlayedCompetitive + timePlayedQuickplay;

    let playTimeHeroesCompetitive = rawData.stats[platform].competitive.heroes_comparisons.time_played.values
    let playTimeHeroesQuickplay = rawData.stats[platform].quickplay.heroes_comparisons.time_played.values

    for (let element of heroes) {
        // if (!playTimeHeroesCompetitive.find(hero => hero.hero === element)) playTimeHeroesCompetitive.push({hero: element, value: 0})
        // if (!playTimeHeroesQuickplay.find(hero => hero.hero === element)) playTimeHeroesQuickplay.push({hero: element, value: 0})
    }


    return {
            timePlayedGamemodes: {
                timePlayedCompetitive,
                timePlayedQuickplay,
                timePlayedOverall
            },

        }
}