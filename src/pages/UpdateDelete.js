import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';

function UpdateDelete(props) {
    const [mixes, setMixes] = useState(null);

    const navigate = useNavigate()

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";

    let thisMix
    const mixId = useParams()
    const foundId = Number(mixId.id)
    // console.log(foundId)

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        thisMix = data.find(mix => mix.id === foundId)
        // console.log("this is the found mix", thisMix)
        setMixes(thisMix);
    };

    // console.log("updated state of mixes ---------->", mixes)


    const [editForm, setEditForm] = useState({
        title: "",
        description: "",
        host: "6",
        genre: [7],
        image: "",
        soundcloudplayer: "",
        creator: "1",
        tracklist: "",
    })

    const [genreInput, setGenreInput] = useState({ genre: [7] })


    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateMix(editForm, mixes.id)
        navigate(`/mixes/${mixes.id}`)
    }



    // console.log("mix to remove", mixes)
    const removeMix = () => {
        props.deleteMix(mixes, mixes.id)
        navigate("/")
    }



    
    useEffect(() => {
        getMixes()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    const loaded = () => {
        return (
            <div className="update">
                <img alt="" src={mixes.image} />
                <h1>{mixes.title}</h1>
                <p>{mixes.description}</p>



                <Form>
                    <h1>Update</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={editForm.title}
                            name="title"
                            placeholder={mixes.title}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={editForm.description}
                            name="description"
                            placeholder={mixes.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        {/* <Form.Label>Host</Form.Label> */}
                        <Form.Control
                            type="hidden"
                            value="6"
                            name="host"
                            placeholder={mixes.host}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            value={editForm.image}
                            name="image"
                            placeholder={mixes.image}
                            onChange={handleChange}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                        <Form.Label>soundcloudplayer</Form.Label>
                        <Form.Control
                            type="text"
                            value={editForm.soundcloudplayer}
                            name="soundcloudplayer"
                            placeholder={mixes.soundcloudplayer}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        {/* <Form.Label>Creator</Form.Label> */}
                        <Form.Control
                            type="hidden"
                            value="1"
                            name="creator"
                            placeholder={mixes.creator}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <select multiple onChange={(event) => setGenreInput(event.target.value)} value={genreInput}>

                        {props.genres.map(
                            (genre) => <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        )}
                    </select>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button id="delete" onClick={removeMix}>Delete</Button>
                </Form>


                {/* <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={editForm.title}
                        name="title"
                        placeholder={mixes.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.description}
                        name="description"
                        placeholder={mixes.description}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.soundcloudplayer}
                        name="soundcloudplayer"
                        placeholder={mixes.soundcloudplayer}
                        onChange={handleChange}
                    />
                      <input
                        type="text"
                        value={editForm.tracklist}
                        name="tracklist"
                        placeholder={mixes.tracklist}
                        onChange={handleChange}
                    />
                    <label>
                Select genre tags
                </label>
                this only works when page is already loaded and then you add it in??
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
                        placeholder={mixes.image}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.soundcloudplayer}
                        name="soundcloudplayer"
                        placeholder={mixes.soundcloudplayer}
                        onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={editForm.creator}
                    name="creator"
                    placeholder={mixes.creator}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.tracklist}
                    name="tracklist"
                    placeholder={mixes.tracklist}
                    onChange={handleChange}
                />
                    <input type="submit" value="Update Mix" />
                </form>
                <button id="delete" onClick={removeMix}>DELETE</button> */}
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