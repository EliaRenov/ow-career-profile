export default function dataHandler(rawData, platform, currentMode) {
    // const rawData = props.rawData

    // API sometimes sends time played in seconds and sometimes in hours. Decide if there is a need to divide.
    const compUntested = rawData.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value

    const timePlayedCompetitive = Math.round(compUntested / 3600) !== 0 ? Math.round(compUntested / 3600) : compUntested
    const timePlayedQuickplay = Math.round(rawData.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value / 3600)
    const timePlayedOverall = timePlayedCompetitive + timePlayedQuickplay



    return {
            timePlayedGamemodes: {
                timePlayedCompetitive,
                timePlayedQuickplay,
                timePlayedOverall
            },

        }
}