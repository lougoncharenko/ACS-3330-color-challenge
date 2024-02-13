import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {moveDown, moveLeft, moveRight, rotate} from '../../redux/gameSlice'
import './Controls.css'

export default function Controls(props) {
  const { isRunning } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
  <div className="controls">
    
    <button 
    className="control-button" 
    disabled={!isRunning}
    onClick={(e) => {
      dispatch(moveLeft())
    }}>Left</button>

    <button 
    className="control-button" 
    disabled={!isRunning}
    onClick={(e) => {
      dispatch(moveRight())
    }}>Right</button>

    <button 
    className="control-button" 
    disabled={!isRunning}
    onClick={(e) => {
      dispatch(rotate())
    }}>Rotate</button>

    <button 
    className="control-button" 
    disabled={!isRunning}
    onClick={(e) => {
      dispatch(moveDown())
    }}>Down</button>

  </div>
  )
}