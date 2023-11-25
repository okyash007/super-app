import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTrue } from "../helper";
import styles from "./home.module.css";
import User from "./User";
import Weather from "./Weather";
import News from "./News";
import Notes from "./Notes";
import Watch from "./Watch";

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
      <div className={styles.screen}>
        <div className={styles.box2}>
          <div className={styles.right}>
            <div className={styles.box1}>
              <div>
                <User />
                <Weather />
              </div>
              <Notes />
            </div>
            <Watch />
          </div>
          <div className={styles.left}>
            <News />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
