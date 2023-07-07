import { Button } from '@mui/material'
import React from 'react'
// import { RiArrowRightLine } from 'react-icons/ri'
import myphoto from '../assets/suraj thakur.jpg'

const Home = () => {
  return (
    <div name="home" className='pt-20 md:w-full md:pt-0 h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex justify-center items-center flex-col px-4 h-full md:flex-row '>
        <div className="flex justify-center flex-col h-full ">
            <h1 className='text-4xl  newcolor sm:text-6xl font-bold newcolor ' >i'm frontend Web developer</h1>
            <p className='max-w-md text-gray-500 py-4'>I'm Suraj padihar, a frontend web developer with expertise in HTML, CSS, JavaScript, and ReactJS. I've created various projects that showcase my passion for design and coding. I'm dedicated to creating visually appealing and functional digital experiences. Let's push the boundaries of web development together!</p>
            <div className="flex">
             
                <Button  variant='contained' className='group rounded-3xl flex cursor-pointer justify-center items-center    '>
                    
                     <span className='ml-2 capitalize hover:text-gray-400 duration-200'>More About me...</span>
                </Button>
            </div>
        </div>
        <div className="flex w-50 h-50">
            <img src={myphoto} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-2/4' />
        </div>
      </div>
    </div>
  )
}

export default Home