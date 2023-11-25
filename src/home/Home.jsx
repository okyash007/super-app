import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTrue } from "../helper";
import styles from "./home.module.css";
import User from "./User";

const Home = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  console.log(store);

  useEffect(() => {
    if (selectTrue(store.genre).length < 3) {
      navigate("/genre");
    }
  }, []);

  return (
    <>
      <div className={styles.box2}>
        <div>
          <div className={styles.box1}>
            <div>
              <div><User/></div>
              <div>climate</div>
            </div>
            <div>notes</div>
          </div>
          <div>watch</div>
        </div>
        <div>news</div>
      </div>
    </>
  );
};

export default Home;
