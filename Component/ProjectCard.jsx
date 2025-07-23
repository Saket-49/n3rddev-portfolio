import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProjectCardNav from './ProjectCardNav'

gsap.registerPlugin(ScrollTrigger)

function ProjectCard() {
  const r = useRef()
  const io = useRef()

  useGSAP(() => {
    gsap.fromTo(
      r.current,
      { x: '-100%' },
      {
        x: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: io.current,
          scroller: 'body',
          scrub: true,
          start: 'top top',
          end: '+=100%', // keep this section pinned for full screen scroll
          pin: true,
          anticipatePin: 1,
        }
      }
    )
  }, [])

  return (
    <div ref={io}  style={{ height: '100dvh', width: '100%' , backgroundColor:"black"}}>
        <ProjectCardNav />
        <img style={{height:"93dvh", width:"100dvw"}} ref={r} src="media/op.jpeg" alt="" />
        
    </div>
  )
}

export default ProjectCard