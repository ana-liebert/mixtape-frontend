import React from 'react';
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel'


function Home(props) {
    console.log("these are the props", props)
    // loaded function
    const loaded = () => {
      return (
        <div>
          <h1>Featured Mixes</h1>
          <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    {props.mixes.map((mix) => {
                    return (
                      <img className="d-block w-100" src={mix.image} alt={mix.title}/>
                      )
                    })};
            </div>
            </div>
            </div>
          

      

          <div className="container">
            <div className="row">
          {props.mixes.map((mix) => {
            return (
              <div className="col-md-4 col-sm-6">
                  <div className="card mixcard" key={mix.id}>
                  <Link to={`/mixes/${mix.id}`}><h1>{mix.title}</h1></Link>
                  <p>{mix.description}</p>
                  <img src={mix.image} alt={mix.title}/>

                    {mix.genre.map((gID) => {
                      return (
                        <div>
                          {console.log("genre id:", gID)}
                          <p key={gID}>{gID.name}</p>
                          </div>
                      )
                    })}
                  </div>
          </div>
            )
          })}
          </div>
          </div>
        </div>
      )

      
    };
  
    const loading = () => {
      return <h1>Loading...</h1>;
    };
    return props.mixes ? loaded() : loading()
  
  }


export default Home