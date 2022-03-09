import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";


function Mixes(props) {
    console.log("these are the props", props)
    // loaded function
    const loaded = () => {
      return props.mixes.map((mix) => (
        <div key={mix._id} className="mix">
            <img src={mix.image} alt={mix.title}/>
          <Link to={`/mixes/${mix.id}`}><h1>{mix.title}</h1></Link>
          <h3>{mix.description}</h3>
          <h3></h3>
        </div>
      ));
    };
  
    const loading = () => {
      return <h1>Loading...</h1>;
    };
    return props.mixes ? loaded() : loading()
  
  }


export default Mixes