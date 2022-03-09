import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import DiscoverPage from "../pages/DiscoverPage";
import GenreIndex from "../pages/GenreIndex";


function Hosts(props) {
    const [genres, setGenres] = useState(null);

    const URL = "http://localhost:8000/mixtape/";

    const getGenres = async () => {
        const response = await fetch(URL + "discover");
        const data = await response.json();
        console.log(data)
        setGenres(data);
    };

    useEffect(() => getGenres(), []);

    return (
        <main>
            <Routes>
                <Route path="/discover" element={<DiscoverPage genres={genres}/>} />
                <Route path="/discover/:id" element={<GenreIndex />}/> 
            </Routes>
        </main>
    );
}

export default Hosts