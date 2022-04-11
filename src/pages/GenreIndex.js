import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function GenreIndex(props) {

    const [mixes, setMixes] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";

    let foundMixes
    const genreId = useParams()
    const foundGenreId = Number(genreId.id)

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        foundMixes = data.filter((filtered) => {
            return filtered.genre.includes(foundGenreId)
        })
        setMixes(foundMixes);
    };

    useEffect(() => {
        getMixes()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps



    const loaded = () => {


        if (mixes.length < 1) {
            return (
                <h1 className="mix-test">No mixes tagged with this genre yet. Check out some others!</h1>
            )
        }

        return (
            <div className="container genre-container">
                <div className="row">
                    {mixes.map((mix) => {
                        return (
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mycol">
                                <div className="card host-card" key={mix.id}>
                                    <Link to={`/mixes/${mix.id}`}><h1>{mix.title}</h1></Link>
                                    <p>{mix.description}</p>
                                    <img class="host-img" src={mix.image} alt={mix.title} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return mixes ? loaded() : loading()
}

export default GenreIndex