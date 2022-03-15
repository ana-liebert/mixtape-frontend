import { useState, useEffect } from "react"


function Create(props) {


    const [mixes, setMixes] = useState(null);


    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";
    const URL = "http://localhost:8000/mixtape/mixes/";


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
            genre: [1],
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
        genre: [1]
    });

    useEffect(() => getMixes(), []);

    const Timer =()=>{
        useEffect( ()=>{
           console.log("hello");
           setTimeout( ()=>{ alert("hello"); }, 2000);
        }, [] );
     }


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
        console.log(newForm.genre)
        props.createMix(newForm)
        // props.createGenre(genreInput)
        // how can i get specific genre change in new form? 
        setNewForm({
            title: "",
            description: "",
            host: "",
            genre: [1],
            image: "",
            soundcloudplayer: "",
            creator: "",
            tracklist: "",
        })
    }

    const loaded = () => {
        return (
        <section>
           {/* {Timer()} */}
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
                {/* this only works when page is already loaded and then you add it in?? */}
                
                <select onChange={(event) => setGenreInput(event.target.value)} value={genreInput}>
            
                    {props.genres.map(
                        (genre) => <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    )}
                
                </select>

                {/* <select id="dropdown">
                    
                    <option value={newForm.genre} onChange={handleGenreChange}>1</option>
                    <option value={newForm.genre} onChange={handleGenreChange}>2</option>
                    <option value={newForm.genre} onChange={handleGenreChange}>3</option>
                </select> */}

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
                <input
                    type="textarea"
                    value={newForm.tracklist}
                    name="tracklist"
                    placeholder="tracklist"
                    onChange={handleChange}
                />



                <input type="submit" value="Create Mix" />
            </form>
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

