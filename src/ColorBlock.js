import React from 'react'

const ColorBlock = ({ color }) => {

  return (
    <div id='colorBlock' style={{backgroundColor: color, color: color.toLowerCase() === 'black' ? 'white' : 'black'}}>
        <p>{color ? color : "Empty Value"}</p>
        
    </div>
  )
}

export default ColorBlock