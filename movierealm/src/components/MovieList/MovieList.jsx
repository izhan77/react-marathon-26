import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "../MovieCard/MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ title, name, emoji }) => {
  const [active, setActive] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const sortedMovies = _.orderBy(filteredMoviesData, [sort.by], [sort.order]);
    setFilteredMoviesData(sortedMovies);
  }, [sort]);

  const handleActive = (rating) => {
    if (active === rating) {
      setActive(null);

      setFilteredMoviesData(moviesData);
    } else {
      setActive(rating);

      const filteredMovies = moviesData.filter(
        (movie) => movie.vote_average >= rating,
      );

      setFilteredMoviesData(filteredMovies);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${title}?api_key=${import.meta.env.VITE_API_KEY}`,
      );

      const data = await response.json();

      setMoviesData(data.results);
      setFilteredMoviesData(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="movie_list" id={title}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {name}{" "}
          <img src={emoji} alt={`${emoji} emoji`} className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup handleActive={handleActive} active={active} />

          <select onChange={handleSort} name="by" className="movie_sorting">
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select onChange={handleSort} name="order" className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredMoviesData.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
