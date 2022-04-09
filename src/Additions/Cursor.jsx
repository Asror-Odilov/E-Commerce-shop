import React, { useState } from 'react'
import styled from "styled-components";
import '../Componenets/components.css'
const Cursor = () => {
    const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  })
  

    

  return (
    <div>
        <div className="cursor"  style={{
            left: (cursorX -10) + 'px',
            top: (cursorY -10)+ 'px'
        }}>
        </div>
    </div>
  )
}

export default Cursor

