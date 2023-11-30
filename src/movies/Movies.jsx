import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTrue } from "../helper";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  console.log(useMovies("https://api.themoviedb.org/3/discover/movie?with_genres=53"))

  useEffect(() => {
    if (selectTrue(store.genre).length < 3) {
      navigate("/genre");
    } else if (!store.user) {
      navigate("/register");
    }
  }, []);

  return <div>Movie</div>;
};

export default Movies;
