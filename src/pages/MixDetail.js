import React from "react"
import {useParams} from "react-router-dom"


function MixDetail(props) {
    const mixId = useParams()
    const foundId = Number(mixId.id)
    console.log(foundId)
    let thisMix = props.mixes.find(taco => taco._id === foundId)
    console.log("this is the found mix", thisMix)
    
    return (
        <div>
            <h1>{thisMix.title}</h1> 
            <p>{thisMix.description}</p>
        </div>
    )
}

export default MixDetail