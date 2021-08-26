import React from "react";

const AddMovie = ({ addMovie }) => {
  const [name, setName] = React.useState();
  const [year, setYear] = React.useState();
  const [director, setDirector] = React.useState();

  function createMovie(event) {
    event.preventDefault();
    console.log("");
    const movie = {
      film: name,
      year: year,
      director: director,
    };
    addMovie(movie);

    setName("");
    setYear("");
    setDirector("");
  }

  return (
    <form onSubmit={createMovie}>
      <input
        type="text"
        placeholder="film name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="film year"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />
      <input
        type="text"
        placeholder="film director"
        value={director}
        onChange={(event) => setDirector(event.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
