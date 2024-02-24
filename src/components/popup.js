import React from 'react';

const Popup = (props) => {
    const data = props.showModal.data;
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className='popup-container'>
                    <h1 >{data.name}</h1>
                    <span className='break'/>
                    <div className='row'>
                        <p>Rotation Period: {data.rotation_period}</p>
                        <p>Orbital Period: {data.orbital_period}</p>
                    </div>
                    <div className='row'>
                        <p>Diameter: {data.diameter}</p>
                        <p>Climate: {data.climate}</p>
                    </div>
                    <div className='row'>
                        <p>Gravity: {data.gravity}</p>
                        <p>Terrain: {data.terrain}</p>
                    </div>
                    <div className='row'>
                        <p>Surface Water: {data.surface_water}</p>
                        <p>Population: {data.population}</p>
                    </div>
                    <div className='residents'>
                        <h2>Residents:</h2>
                        <ul>
                            {
                                data?.residents?.length ? data.residents.map((itm, indx) => {
                                    return <li key={indx + 1}> <span>{itm.name}: </span>Height: {itm.height} | Mass: {itm.mass} | Gender: {itm.gender} | Birth Year: {itm.birth_year}</li>
                                }): <p style={{textAlign: "center"}}>No residents found</p>
                            }
                        </ul>
                    </div>
                </div>
                <button onClick={() => props.handleCloseModal()}>Close</button>
            </div>
        </div>
    )
}
export default Popup;