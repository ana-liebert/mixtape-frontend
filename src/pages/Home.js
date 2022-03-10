import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";


function Home(props) {
    console.log("these are the props", props)
    // loaded function
    const loaded = () => {
          return props.mixes.map((mix) => (
      <div class="container-fluid cover-image">
          <div class="row">
            <div class="col">
              <h1>Featured Mixes</h1>
              <img class="cover-image" src={mix.image}/>
            </div>
          </div>
        <div class="row" key={mix._id} className="mix">
          <div class="col card home-card">
            <img src={mix.image} alt={mix.title}/>
          <Link to={`/mixes/${mix.id}`}><h1>{mix.title}</h1></Link>
          <h3>{mix.description}</h3>
          </div>
        </div>
        </div>
      ));
    };
  
    const loading = () => {
      return <h1>Loading...</h1>;
    };
    return props.mixes ? loaded() : loading()
  
  }


export default Home