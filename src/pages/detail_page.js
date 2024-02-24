import React from 'react';
import { useLocation } from 'react-router-dom';

const PlanetDetail = (props) => {

    const location = useLocation()
    const data = location.state
    console.log(data)
    return (
        <>
            <div>jih</div>
        </>
    );
}
export default PlanetDetail