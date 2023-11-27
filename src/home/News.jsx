import React from "react";
import useFetchData from "../hooks/useFetchData";
import { getRandomNumber } from "../helper";
import styles from "./news.module.css";

const News = () => {
  const data = useFetchData(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd1b1a6599e42fdb4b6d6617d83b5a8"
  );

  const displayData = data.data?.articles;

  if (!displayData) {
    return null;
  }
  const news = displayData[Math.floor(Math.random() * displayData.length)];

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <img src={news.urlToImage} alt="" />
        <div className={styles.title}>
          <p>{news.title}</p>
        </div>
      </div>
      <div className={styles.bottom}>{news.content}<br/>{news.description}</div>
    </div>
  );
};

export default News;
