import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../../redux/gameSlice";
import "./ScoreBoard.css";

export default function ScoreBoard() {
  const dispatch = useDispatch();
  const { score, isRunning, gameOver } = useSelector((state) => state);
  return (
    <div className="score-board">
      <div>Score:{score}</div>
      <div>Level: 1</div>
      <button
        className="score-board-button"
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
      <button
        className="score-board-button"
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        Restart
      </button>
    </div>
  );
}
