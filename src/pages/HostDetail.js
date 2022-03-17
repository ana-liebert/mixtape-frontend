import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function HostDetail(props) {
    const [hosts, setHosts] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";
    // const URL = "http://localhost:8000/mixtape/";
    let foundHost
    const hostId = useParams()
    const foundHostId = Number(hostId.id)
    // console.log(foundHostId)

    const getHosts = async () => {
        const response = await fetch(URL + "hosts");
        const data = await response.json();
        // console.log(data)
        
        foundHost = data.find(host => host.id === foundHostId)
        setHosts(foundHost);
        // console.log("this is the found host", foundHost)
    };

    useEffect(() => getHosts());
    // removed the empty array ,[]

    const loaded = () => {
        return (
            <div>
                <img alt="" src={hosts.image}/>
                <h1>{hosts.name}</h1>
                <h1>{hosts.bio}</h1>
            </div>
        )
    }
    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return hosts ? loaded() : loading()
}

export default HostDetail