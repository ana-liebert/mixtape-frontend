import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'

function Home(props) {

  const loaded = () => {
    return (
      <div>
        <Carousel className="carousel-container car-contain">
          {props.mixes.map((mix) => {
            return (
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image"
                  key={mix.id}
                  src={mix.image}
                  alt={mix.title} />
                <Carousel.Caption>
                  <div className="carousel-caption">
                    <Link to={`/mixes/${mix.id}`}><h1 className="carousel-text">{mix.title}</h1></Link>
                    <h3 className="carousel-text">{mix.description}</h3>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>


        <div className="container">
          <h1 className="genre-text-head">Recent Mixes</h1>
          <div className="row">
            {props.mixes.map((mix) => {
              return (
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="card mixcard" key={mix.id}>
                    <Link to={`/mixes/${mix.id}`}><h1 className="cardtitle">{mix.title}</h1></Link>
                    <p className="description">{mix.description}</p>
                    <img className="mixcard-image" src={mix.image} alt={mix.title} />

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