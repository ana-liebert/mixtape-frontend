import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'



function Home(props) {
    console.log("these are the props", props)
    // loaded function
    const loaded = () => {
      return (
      <div>
            <Carousel className="carousel-container">
              {props.mixes.map((mix) => {
                    return (
              <Carousel.Item interval={2000}>
                      <img className="d-block w-100 cover-image"
                      src={mix.image} 
                      alt={mix.title}/>
              <Carousel.Caption>
                <div className="carousel-caption">
                <h3 className="carousel-text">{mix.title}</h3>
                <h3 className="carousel-text">{mix.description}</h3>
                </div>
                </Carousel.Caption>
              </Carousel.Item>
                      )
                    })}
            </Carousel>


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