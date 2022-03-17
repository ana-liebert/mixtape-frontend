import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DiscoverPage from "../pages/DiscoverPage";
import GenreIndex from "../pages/GenreIndex";


function Discover(props) {
    const [genres, setGenres] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/discover/";
    // const URL = "http://localhost:8000/mixtape/discover";

    const getGenres = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data)
        setGenres(data);
    };

    useEffect(() => getGenres(), []);

    return (
        <main>
            <Routes>
                <Route path="/discover" element={<DiscoverPage genres={genres}/>} />
                <Route path="/discover/:id" element={<GenreIndex genres={genres} />}/> 
            </Routes>
        </main>
    );
}

export default Discover