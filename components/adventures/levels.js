import React from 'react'

const LevelOne = () => <div className="level_bars_container">
  <div style={{ height: '6px' }} className="level_bar filled_level_bar"/>
  <div style={{ height: '10px' }} className="level_bar"/>
  <div className="level_bar"/>
</div>

const LevelTwo = () => <div className="level_bars_container">
  <div style={{ height: '6px' }} className="level_bar filled_level_bar"/>
  <div style={{ height: '10px' }} className="level_bar filled_level_bar"/>
  <div className="level_bar"/>
</div>

const LevelThree = () => <div className="level_bars_container">
  <div style={{ height: '6px' }} className="level_bar filled_level_bar"/>
  <div style={{ height: '10px' }} className="level_bar filled_level_bar"/>
  <div className="level_bar filled_level_bar"/>
</div>


export { LevelOne, LevelTwo, LevelThree }
