import React, { useEffect, useState } from 'react'

function Loader() {
    const[loading, setLoading] = useState(true);
    const[loadState, setLoadState] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setLoadState((prev)=>{
                if(prev >= 100){
                    clearInterval(interval)
                    setLoading(false)
                    return prev
                }
                return prev+1
            })
        },10)
        return ()=>{clearInterval(interval)}
    },[])
    if(loading){
        return (
            <>
                <div ></div>
               <h1>{loadState}%</h1> 
            </>
        )
    }
  return (
    <div>
        <div>

            <h1>hello</h1>
        </div>
    </div>
  )
}

export default Loader
