import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function MixDetail(props) {
    const [mixes, setMixes] = useState(null);

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
    

    useEffect(() => {
        getMixes()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    const loaded = () => {

        if (props.credentials) {
            return (
                <div className="mix-detail">
                    <img className="carousel-image" alt={mixes.title} src={mixes.image}/>
                    <iframe className="iframe" width="100%" height="20" scrolling="no" frameBorder="no" title="mixtape" src={mixes.soundcloudplayer}></iframe>
                    <h1 className="mix-detail-title">{mixes.title}</h1> 
                    <p className="mix-test">{mixes.description}</p>
    
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
                    <img className="carousel-image" alt={mixes.title} src={mixes.image}/>
                    <iframe className="iframe" width="100%" height="20" scrolling="no" frameBorder="no" title="mixtape" src={mixes.soundcloudplayer}></iframe>
                    <h1 className="mix-detail-title">{mixes.title}</h1> 
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