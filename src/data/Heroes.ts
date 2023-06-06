import AllHeroes from '../assets/hero_logos/all-heroes.webp'
import Ana from '../assets/hero_logos/ana.webp'
import Ashe from '../assets/hero_logos/ashe.webp'
import Baptiste from '../assets/hero_logos/baptiste.webp'
import Bastion from '../assets/hero_logos/bastion.webp'
import Brigitte from '../assets/hero_logos/brigitte.webp'
import Cassidy from '../assets/hero_logos/cassidy.webp'
import Doomfist from '../assets/hero_logos/doomfist.webp'
import Dva from '../assets/hero_logos/dva.webp'
import Echo from '../assets/hero_logos/echo.webp'
import Genji from '../assets/hero_logos/genji.webp'
import Hanzo from '../assets/hero_logos/hanzo.webp'
import Junkerqueen from '../assets/hero_logos/junkerqueen.webp'
import Junkrat from '../assets/hero_logos/junkrat.webp'
import Kiriko from '../assets/hero_logos/kiriko.webp'
import Lifeweaver from '../assets/hero_logos/lifeweaver.webp'
import Lucio from '../assets/hero_logos/lucio.webp'
import Mei from '../assets/hero_logos/mei.webp'
import Mercy from '../assets/hero_logos/mercy.webp'
import Moira from '../assets/hero_logos/moira.webp'
import Orisa from '../assets/hero_logos/orisa.webp'
import Pharah from '../assets/hero_logos/pharah.webp'
import Ramattra from '../assets/hero_logos/ramattra.webp'
import Reaper from '../assets/hero_logos/reaper.webp'
import Reinhardt from '../assets/hero_logos/reinhardt.webp'
import Roadhog from '../assets/hero_logos/roadhog.webp'
import Sigma from '../assets/hero_logos/sigma.webp'
import Sojourn from '../assets/hero_logos/sojourn.webp'
import Soldier76 from '../assets/hero_logos/soldier76.webp'
import Sombra from '../assets/hero_logos/sombra.webp'
import Symmetra from '../assets/hero_logos/symmetra.webp'
import Torbjorn from '../assets/hero_logos/torbjorn.webp'
import Tracer from '../assets/hero_logos/tracer.webp'
import Widowmaker from '../assets/hero_logos/widowmaker.webp'
import Winston from '../assets/hero_logos/winston.webp'
import Wreckingball from '../assets/hero_logos/wreckingball.webp'
import Zarya from '../assets/hero_logos/zarya.webp'
import Zenyatta from '../assets/hero_logos/zenyatta.webp'

type Role = string[] | any

type Hero = {
    logo: string
    color?: string
    role?: string
}

type Heroes = {
    [key: string]: Hero | Role
}


const Heroes: Heroes = {
    tank: ['doomfist', 'dva', 'junker-queen', 'orisa', 'ramattra', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking-ball', 'zarya'],
    support: ['ana', 'baptiste', 'brigitte', 'kiriko', 'lifeweaver', 'lucio', 'mercy', 'moira', 'zenyatta'],
    damage: ['ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker'],
    'all-heroes': {
        logo: AllHeroes
    },
    ana: {
        logo: Ana,
        color: '#8898b8',
        role: 'support'
    },
    ashe: {
        logo: Ashe,
        color: '#85878a',
        role: 'damage'
    },
    baptiste: {
        logo: Baptiste,
        color: '#7eb9cf',
        role: 'support'
    },
    bastion: {
        logo: Bastion,
        color: '#909d91',
        role: 'damage'
    },
    brigitte: {
        logo: Brigitte,
        color: '#9b8586',
        role: 'support'
    },
    cassidy: {
        logo: Cassidy,
        color: '#b88184',
        role: 'damage'
    },
    doomfist: {
        logo: Doomfist,
        color: '#948081',
        role: 'tank'
    },
    dva: {
        logo: Dva,
        color: '#f7a0cb',
        role: 'tank'
    },
    echo: {
        logo: Echo,
        color: '#a7d2fb',
        role: 'damage'
    },
    genji: {
        logo: Genji,
        color: '#a1f781',
        role: 'damage'
    },
    hanzo: {
        logo: Hanzo,
        color: '#c0bb99',
        role: 'damage'
    },
    "junker-queen": {
        logo: Junkerqueen,
        color: '#8db5d8',
        role: 'tank'
    },
    junkrat: {
        logo: Junkrat,
        color: '#f3c283',
        role: 'damage'
    },
    kiriko: {
        logo: Kiriko,
        color: '#d68a93',
        role: 'support'
    },
    lifeweaver: {
        logo: Lifeweaver,
        color: '#dacbdb',
        role: 'support'
    },
    lucio: {
        logo: Lucio,
        color: '#95cf83',
        role: 'support'
    },
    mei: {
        logo: Mei,
        color: '#88b3f0',
        role: 'damage'
    },
    mercy: {
        logo: Mercy,
        color: '#f5f0c1',
        role: 'support'
    },
    moira: {
        logo: Moira,
        color: '#a28ce8',
        role: 'support'
    },
    orisa: {
        logo: Orisa,
        color: '#7c9b82',
        role: 'tank'
    },
    pharah: {
        logo: Pharah,
        color: '#7b91cb',
        role: 'damage'
    },
    ramattra: {
        logo: Ramattra,
        color: '#a090d3',
        role: 'tank'
    },
    reaper: {
        logo: Reaper,
        color: '#907d83',
        role: 'damage'
    },
    reinhardt: {
        logo: Reinhardt,
        color: '#9ea9ad',
        role: 'tank'
    },
    roadhog: {
        logo: Roadhog,
        color: '#be9a83',
        role: 'tank'
    },
    sigma: {
        logo: Sigma,
        color: '#9faaad',
        role: 'tank'
    },
    sojourn: {
        logo: Sojourn,
        color: '#da8685',
        role: 'damage'
    },
    "soldier-76": {
        logo: Soldier76,
        color: '#878ea1',
        role: 'damage'
    },
    sombra: {
        logo: Sombra,
        color: '#8c83be',
        role: 'damage'
    },
    symmetra: {
        logo: Symmetra,
        color: '#9dc4d5',
        role: 'damage'
    },
    torbjorn: {
        logo: Torbjorn,
        color: '#c68c8b',
        role: 'damage'
    },
    tracer: {
        logo: Tracer,
        color: '#e0a181',
        role: 'damage'
    },
    widowmaker: {
        logo: Widowmaker,
        color: '#a888af',
        role: 'damage'
    },
    winston: {
        logo: Winston,
        color: '#aaaec1',
        role: 'tank'
    },
    "wrecking-ball": {
        logo: Wreckingball,
        color: '#7c9b82',
        role: 'tank'
    },
    zarya: {
        logo: Zarya,
        color: '#f293bd',
        role: 'tank'
    },
    zenyatta: {
        logo: Zenyatta,
        color: '#f7ed93',
        role: 'support'
    },
}

export default Heroes