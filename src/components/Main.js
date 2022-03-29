import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import UpdateDelete from "../pages/UpdateDelete";
import Register from "./Register";



function Main(props) {

    const [mixes, setMixes] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";
    // const URL = "http://localhost:8000/mixtape/mixes/";

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data)
        setMixes(data);
    };

    const [genres, setGenres] = useState(null);

    const URLGENRE = "https://aliebert-mixtape.herokuapp.com/mixtape/discover/";
    // const URLGENRE = "http://localhost:8000/mixtape/discover/";

    const getGenres = async () => {
        const response = await fetch(URLGENRE);
        const data = await response.json();
        setGenres(data);
        console.log("genre data", data)
    };

    const createMix = async mix => {
        console.log(mix)
        console.log(mix.title)
        await fetch(URL ,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        });
        // update list
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
        // update list
        getGenres();
    };



    const updateMix = async (mix, id) => {
        // make put request
        // console.log("this is the mix to stringify", mix)
        // console.log(id)
        await fetch(URL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        })
        // update list
        getMixes()
    }




    const deleteMix = async (mix, id) => {
        console.log("id inside the function", id)
        // make delete request to create people
        await fetch(URL + id + "/", {
            method: "delete",
            })
        // update list
        getMixes()
    }





    useEffect(() => getMixes(), []);
    useEffect(() => getGenres(), []);
    // need this for the fetch to actually show any data
    


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