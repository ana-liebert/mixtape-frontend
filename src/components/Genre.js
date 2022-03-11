import React from "react";
import Select from "react-dropdown-select";
import propTypes from "prop-types";

const Genre = ({ genreInput, genreSelects }) => {
    const options = [
        {label: "Post Punk", value: "1"},
        {label: "Synth Pop", value: "2"},
    ]

  return (
    <React.Fragment>
        <label>Genre</label>
        <Select
          value={genreInput}
          options={options}
          placeholder="Select your genre tags"
          onChange={genreSelects}
        />
    </React.Fragment>
  );
};

export default Genre;

Genre.propTypes = {
    genreInput: propTypes.array.isRequired,
    genreSelects: propTypes.func.isRequired,
};