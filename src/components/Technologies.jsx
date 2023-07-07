import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimg from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import cpp from '../assets/c-plus-plus.png'
import c from '../assets/portfolio/c language.jpeg'

const tech =[
    {
        id:1,
        src:html,
        title:"HTML",
        style:"shadow-orange-500"
    },
    
    {
        id:2,
        src:css,
        title:"CSS",
        style:"shadow-blue-500"
    },
    {
        id:3,
        src:javascript,
        title:"Javascript",
        style:"shadow-yellow-500"
    },
    {
        id:4,
        src:reactimg,
        title:"React Js",
        style:"shadow-sky-500"
    },
    {
        id:5,
        src:tailwind,
        title:"Tailwind",
        style:"shadow-blue-500"
    },
    {
        id:6,
        src:github,
        title:"Github",
        style:"shadow-white"
    },
    {
        id:7,
        src:cpp,
        title:"Cpp",
        style:"shadow-blue-500"
    },
    {
        id:8,
        src:c,
        title:"C language",
        style:"shadow-blue-500"
    },
    

]

const Technologies = () => {
  return (
    <div name='technologies' className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen' id='Technology'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center p-4 w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Technologies</p>
            <p className='py-6'>these are the Technologies i have worked with </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 text-center px-8 sm:px-0'>

            {tech.map(({id,src,title,style})=>(

            <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                <img className='w-20 mx-auto' src={src} alt="error" />
                <p className='mt-4'>{title}</p>
            </div>
            ))

            }
        </div>
      </div>
    </div>
  )
}

export default Technologies
