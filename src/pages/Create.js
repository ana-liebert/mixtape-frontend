import { useState } from "react"
// import DropDown from "../components/DropDown"
import propTypes from 'prop-types'
import Select from "react-dropdown-select";


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

    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const [genreInput, setGenre] = useState({
        genre: []
    });

    const handleGenreChange = event => {
        setGenre(...genreInput, genreInput.map((genre) => genre.value))
    }

    const options = [
        {label: "Post Punk", value: "1"},
        {label: "Synth Pop", value: "2"},
    ]
    
    
    const handleSubmit = event => {
        event.preventDefault()
        props.createMix(newForm)
        // props.createMix(newForm, setGenre)
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
               {/* <label>
                Select genre tags
                <select multiple={true} name="genre" value={[newForm.value]} onChange={handleChange}>
                    <option value="1">Post Punk</option>
                    <option value="2">Club</option>
                    <option value="3">Drum and Bass</option>
                    <option value="4">Synth Pop</option>
                </select>
                </label> */}
                <label>
                Select genre tags
                <Select
                    value={genreInput.genre}
                    options={options}
                    placeholder="Select your genre tags"
                    onChange={handleGenreChange}
                    />
                </label>
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
            </section>
        // <section>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             value={newForm.title}
        //             name="title"
        //             placeholder="title"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="text"
        //             value={newForm.description}
        //             name="description"
        //             placeholder="description"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="text"
        //             value={newForm.host}
        //             name="host"
        //             placeholder="host"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="number"
        //             value={Number(newForm.genre)}
        //             name="genre"
        //             placeholder="genre"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="text"
        //             value={newForm.image}
        //             name="image"
        //             placeholder="image"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="text"
        //             value={newForm.soundcloudplayer}
        //             name="soundcloudplayer"
        //             placeholder="soundcloudplayer"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="text"
        //             value={newForm.soundcloudlink}
        //             name="soundcloudlink"
        //             placeholder="soundcloudlink"
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="text"
        //             value={newForm.soundclouduser}
        //             name="soundclouduser"
        //             placeholder="soundclouduser"
        //             onChange={handleChange}
        //         />
        //         <input type="submit" value="Create Mix" />
        //     </form>
            // {console.log("final form", newForm)}
        // </section>
    )
}

export default Create


Create.propTypes = {
    genre: propTypes.array,
    setGenre: propTypes.func,
};