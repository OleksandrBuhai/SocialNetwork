import React from 'react'
import preloaderImg from "../../axios/preloaderImg/ZZ5H.gif"

let Preloader = ()=> {
    return (
        <div >
            <img src={preloaderImg}  style={{width:"50px",height:"50px"}}/>
        </div>
    )
}

export default Preloader