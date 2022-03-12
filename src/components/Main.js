import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "../pages/Home";
import MixDetail from "../pages/MixDetail";
import Create from "../pages/Create";
import UpdateDelete from "../pages/UpdateDelete";
import Catchall from "./Catchall";
// import { rj, useRunRj } from 'react-rocketjump'
import { ajax } from 'rxjs/ajax'
// import { useAuthActions, useAuthUser } from 'use-eazy-auth'
import Login from "../pages/Login";

// const MixState = rj({
//     effectCaller: rj.configured(),
//     effect: (token) => (search = '') =>
//     //   ajax.getJSON(`/api/contacts/?search=${search}`, {
//         ajax.getJSON("http://localhost:8000/mixtape/mixes/", {
//         Authorization: `Bearer ${token}`,
//       }),
//   })

function Main(props) {

    // const [{ data: themixes }] = useRunRj(MixState)
    const [mixes, setMixes] = useState(null);

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";
    const URL = "http://localhost:8000/mixtape/mixes/";

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data)
        setMixes(data);
    };

    const createMix = async mix => {
        
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


    const updateMix = async (mix, id) => {
        // make put request
        // console.log("this is the mix to stringify", mix)
        // console.log(id)
        await fetch(URL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            // body: mix
            // body: JSON.stringify(mix),
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


    return (
        <main>
            <Routes>
                <Route path="/" element={<Catchall />} />
                <Route path="/mixes" element={<Home mixes={mixes}/>} />
                <Route path="/mixes/create" element={<Create createMix={createMix} />}/>
                <Route path="/mixes/:id" element={<MixDetail />}/>
                <Route path="/mixes/update/:id" element={<UpdateDelete deleteMix={deleteMix} updateMix={updateMix} />}/>
            </Routes>
        </main>
    );
}

export default Main