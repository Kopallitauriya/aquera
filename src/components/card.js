

const MagazineCard = (props) => {

    let style = {
        img: {
            width: props.width + '%',

        }
    }
    console.log(JSON.stringify(props.src))
    return (
        <div className='magazine_card'>
            <img src={props.src} style={style.img} />
            <p className='magazine_climate'>{props.item.climate}</p>
            <p className='magazine_population'>{props.item.population}</p>
            <p className='magazine_title'>{props.item.name}</p>
            <p className='magazine_desc'>{props.item.terrain}</p>
            <div className='splitter'></div>
            <div className='shadow' />
        </div>
    )

}
export default MagazineCard;