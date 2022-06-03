import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

function Create(props) {

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [host, setHost] = useState();
    const [genre, setGenre] = useState([]);
    const [image, setImage] = useState("");
    const [soundcloudplayer, setSoundcloud] = useState("");
    const creator = props.userID
    const tracklist = ""
    //to-do:remove


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
        props.createMix(mix)
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


                <Form.Group >
                    <Form.Label>Host</Form.Label>
                    <Form.Select
                        onChange={e => setHost(e.target.value)} >
                        {props.hosts.map(
                            (host) => <option key={host.id} value={[host.id]}>
                                {host.name}
                            </option>
                        )}
                    </Form.Select>
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

                <Form.Group>
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
