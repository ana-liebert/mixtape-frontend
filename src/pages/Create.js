import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

function Create(props) {

    const navigate = useNavigate()

    const [newForm, setNewForm] = useState({
        title: "",
        description: "",
        // host: "",
        host: "6",
        genre: [10],
        image: "",
        soundcloudplayer: "",
        // creator: "",
        creator: "1",
        tracklist: "",

    })
    console.log(newForm)

    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const [genreInput, setGenreInput] = useState({
        genre: [4]
    });

    const handleSubmit = event => {
        event.preventDefault()
        props.createMix(newForm)
        props.createGenre(genreInput)
        navigate("/")
    }

    return (
        <section>
            <Form className="update">
                <h1>New mix</h1>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={newForm.title}
                        name="title"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={newForm.description}
                        name="description"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control
                        // type="text"
                        type="hidden"
                        // value={newForm.host}
                        value="6"
                        name="host"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        value={newForm.image}
                        name="image"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>soundcloudplayer</Form.Label>
                    <Form.Control
                        type="text"
                        value={newForm.soundcloudplayer}
                        name="soundcloudplayer"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control
                        // type="text"
                        type="hidden"
                        // value={newForm.creator}
                        value="1"
                        name="creator"
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

                {/* <select multiple value={[newForm.genre]} name="genre" onChange={handleChange}>

                    {props.genres.map(
                        (genre) => <option key={genre.id} value={[genre.id]}>
                            {genre.name}
                        </option>
                    )}
                    </select>  */}

                <br>
                </br>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>

            </Form>

        </section>
    )

}

export default Create
