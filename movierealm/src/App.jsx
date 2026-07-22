import React from "react";
import { Route, Routes } from "react-router-dom";

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

      <Routes>
        <Route
          path="/"
          element={<MovieList title="popular" name="Popular" emoji={Fire} />}
        />
        <Route
          path="/top_rated"
          element={
            <MovieList title="top_rated" name="Top Rated" emoji={Star} />
          }
        />
        <Route
          path="/upcoming"
          element={<MovieList title="upcoming" name="Upcoming" emoji={Party} />}
        />
      </Routes>
    </div>
  );
};

export default App;
