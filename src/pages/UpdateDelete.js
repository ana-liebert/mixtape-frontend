import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function UpdateDelete(props) {
    const [mixes, setMixes] = useState(null);

    const navigate = useNavigate()

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";
    const URL = "http://localhost:8000/mixtape/mixes/";
    let thisMix
    const mixId = useParams()
    const foundId = Number(mixId.id)
    console.log(foundId)

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        thisMix = data.find(mix => mix.id === foundId)
        console.log("this is the found mix", thisMix)
        setMixes(thisMix);
    };

    console.log("updated state of mixes ---------->", mixes)


    const [editForm, setEditForm] = useState({
            title: "",
            description: "",
            host: "",
            genre: [1],
            image: "",
            soundcloudplayer: "",
            creator: "",
    })

    const [genreInput, setGenreInput] = useState({ genre: [1]})
    

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateMix(editForm, mixes.id)
        navigate(`/mixes/${mixes.id}`)
    }

    

    console.log("mix to remove", mixes)
    const removeMix = () => {
        props.deleteMix(mixes, mixes.id)
        navigate("/mixes")
    }



    useEffect(() => getMixes(), []);

    const loaded = () => {
        return (
            <div>
                <img src={mixes.image} />
                <h1>{mixes.title}</h1>
                <p>{mixes.description}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={editForm.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.description}
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.host}
                        name="host"
                        placeholder={mixes.host}
                        onChange={handleChange}
                    />
                     <label>
                Select genre tags
                </label>
                {/* this only works when page is already loaded and then you add it in?? */}
                <select multiple onChange={(event) => setGenreInput(event.target.value)} value={genreInput}>
                    
                    {props.genres.map(
                        (genre) => <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    )}
                </select>
                    <input
                        type="text"
                        value={editForm.image}
                        name="image"
                        placeholder="image"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.soundcloudplayer}
                        name="soundcloudplayer"
                        placeholder="soundcloudplayer"
                        onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editForm.creator}
                    name="creator"
                    placeholder="creator"
                    onChange={handleChange}
                />
                    <input type="submit" value="Update Mix" />
                </form>
                <button id="delete" onClick={removeMix}>DELETE</button>
            </div>
        )
    }
    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return mixes ? loaded() : loading()

}

export default UpdateDelete