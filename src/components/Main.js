import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import UpdateDelete from "../pages/UpdateDelete";
import Register from "./Register";



function Main(props) {

    const [mixes, setMixes] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setMixes(data);
    };

    const [genres, setGenres] = useState(null);

    const URLGENRE = "https://aliebert-mixtape.herokuapp.com/mixtape/discover/";

    const getGenres = async () => {
        const response = await fetch(URLGENRE);
        const data = await response.json();
        setGenres(data);
    };

    const createMix = async mix => {
        console.log(mix)
        await fetch(URL ,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        });
        getMixes();
    };


    const createGenre = async genre => {
        
        await fetch(URL ,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.loads(genre),
        });
        getGenres();
    };



    const updateMix = async (mix, id) => {
        await fetch(URL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        })
        getMixes()
    }




    const deleteMix = async (mix, id) => {
        console.log("id inside the function", id)
        await fetch(URL + id + "/", {
            method: "delete",
            })
        getMixes()
    }





    useEffect(() => getMixes(), []);
    useEffect(() => getGenres(), []);


    return (
        <main>
            <Routes>
                <Route path="" element={<Home mixes={mixes} genres={genres}/>} />
                <Route path="/mixes/create" element={<Create createMix={createMix} genres={genres} createGenre={createGenre} />}/>
                <Route path="/mixes/update/:id" element={<UpdateDelete genres={genres} deleteMix={deleteMix} updateMix={updateMix} />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </main>
    );
}

export default Main