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

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        thisMix = data.find(mix => mix.id === foundId)
        setMixes(thisMix);
    };


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const host = 6;
    const [genre, setGenre] = useState([]);
    const [image, setImage] = useState("");
    const [soundcloudplayer, setSoundcloud] = useState("");
    const creator = "1"
    const tracklist = ""


    const handleSubmit = event => {
        let mix = {
            title,
            description,
            host,
            genre,
            image,
            soundcloudplayer,
            creator,
            tracklist,
        };
        event.preventDefault()
        props.updateMix(mix, mixes.id)
        navigate("/")
    }


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
                <h1>{mixes.title}</h1>
                <img className="carousel-image" alt={mixes.title} src={mixes.image} />

                <Form>
                    <h1>Update</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            name="image"
                            onChange={e => setImage(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Soundcloud player</Form.Label>
                        <Form.Control
                            type="text"
                            name="soundcloudplayer"
                            onChange={e => setSoundcloud(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Genre</Form.Label>
                        <Form.Select
                            onChange={e => setGenre([e.target.value])} >
                            {props.genres.map(
                                (genre) => <option key={genre.id} value={[genre.id]}>
                                    {genre.name}
                                </option>
                            )}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button id="delete" onClick={removeMix}>Delete</Button>
                </Form>

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