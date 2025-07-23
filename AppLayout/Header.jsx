import React, { useEffect, useRef, useState } from 'react'
import '../src/index.css' 
import { color, m } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import '../src/AppLayout/Header.css' // Uncomment if you have specific styles for the header

function Header() {
    const time = "11:11"//improve later
    const navStyle = {
        height:"100px",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'transparent',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        color: 'white',
        zIndex: 1000,
        overflow:"hidden"
    }

    const Punjab = useRef()
    useGSAP(()=>{
        gsap.from(Punjab.current,{
            opacity:0,
            y:"50px",
            duration:1,
            delay:0.1,
            ease:"linear"
        })
    })
    
  return (
    <div style={{backgroundColor:"black"}}>
        <div style={navStyle} ref={Punjab}>
            <h3 >Somewhere in Punjab</h3>
            <h3 >n3rddev</h3>
            <h5 >{time}</h5>
            <h3 >Contact</h3>
        </div>
    </div>
  )
}

export default Header
