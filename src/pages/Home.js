import { useEffect, useState } from 'react';
import axios from 'axios';
import MagazineCard from '../components/card';
import { CircularProgress } from '@mui/material';
import Popup from '../components/popup';
import PaginatedView from '../components/pagination';

import '../App.css';

const Home = () => {

    const [planetInfo, setPlanetInfo] = useState([])
    const [headerAnimation, setHeaderAnimation] = useState(false);
    const [showModal, setShowModal] = useState({ open: false, data: null });
    const [isLoading, setIsLoading] = useState(false);

    const [url, setUrl] = useState([])

    const handleOpenModal = (modal) => {
        setShowModal(modal);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    async function getImage(img) {
        const res = await axios.get(img.href)
        return res.data[0];
    }

    async function getResidents(residents) {
        const res = await axios.get(residents)
        return res.data;
    }

    setTimeout(() => {
        setHeaderAnimation(true);
    }, 1000);

    useEffect(() => {
        async function fetchData() {

            setIsLoading(true);

            const planetResponse = await axios.get("https://swapi.dev/api/planets/?format=json")

            let planetData = planetResponse.data.results;

            for (let i = 0; i < planetData.length; i++) {
                const residentPromises = planetData[i].residents.map(getResidents);
                const residents = await Promise.all(residentPromises);
                planetData[i].residents = residents;
            }

            setPlanetInfo({ ...planetResponse.data, results: planetData });

            const image = await axios.get(`https://images-api.nasa.gov/search?q=galaxy&page=6&page_size=${planetData.length}&media_type=image`)
            const result = image.data.collection.items;

            const promises = result.map(getImage);
            await Promise.all(promises)
                .then(resolvedImages => {
                    setUrl(resolvedImages);
                })
                .catch(error => console.error(error));
            
            setIsLoading(false);
        }
        fetchData();
    }, [])



    return (
        <>
            <div className='container'>
                <div className={headerAnimation ? 'header zoom-out' : 'header'}>
                    Welcome to the world of Planets!
                </div>
                <div className='sub-header'>
                    <h1>"DO OR DO NOT, THERE IS NO TRY."</h1>
                    <p>~ YODA</p>
                </div>
                <div className='inner-container'>

                    {isLoading ? <CircularProgress/> : (planetInfo?.results?.map((itm, indx) => {
                        return <button key={indx + 1} className='button' onClick={() => handleOpenModal({ open: true, data: itm })}>
                            <MagazineCard item={itm} key={indx + 1} width='100' src={url[indx]} />
                        </button>
                    }))}

                    {showModal.open ? <Popup handleCloseModal={handleCloseModal} showModal={showModal} /> : ""}
                </div>
                <div className='paginatedview'><PaginatedView planetInfo={planetInfo} setPlanetInfo={setPlanetInfo} setIsLoading={setIsLoading}/></div>
            </div>
        </>
    );
}

export default Home;
