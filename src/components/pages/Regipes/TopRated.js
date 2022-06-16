import React, {useState} from 'react';
import axios from "axios"
import {APIKEY} from "../../lib/ApiKey"
const TopRated = () => {
    const [topRated,setTopRated] = useState([])
    const getTopRated = async ()=>{
        const url = await   axios (`https://developers.themoviedb.org/3/movies/get-top-rated-movies`)
    }





    return (
        <div>

        </div>
    );
};

export default TopRated;