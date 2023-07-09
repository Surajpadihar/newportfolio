import React from 'react'

import OpenAi from '../../../assets/portfolio/Untitled design.png'
import filmyverse from '../../../assets/portfolio/filmyverse.png'
import chatapp from '../../../assets/portfolio/Chat.png'
import charcounter from '../../../assets/portfolio/character counter (1).png'
import calc from '../../../assets/portfolio/Calculator.png'

import "./style.scss"

const projects = [
    {
        id : 1,
        src: OpenAi,
        demo:  "https://gpt3-app-alpha.vercel.app/#home",
        code: "https://github.com/Surajpadihar/gpt3-app",
    },
    {
        id : 2,
        src: filmyverse,
        demo: "https://movieadda-8tyd.vercel.app/",
        code: "https://github.com/Surajpadihar/movieadda",
    },
    {
        id : 3,
        src: chatapp,
        demo: "https://chat-app-rk7c.vercel.app/login",
        code: "https://github.com/Surajpadihar/chat-app",
    },
    
    {
        id : 4,
        src: charcounter,
        demo: "",
        code: "",
    },
    {
        id : 5,
        src: calc,
        demo: "",
        code: "",
    },
   
]




const Showcase = () => {
  return (
    <div className="showcase">
         <div className="showcase-item">
         {
             projects.map(({id,src,demo,code})=>(
            <div key={id} className="s-item">
                <img src={src} alt="" />
             
            <div className="inside-item">
                <button  className='btn'><a href={demo} target='_blank' rel="noreferrer">Demo</a></button>
                <button className='btn'><a href={code} target='_blank' rel="noreferrer">Code</a> </button>
                <button className='btn'>About</button>
            </div>
            </div>
        ))
         }
         </div>
    </div>
  )
}

export default Showcase
