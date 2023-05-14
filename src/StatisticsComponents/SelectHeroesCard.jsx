import Heroes from '../Heroes'

const SelectHeroesCard = ({hero}) => {

    const avatar = Heroes[hero].logo

    return (
        <div className="hero-card" name={hero} >
            <img src={avatar} alt={avatar + 'logo'} />
        </div>
    )

}

export default SelectHeroesCard