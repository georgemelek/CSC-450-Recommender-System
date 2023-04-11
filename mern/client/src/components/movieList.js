import React, { useEffect, useState } from "react";
import Row from "./Row";
import requests from "../requests";

const Movie = (props) => (
  <tr>
    {/* <td>{props.movie.name}</td>
    <td>{props.movie.position}</td>
    <td>{props.movie.level}</td> */}
    <td>{props.movie.title}</td>
    <td>{props.movie.release_year}</td>
    <td>{props.movie.type}</td>
    <td>{props.movie.director}</td>
    <td>{props.movie.cast}</td>
    <td>{props.movie.onPrime}</td>
    <td>{props.movie.onDisney}</td>
    <td>{props.movie.onHulu}</td>
    <td>{props.movie.onNetflix}</td>
    <td>{props.movie.rating}</td>
    <td>{props.movie.duration}</td>
    <td>{props.movie.listed_in}</td>
    <td>{props.movie.description}</td>
  </tr>
);

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  // This method fetches the movies from the database.
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(`http://localhost:5000/movie/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const movies = await response.json();
      setMovies(movies);
    }

    getMovies();

    return;
  }, [movies.length]);

  // This method will map out the movies on the table
  function movieList() {
    return movies.map((movie) => {
      return <Movie movie={movie} key={movie._id} />;
    });
  }

  return (
    <div>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />

      {/* This following section will display the table with the movies */}
      <h3>Movie List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Year</th>
            <th>Type</th>
            <th>Director</th>
            <th>Cast</th>
            <th>On Prime?</th>
            <th>On Disney? </th>
            <th>On Hulu?</th>
            <th>On Netflix?</th>
            <th>Rating</th>
            <th>Duration</th>
            <th>Listed In</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{movieList()}</tbody>
      </table>
    </div>
  );
}
