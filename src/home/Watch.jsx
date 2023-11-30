import React, { useState } from "react";
import styles from "./watch.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import arrow from "../assets/arrow.svg";
import { ColorButton } from "../styled";

const Watch = () => {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [resetKey, setResetKey] = useState(0);

  const audio = new Audio("/bell.wav");

  function updateTimer(field, value) {
    setTimer((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  function timeToSeconds(hours, minites, seconds) {
    const totalSeconds = hours * 3600 + minites * 60 + seconds;
    return totalSeconds;
  }

  return (
    <div className={styles.box}>
      <div className={styles.watch}>
        <CountdownCircleTimer
          isPlaying={start}
          trailColor="transparent"
          duration={timeToSeconds(timer.hours, timer.minutes, timer.seconds)}
          colors="#FF6A6A"
          key={resetKey}
          size={160}
          onComplete={() => {
            setStart(false);
            setResetKey((key) => key + 1);
            audio.play();
          }}
        >
          {({ remainingTime }) => secondsToTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <div className={styles.timer}>
        <div className={styles.clock}>
          <div>
            <p>Hours</p>
            <button
              onClick={() => {
                updateTimer("hours", timer.hours + 1);
              }}
            >
              <img src={arrow} alt="" />
            </button>
            <h1>{timer.hours}</h1>
            <button
              onClick={() => {
                if (timer.hours > 0) {
                  updateTimer("hours", timer.hours - 1);
                }
              }}
            >
              <img src={arrow} alt="" />
            </button>
          </div>
          :
          <div>
            <p>Minutes</p>
            <button onClick={() => updateTimer("minutes", timer.minutes + 1)}>
              <img src={arrow} alt="" />
            </button>
            <h1>{timer.minutes}</h1>
            <button
              onClick={() => {
                if (timer.minutes > 0) {
                  updateTimer("minutes", timer.minutes - 1);
                }
              }}
            >
              <img src={arrow} alt="" />
            </button>
          </div>
          :
          <div>
            <p>Seconds</p>
            <button onClick={() => updateTimer("seconds", timer.seconds + 1)}>
              <img src={arrow} alt="" />
            </button>
            <h1>{timer.seconds}</h1>
            <button
              onClick={() => {
                if (timer.seconds > 0) {
                  updateTimer("seconds", timer.seconds - 1);
                }
              }}
            >
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <ColorButton
          onClick={() => setStart(!start)}
          className={styles.browse}
          $bgColor="#FF6A6A"
        >
          {start ? "pause" : "start"}
        </ColorButton>
      </div>
    </div>
  );
};

export default Watch;
