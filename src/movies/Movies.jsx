import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectTrue } from "../helper";
import useMovies from "../hooks/useMovies";
import { Heading } from "../styled";
import pfp from "../assets/pfp.png";
import styles from "./movies.module.css";
import Genre from "./genre";

const Movies = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  const genre = selectTrue(store.genre);

  if (!genre) {
    return null;
  }

  useEffect(() => {
    if (selectTrue(store.genre).length < 3) {
      navigate("/genre");
    } else if (!store.user) {
      navigate("/register");
    }
  }, []);

  return (
    <div className={styles.screen}>
      <div className={styles.box}>
        <div className={styles.header}>
          <Heading $color="#72DB73" $fontSize="30px">
            Super app
          </Heading>
          <Link to={"/"}>
            <div className={styles.pfp}>
              <img src={pfp} alt="" />
            </div>
          </Link>
        </div>
        <div className={styles.genre}>
          <h2>Entertainment according to your choice</h2>
          {genre.map((m) => (
            <Genre key={m.id} genre={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
