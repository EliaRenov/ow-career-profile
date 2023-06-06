import React from 'react'
import Heroes from '../data/Heroes'

const SelectHeroesCard = ({hero}: {hero: string}) => {

    const avatar = Heroes[hero].logo

    return (
        <div className={`hero-card ${hero}`} data-name={hero} >
            <img src={avatar} alt={avatar + 'logo'} />
        </div>
    )

}

export default SelectHeroesCard