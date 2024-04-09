import { Center } from '@chakra-ui/react'
import React from 'react'

function ColorsTab() {
  return (
    <><h1  style={{ fontSize: '30px', fontWeight: 'bold' }}>Color</h1>
    
    <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ backgroundColor: "black", color: "yellow", padding: "10px", width: '100%', justifyContent: "center", alignItems: "center" }}>
        Hello There!
      </div>

      <div style={{ backgroundColor: "yellow", color: "purple", padding: "10px", width: '100%', justifyContent: "center", alignItems: "center" }}>
        Hi Again!
      </div>


    </div></>
    

  )
}

export default ColorsTab