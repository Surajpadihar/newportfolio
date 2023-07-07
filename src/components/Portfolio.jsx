import React from 'react'
import OpenAi from '../assets/portfolio/Untitled design.png'
import filmyverse from '../assets/portfolio/filmyverse.png'
import chatapp from '../assets/portfolio/Chat.png'
import charcounter from '../assets/portfolio/character counter (1).png'
import calc from '../assets/portfolio/Calculator.png'


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

const Portfolio = () => {
  return (
    <div name='portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full ">
        <div className="pb-8 ">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            <p className='py-6'>check out my projects here</p>
        </div>

        <div  className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 pl-2 pr-4 mr-4 md:mr-0 md:px-10 sm:px-0">
      {
        projects.map(({id,src,demo,code})=>(
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img className='rounded-md hover:scale-105 duration-200' src={src} alt="" />
             
            <div className="flex justify-center items-center">
                <button  className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'><a href={demo} target='_blank' rel="noreferrer">Demo</a></button>
                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'><a href={code} target='_blank' rel="noreferrer">Code</a> </button>
                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>About</button>
            </div>
            </div>
        ))
    }
    </div>

      
       
     

      </div>
    </div>
  )
}

export default Portfolio