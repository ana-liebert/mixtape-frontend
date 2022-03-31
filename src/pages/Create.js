import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

function Create(props) {


    const [mixes, setMixes] = useState(null);

    const navigate = useNavigate()


    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/create/";



    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setMixes(data);
    };

    console.log("genre props to map through", props.genres)

    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        description: "",
        host: "",
        genre: [4],
        image: "",
        soundcloudplayer: "",
        creator: "",
        tracklist: "",

    })
    console.log(newForm)


    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const [genreInput, setGenreInput] = useState({
        genre: [4]
    });

    useEffect(() => getMixes(), []);

    // const Timer =()=>{
    //     useEffect( ()=>{
    //        console.log("hello");
    //        setTimeout( ()=>{ alert("hello"); }, 2000);
    //     }, [] );
    //  }


    // const options = [
    //     {label: "Post Punk", value: "1"},
    //     {label: "Synth Pop", value: "2"},
    // ]

    // const options = props.genres.map(
    //     (genre) => <option key={genre.id} value={genre.id}>
    //         {genre.name} </option>
    //         )

    // const handleGenreChange = event => {
    //     console.log("this is the genre change", event.target)
    //     setGenreInput({[event.target.name]: event.target.value })
    // }


    const handleSubmit = event => {
        event.preventDefault()
        // console.log(newForm.genre)
        props.createMix(newForm)
        props.createGenre(genreInput)
        // setNewForm({
        //     title: "",
        //     description: "",
        //     host: "",
        //     genre: [4],
        //     image: "",
        //     soundcloudplayer: "",
        //     creator: "",
        //     tracklist: "",
        // })
        navigate("/")
    }

    const loaded = () => {
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
                            placeholder={mixes.title}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={newForm.description}
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
                            value={newForm.image}
                            name="image"
                            placeholder={mixes.image}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>soundcloudplayer</Form.Label>
                        <Form.Control
                            type="text"
                            value={newForm.soundcloudplayer}
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

                    <br>
                    </br>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>

                </Form>

            </section>
        )
    }

    const loading = () => {

        return (
            <h1>Loading...</h1>
        )
    }

    return mixes ? loaded() : loading()

}

export default Create

