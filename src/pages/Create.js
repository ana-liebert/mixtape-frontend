import { useState } from "react"

function Create(props) {
    // state to hold formData
    console.log(props)
    const [newForm, setNewForm] = useState({
            title: "",
            description: "",
            host: "",
            genre: "",
            image: "",
            soundcloudplayer: "",
            soundcloudlink: "",
            soundclouduser: "",
            
    })
    console.log(newForm)
    // handleChange function for form
    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    // handle submit function for form
    const handleSubmit = event => {
        event.preventDefault()
        props.createMix(newForm)
        setNewForm({
            title: "",
            description: "",
            host: "",
            genre: "",
            image: "",
            soundcloudplayer: "",
            soundcloudlink: "",
            soundclouduser: "",
           
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
                <input
                    type="number"
                    value={Number(newForm.genre)}
                    name="genre"
                    placeholder="genre"
                    onChange={handleChange}
                />
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
                    value={newForm.soundcloudlink}
                    name="soundcloudlink"
                    placeholder="soundcloudlink"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.soundclouduser}
                    name="soundclouduser"
                    placeholder="soundclouduser"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Mix" />
            </form>
            {console.log("final form", newForm)}
        </section>
    )
}

export default Create