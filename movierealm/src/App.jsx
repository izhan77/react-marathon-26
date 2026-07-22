import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Party from "./assets/partying-face.png";
import Star from "./assets/glowing-star.png";
import Fire from "./assets/fire.png";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList title="popular" name="Popular" emoji={Fire} />
      <MovieList title="top_rated" name="Top Rated" emoji={Star} />
      <MovieList title="upcoming" name="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;
