import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function MixDetail(props) {
    const [mixes, setMixes] = useState(null);
    const [host, setHost] = useState([]);
    const [gnres, setGnres] = useState([]);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";


    let thisMix
    const mixId = useParams()
    const foundId = Number(mixId.id)

    const getMixes = async () => {
        const response = await fetch(URL + "mixes");
        const data = await response.json();

        thisMix = data.find(mix => mix.id === foundId)
        setMixes(thisMix);
    };


    const getHost = async () => {
        for (let i = 0; i < props.hosts.length; i++) {
            if (props.hosts[i].id === mixes.host) {
                setHost(props.hosts[i].name)
            }
        }
    }

    let result = []
    const getGenres = async () => {
        for (let i = 0; i < mixes.genre.length; i++) {
            for (let j = 0; j < props.genres.length; j++) {
                if (mixes.genre[i] === props.genres[j].id) {
                    result.push(props.genres[j].name)
                }
            }
        }
        setGnres(result)
        console.log(result)
    }



    useEffect(() => {
        getMixes()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getHost()
    }, [mixes]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getGenres()
    }, [mixes]) // eslint-disable-line react-hooks/exhaustive-deps

    const loaded = () => {

        if (props.credentials) {
            return (
                <div className="mix-detail">
                    <div className="mix-image">
                    <img className="carousel-image mix-image" alt={mixes.title} src={mixes.image} />
                    <iframe className="iframe" width="100%" height="20" scrolling="no" frameBorder="no" title="mixtape" src={mixes.soundcloudplayer}></iframe>
                    </div>
                    <h1 className="mix-detail-title">{mixes.title}</h1>
                    <div className="genre-container-mixpage">
                        <div className="row">
                        {gnres.map((gnre) => (
                            <div className="listed-genres col-xl-1 col-lg-2 col-md-2">{gnre}</div>
                        ))}
                        </div>
                    </div>
                    <p className="mix-test">{mixes.description}</p>
                    <p className="mix-test">Hosted by: <span className="host-link"> <Link to={`/hosts/${mixes.host}`}> {host}</Link> </span> </p>

                    <div className="buttons">
                        <Link to={`/mixes/update/${mixes.id}`}>
                            <Button id="update">Update</Button>
                        </Link>
                        <div>
                        </div>
                    </div>
                    <form>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div className="mix-detail">
                    <div className="mix-image">
                    <img className="carousel-image mix-image" alt={mixes.title} src={mixes.image} />
                    <div className="iframe-container">
                    <iframe className="iframe" width="100%" height="20" scrolling="no" frameBorder="no" title="mixtape" src={mixes.soundcloudplayer}></iframe>
                    </div>
                    </div>

                    <h1 className="mix-detail-title">{mixes.title}</h1>
                    <p className="mix-test">Hosted by <span className="host-link"> <Link to={`/hosts/${mixes.host}`}> {host}</Link> </span> </p>
                    <div className="genre-container-mixpage">
                        <div className="row">
                        {gnres.map((gnre) => (
                            <div className="listed-genres col-2">{gnre}</div>
                        ))}
                        </div>
                    </div>
                    
                    
                    <p className="mix-test">{mixes.description}</p>
                    
                    
                    
                </div>
            );
        }
    };


    const loading = () => {
        return (
            <h1 className="mixdetail-loading">Loading...</h1>
        )
    }
    return mixes ? loaded() : loading()

}

export default MixDetail