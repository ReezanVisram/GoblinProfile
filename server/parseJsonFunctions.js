const getBasicInfo = (data) => {
    const basicInfo = {
        tag: data.tag,
        name: data.name,
        townHallLevel: data.townHallLevel,
        expLevel: data.expLevel,
        trophies: data.trophies,
        builderHallLevel: data.builderHallLevel,
        versusTrophies: data.versusTrophies,
        clan: {
            clanTag: data.clan.tag,
            clanName: data.clan.name,
            clanLevel: data.clan.clanLevel,
        },
        league: data.league.name,
    }

    basicInfo.heroes = new Array(data.heroes.length);
    for (let i = 0; i < data.heroes.length; i++) {
        basicInfo.heroes[i] = data.heroes[i];
    }

    return basicInfo;    
}

module.exports = {
    getBasicInfo
}