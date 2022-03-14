import { useState } from "react"

function Create(props) {
    console.log("genre props to map through", props.genres)
    
    // state to hold formData
    const [newForm, setNewForm] = useState({
            title: "",
            description: "",
            host: "",
            genre: "",
            image: "",
            soundcloudplayer: "",
            creator: "",
            
    })
    console.log(newForm)

    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const [genreInput, setGenre] = useState({
        genre: []
    });


    // const options = [
    //     {label: "Post Punk", value: "1"},
    //     {label: "Synth Pop", value: "2"},
    // ]

// const options = props.genres.map(
//     (genre) => <option key={genre.id} value={genre.id}>
//         {genre.name} </option>
//         )
    
    
    const handleSubmit = event => {
        event.preventDefault()
        props.createMix(newForm)
        props.createGenre(genreInput)
        // how can i get specific genre change in new form? 
        setNewForm({
            title: "",
            description: "",
            host: "",
            genre: "",
            image: "",
            soundcloudplayer: "",
            creator: "",
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.host}
                    name="host"
                    placeholder="host"
                    onChange={handleChange}
                />

                <label>
                Select genre tags
                </label>
                <select onChange={(event) => setGenre(event.target.value)} value={genreInput}>
                    
                    {props.genres.map(
                        (genre) => <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    )}
                </select>

                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.soundcloudplayer}
                    name="soundcloudplayer"
                    placeholder="soundcloudplayer"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.creator}
                    name="creator"
                    placeholder="creator"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Mix" />
            </form>
            </section>
    )
}

export default Create

