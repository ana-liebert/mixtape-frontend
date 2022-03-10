import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "../pages/Home";
import MixDetail from "../pages/MixDetail";
import Create from "../pages/Create";
import UpdateDelete from "../pages/UpdateDelete";


function Main(props) {
    const [mixes, setMixes] = useState(null);

    const URL = "http://localhost:8000/mixtape/mixes";

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setMixes(data);
    };

    const createMix = async mix => {
        // make post request to create
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(mix),
        });
        // update list
        getMixes();
    };


    const updateMix = async (id, mix) => {
        // make put request
        console.log(mix)
        console.log(id)
        await fetch(URL + "update/" + id , {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        })
        // update list
        getMixes()
    }




    const deleteMix = async id => {
        // make delete request to create people
        await fetch(URL + "mixes/update/" + id , {
            method: "delete",
            })
        // update list
        getMixes()
    }


    useEffect(() => getMixes(), []);


    return (
        <main>
            <Routes>
                <Route path="/mixes" element={<Home mixes={mixes}/>} />
                <Route path="/mixes/create" element={<Create createMix={createMix} />}/>
                <Route path="/mixes/:id" element={<MixDetail />}/>
                <Route path="/mixes//update/:id" element={<UpdateDelete deleteMix={deleteMix} updateMix={updateMix} />}/>
            </Routes>
        </main>
    );
}

export default Main