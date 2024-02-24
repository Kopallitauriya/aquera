import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
// import Card from './components/card2'
// import Pagination from "../src/components/pagination"
import MagazineCard from '../components/card';
import { CircularProgress, Pagination } from '@mui/material';
import PlanetDetail from './detail_page';
import { Link } from 'react-router-dom';



function Home() {
    const [planetInfo, setPlanetInfo] = useState([])
    const [headerAnimation, setHeaderAnimation] = useState(false);
    const [img, setImg] = useState([])
    const [url, setUrl] = useState([])


    async function getimg(img) {
        const res = await axios.get(img.href)
        return res.data[0];
    }

    useEffect(() => {
        async function f() {
            const res = await axios.get("https://swapi.dev/api/planets/?format=json")
            setPlanetInfo(res.data.results);

            const image = await axios.get("https://images-api.nasa.gov/search?q=galaxy")
            const result = image.data.collection.items
            const promises = []
            for (let i = 0; i < result.length; i++) {
                promises.push(await getimg(result[i]));
            }
            setUrl(promises)
            console.log(promises)
        }
        f();
    }, [])




    const timer = setTimeout(() => {
        setHeaderAnimation(true);
    }, 1000);


  const history  = useHistory()
    const data = { name: "kopla" }

    function ClickHandler() {
        history.push({ pathname: "/details" , state:data})
    }
    return (
        <>
            <div className='container'>
                <video autoPlay loop muted>
                    <source src="C:\Users\hp world\Desktop\aquera\aquera\aquera\src\photoes\vedio.mp4" type="video/mp4" />
                </video>
                <div className={headerAnimation ? 'header zoom-out' : 'header'}>
                    Welcome to the world of Planets!!

                </div>
                <div className='inner-container'>

                    {
                        url.length && planetInfo.length ?
                            (
                                planetInfo?.map((itm, indx) => {
                                    return <button className='button' onClick={ClickHandler} >

                                        <MagazineCard item={itm} key={indx + 1} width='100' src={url[indx]} />

                                    </button>
                                })

                            )
                            :
                            <CircularProgress />
                    }
                    <div className='pagination'>

                        <Pagination />
                    </div>




                </div>

            </div>
        </>
    );
}

export default Home;
