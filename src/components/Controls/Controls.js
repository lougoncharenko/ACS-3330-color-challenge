import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../../redux/gameSlice";
import "./Controls.css";

export default function Controls(props) {
  const {isRunning, speed, gameOver} = useSelector((state) => state);
  const dispatch = useDispatch();  // Set up the game timer
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  // Initialize request animation frame and remove it when isRunning changes
  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  // Handle game updates to move blocks down the screen
  const update = (time) => {
    requestRef.current = requestAnimationFrame(update);
    if (!isRunning) {
      return;
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > speed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };
  return (
    <div className="controls">
      <button
        className="control-button"
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      <button
        className="control-button"
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      <button
        className="control-button"
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      <button
        className="control-button"
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
}
