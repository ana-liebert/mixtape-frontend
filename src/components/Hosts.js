import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HostIndex from '../pages/HostIndex'
import HostDetail from '../pages/HostDetail'


function Hosts(props) {
    const [hosts, setHosts] = useState(null);

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";
    const URL = "http://localhost:8000/mixtape/";

    const getHosts = async () => {
        const response = await fetch(URL + "hosts");
        const data = await response.json();
        // console.log(data)
        setHosts(data);
    };

    useEffect(() => getHosts(), []);

    return (
        <main>
            <Routes>
                <Route path="/hosts" element={<HostIndex hosts={hosts}/>} />
                <Route path="/hosts/:id" element={<HostDetail />}/> 
            </Routes>
        </main>
    );
}

export default Hosts