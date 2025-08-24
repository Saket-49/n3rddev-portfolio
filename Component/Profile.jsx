import React from 'react'
import GithubGraph from './GithubGraph'

function Profile() {

    const links = ['media/gh.png', 'media/li.png', 'media/x.png' ]

  return (
    <div style={{height:"30%", width:"100%" }}>

      <div style={{height:"70%", width:"90%", position:"relative", left:"5%", top:"10%"}}>
        <img src="media/pfpo.jpeg" style={{height:"80%"}} width={"100%"}  alt="" />
      </div>

    <div style={{
            height: "40%",
            width: "20%",
            position: "relative",
            left: "12%",
            border: "4px solid black",
            borderRadius: "48%",
            overflow: "hidden", 
            bottom:"25%"
            }}>
            <img
                src="media/f.jpeg"
                style={{
                height: "100%",
                width: "100%",
                objectFit: "cover", 
                objectPosition: "center"
                }}
            alt=""
            />
    </div>
        
        <div style={{height:"10vh", width:"90%", position:"relative", left:"5%", bottom:"20%"}}>
            <h2 style={{fontSize:"3vh"}}>Saket Sharma</h2>
            <p style={{color:"grey", fontSize:"2vh", marginBottom:"1vh"}}>Full Stack Developer || Open Source Enthusiast || Web3</p>
            
            <div style={{display:"flex", gap:"1vh"}}>
                     {links.map((link, index) => {
                return(
                    
                    <a href="">
                        <img src={`/${link}`} style={{ height: "3vh", width: "2vw" }} key={index} alt="icon" />
                    </a>
                        
                    )
                }
            )}
            </div>
        </div>
            <GithubGraph/>
<br />
        <div style={{height:"20vh", width:"90%", position:"relative", left:"5%", bottom:"10%"}}>
            <h1 style={{fontSize:"3vh",  
    boxShadow: "0 6px 6px -4px #00ff99", display:"inline-block"}}>About Me</h1><br />
            <p style={{color:"gray"}}>
                Hi, I am Saket from India 🇮🇳. I love building stuff, and all my projects are hosted on <a style={{color:"#00ff99"}} href="https://github.com/nerdd3v">GitHub</a> . My journey began in freshmen year with basic HTML-CSS, and since then, I've evolved from a curious student to a web developer passionate about creating impactful solutions. <br /><br />

                Through consistent learning and project building, I've grown my skills across the full stack. Currently, I'm working remotely with exciting technologies and always looking to learn more.
            </p>
        </div>

    </div>
  )
}

export default Profile
