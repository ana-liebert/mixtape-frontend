import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function UpdateDelete(props) {
    const [mixes, setMixes] = useState(null);

    const navigate = useNavigate()

    const URL = "http://localhost:8000/mixtape/mixes";
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


    const [editForm, setEditForm] = useState("")
    

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
                    {/* <input
                        type="text"
                        value={editForm.genre}
                        name="genre"
                        placeholder={mixes.genre}
                        onChange={handleChange}
                    /> */}
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
                        value={editForm.soundcloudlink}
                        name="soundcloudlink"
                        placeholder="soundcloudlink"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.soundclouduser}
                        name="soundclouduser"
                        placeholder="soundclouduser"
                        onChange={handleChange}
                    />
                    {/* <input
                        type="text"
                        value={editForm.tracklist}
                        name="tracklist"
                        placeholder={mixes.tracklist}
                        onChange={handleChange}
                    /> */}
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