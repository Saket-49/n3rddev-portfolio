import React, { useRef } from 'react'
import Cursor from './Cursor'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Work from './Work'

function Hero() {
    const heroRef = useRef()
    useGSAP(()=>{
        gsap.from(heroRef.current,{
            opacity:"0",
            x:"-100%",
            duration:3,
            delay:0.2
        })
    })
    const heroStyle = {
        height: '90vh',
        width: '100dvw',
        
    }
  return (
    <div>
        <Cursor/>
      <div>
        <div style={heroStyle} >
          <video src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4" loop   autoPlay  muted style={{height:"100%", width:"100%", objectFit:"cover", objectPosition:"top"}}></video>
        <div ref={heroRef} style={{display:"flex"}}>
            <h1 style={{position:"relative", top:"-23vw", color:"white" ,fontSize:"15vw", marginLeft:"5vw"}}>n3rddev </h1>
            <h1 style={{position:"relative", top:"-22vw", color:"white" ,fontSize:"8vw", marginLeft:"5vw", right:"4vw"}}>&reg;</h1>
            <h1 style={{position:"relative", top:"-5vw", color:"white" ,fontSize:"2vw", marginLeft:"-5vw", right:"4vw"}}>
                Full Stack web-developer
            </h1>
        </div>
          
        </div>
     </div>
     <Work />
     <div style={{height:"100dvh", width:"100dvw", backgroundColor:"white"}}>
       <h1 style={{color:"black"}}>Saket sharma</h1>
     </div>
    </div>
  )
}

export default Hero
