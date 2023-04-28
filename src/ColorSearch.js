import React from 'react'

const ColorSearch = ({setColor}) => {
  return (
    <div>
        <input 
            className='searchBlock' 
            type='text'
            onChange={(e) => {
                setColor(e.target.value)
            }}
            placeholder='Add Color Name'
        />
    </div>
  )
}

export default ColorSearch