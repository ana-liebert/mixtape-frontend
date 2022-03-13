import React from "react";
import Genre from "./Genre";
import {useState} from 'react'



const DropDown = () => {
  const [genre, setGenre] = useState({
      genre: []
  });
  
  return (
    <div>
        <h2>Select genre</h2> 
        <Genre
          genreInput={genre}
          genreSelects={(genre) => setGenre(genre.map((genre) => genre.value))}
        />
    </div>
  
  );
};

export default DropDown;