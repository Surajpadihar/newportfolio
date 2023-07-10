import React from 'react'
import "./style.scss"

import myimg from '../../../assets/surajtha.png';
import { scrollToSection } from '../../utills/helper';

const Home = () => {
  return (
    <div className='home'>
    
         <div className="home-content">
            <div className="left-col">
               <div className="text">

                <span className='item-1'>hi 👋 I am </span>
                 
                <span className='item-2'>Suraj Padihar</span>
          
               </div>
               <p>
               I'm Suraj padihar, a frontend web developer with expertise in HTML, CSS, JavaScript, and ReactJS. I've created various projects that showcase my passion for design and coding. I'm dedicated to creating visually appealing and functional digital experiences. Let's push the boundaries of web development together!
               </p>
               
               <a class=" inline-block text-lg group">
                   <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                   <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                   <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                   <span onClick={()=>scrollToSection("about")} class="relative">More Anout me</span>
                   </span>
                   <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
               </a>
              
            </div>
             
            <div className="right-col">
                <img src={myimg} alt="" />
            </div>
         </div>
      
    </div>
  )
}

export default Home
