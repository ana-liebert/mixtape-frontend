import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function HostDetail(props) {
    const [hosts, setHosts] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";

    let foundHost
    const hostId = useParams()
    const foundHostId = Number(hostId.id)


    const getHosts = async () => {
        const response = await fetch(URL + "hosts");
        const data = await response.json();


        foundHost = data.find(host => host.id === foundHostId)
        setHosts(foundHost);

    };


    useEffect(() => {
        getHosts()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const loaded = () => {
        return (
            <div>
                <img className="carousel-image" alt={hosts.name} src={hosts.image} />
                <h1 className="host-head">{hosts.name}</h1>
                <h1 className="mix-test">{hosts.bio}</h1>
                <h1 className="mix-test">Mixtape schedule: {hosts.schedule}</h1>
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