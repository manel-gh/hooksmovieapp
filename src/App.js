import React, { useState } from "react";
import './App.css';
import { moviesData } from "./Constants/Data"
import Navbar from "./Components/Navbar/Navbar"
import MovieList from "./Components/MovieList/MovieList"
import Add from "./Components/Add/Add"
import Footer from "./Components/Footer/Footer";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <Navbar
        setSearchText={setSearchTitle}
        setSearchRating={setSearchRating}
        searchRating={searchRating}
      />

      <div
        style={{ display: "flex", alignContent: "flex-start", marginTop: "5%" }}
      >
        <Add handleMovie={handleMovie} />
        <MovieList
          movies={movies}
          searchTitle={searchTitle}
          searchRating={searchRating}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
