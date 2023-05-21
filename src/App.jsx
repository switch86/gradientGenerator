import { useState } from 'react'
import './App.css'

function App() {
  //set state for colors and angle
  const [colors, setColors] = useState({
    color1: "#fbd2c8",
    color2: "#df536c",
    angle: 50
  })

// handle updates to state - used by onchange 
function handleChange(event) {
  const {name, value} = event.target
  setColors(prevColors => {
    return {
      ...prevColors, 
      [name]: value
    }
  })
}

  return (
    <div className="App">
      <h1 className="header">Color Gradient CSS</h1>
      <form className="colorForm">
        <label className="inputBox" htmlFor="color1">Color 1:</label>
        <input 
          className="inputBox"
          name="color1"
          id="color1" 
          type="text" 
          placeholder="color 1" 
          onChange={handleChange} 
          value={colors.color1}>
          </input>
        <textarea className="sampleSquare" readOnly value="" style={{background: colors.color1}}/>
        <label className="inputBox" htmlFor="color2">Color 2:</label>
        <input 
          className="inputBox" 
          name="color2"
          id="color2" 
          type="text" 
          placeholder="color 2" 
          onChange={handleChange} 
          value={colors.color2}>
          </input>
        <textarea className="sampleSquare" readOnly value="" style={{background: colors.color2}}/>
        <label className="angleInput" htmlFor="angle">Gradient Angle:</label>
        <input 
          className="angleInput" 
          name="angle"
          id="angle" 
          type="number" 
          placeholder="Angle" 
          onChange={handleChange} 
          value={colors.angle}>
        </input>
      </form>
      <textarea className="textBox" style={{background: `linear-gradient(${colors.angle}deg, ${colors.color1}, ${colors.color2})`}} readOnly value={`
      background: linear-gradient(${colors.angle}deg, ${colors.color1}, ${colors.color2})
      -moz-background: linear-gradient(${colors.angle}deg, ${colors.color1}, ${colors.color2})
      -webkit: linear-gradient(${colors.angle}deg, ${colors.color1}, ${colors.color2})
      `}
      /> 
    </div>
  )
}

export default App
