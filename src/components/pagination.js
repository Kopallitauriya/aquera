import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';

import "../App.css"

export default function PaginatedView(props) {
    async function getResidents(residents) {
        const res = await axios.get(residents)
        return res.data;
    }

    async function paginationHandler(e, page) {

        console.log(page, "page")
        props.setIsLoading(true);
        const planetResponse = await axios.get("https://swapi.dev/api/planets/?format=json&page=" + page)
        
        let planetData =planetResponse.data.results;

        for(let i = 0; i < planetData.length; i++) {  
            const residentPromises = planetData[i].residents.map(getResidents);  
            const residents = await Promise.all(residentPromises);  
            planetData[i].residents = residents;  
        }  
        props.setPlanetInfo({...planetResponse.data, results: planetData});  
        props.setIsLoading(false);
    }
    return (
        <Stack spacing={2}>
            <Pagination
                onChange={paginationHandler}
                count={props.planetInfo.count}
                sx={{color: 'white'}}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        sx={{color: 'white'}}
                        {...item}
                    />
                )}
            />
        </Stack>
    );
}