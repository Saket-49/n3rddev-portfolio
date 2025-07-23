import { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

function ProjectCardNav() {
  const time = "11:11"//improve later
    const navStyle = {
        height:"7vh",
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
            ease:"linear",
            scrollTrigger:{
              trigger: Punjab.current,
              scroller: "body",
              scrub: 5,
              start: "top 50%",
              end: "top 10%",
              markers: false
            }
        })
    })
  return (
    <div style={{backgroundColor:"black"}}>
        <div style={navStyle} ref={Punjab}>
            <h3 >Projects</h3>
            <h3 >Client</h3>
            <h5 >{time}</h5>
            <h3 >Description</h3>
        </div>
    </div>
  )
}

export default ProjectCardNav;

