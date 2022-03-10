import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function UpdateDelete(props) {
    const [mixes, setMixes] = useState(null);

    const URL = "http://localhost:8000/mixtape/";
    let thisMix
    const mixId = useParams()
    const foundId = Number(mixId.id)
    console.log(foundId)

    const getMixes = async () => {
        const response = await fetch(URL + "mixes");
        const data = await response.json();
        console.log(data)
        
        thisMix = data.find(taco => taco.id === foundId)
        setMixes(thisMix);
        console.log("this is the found mix", thisMix)
    };


    const [editForm, setEditForm] = useState(mixes)

    const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }
  
    const handleSubmit = event => {
      event.preventDefault()
      props.updateMix(editForm)
      props.history.push("/")
    }
  
    const removeMix= () => {
        console.log("mix to remove", mixes)
      props.deleteMix(mixes)
      props.history.push("/")
    }



    useEffect(() => getMixes(), []);

    const loaded = () => {
        return (
            <div>
                <img src={mixes.image}/>
                <h1>{mixes.title}</h1> 
                <p>{mixes.description}</p>
                

                <button id="delete" onClick={removeMix}>DELETE</button> 
      {/* <form onSubmit={handleSubmit}>
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
                    placeholder="host"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.genre}
                    name="genre"
                    placeholder="genre"
                    onChange={handleChange}
                />
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
                <input
                    type="array"
                    value={editForm.tracklist}
                    name="tracklist"
                    placeholder="tracklist"
                    onChange={handleChange}
                />
        <input type="submit" value="Update Mix" />
      </form> */} 
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