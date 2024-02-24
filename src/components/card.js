import React from 'react';

const MagazineCard = (props) => {

    let style = {
        img: {
            width: props.width + '%',
        }
    }
    
    return (
        <div className='magazine_card'>
            <img src={props.src} style={style.img} alt="img"/>
            <p className='magazine_climate'>Climate: {props.item.climate}</p>
            <p className='magazine_population'>Population: {props.item.population}</p>
            <p className='magazine_title'>{props.item.name}</p>
            <p className='magazine_desc'>Terrain: {props.item.terrain}</p> 
            <div className='splitter'></div>
            <div className='shadow' />
        </div>
    )

}

export default MagazineCard;