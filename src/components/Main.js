import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Mixes from "../pages/Mixes";
import MixDetail from "../pages/MixDetail";
import Create from "../pages/Create";


function Main(props) {
    const [mixes, setMixes] = useState(null);

    const URL = "http://localhost:8000/mixtape/";

    const getMixes = async () => {
        const response = await fetch(URL + "mixes");
        const data = await response.json();
        console.log(data)
        setMixes(data);
    };

    const createMix = async mix => {
        // make post request to create
        await fetch(URL + "mixes/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(mix),
        });
        // update list
        getMixes();
    };

    useEffect(() => getMixes(), []);


    return (
        <main>
            <Routes>
                <Route path="/mixes" element={<Mixes mixes={mixes}/>} />
                <Route path="/mixes/create" element={<Create createMix={createMix} />}/>
                <Route path="/mixes/:id" element={<MixDetail />}/>
            </Routes>
        </main>
    );
}

export default Main