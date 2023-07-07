import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
// import { Link } from "react-router-dom";
// import {} from "react-icons/ai"
// import { Link } from "react-scroll";
const linkes = [
  {
      id:1,
       child : (
          <>
          <FaLinkedin size={30}/>Linkedin 
          </>
       ),
       href:"https://www.linkedin.com/in/suraj-padihar-430ab8215/",
       style : "rounded-tr-md"
       
  },
  {
      id:2,
       child : (
          <>
           <FaGithub size={30}/>Github 
          </>
       ),
       href:"https://github.com/Surajpadihar",
        
       
  },
  {
      id:3,
       child : (
          <>
            <HiOutlineMail size={30}/>Mail
          </>
       ),
       href:"mailto@surajpadihar3232@gmail.com",
       
       
  },
  {
      id:4,
       child : (
          <>
            <BsFillPersonLinesFill size={30}/>Resume
          </>
       ),
       href:"/SUraj.pdf",
       download:true,
       style : "rounded-br-md"
       
  },
]
const arr = [
  {
      id:1,
       child : (
          <>
          <FaLinkedin size={30}/>  
          </>
       ),
       href:"https://www.linkedin.com/in/suraj-padihar-430ab8215/",
       style : "rounded-tr-md"
       
  },
  {
      id:2,
       child : (
          <>
           <FaGithub size={30}/> 
          </>
       ),
       href:"https://github.com/Surajpadihar",
        
       
  },
  {
      id:3,
       child : (
          <>
            <HiOutlineMail size={30}/> 
          </>
       ),
       href:"mailto@surajpadihar3232@gmail.com",
       
       
  },
  {
      id:4,
       child : (
          <>
            <BsFillPersonLinesFill size={30}/> 
          </>
       ),
       href:"/SUraj.pdf",
       download:true,
       style : "rounded-br-md"
       
  },
]

// const arr = [
//   {
//     id: 1,
//     val: "Home",
//   },
//   {
//     id: 2,
//     val: "About",
//   },
//   {
//     id: 3,
//     val: "Technology",
//   },
//   {
//     id: 4,
//     val: "Projects",
//   },
// ];


const Navbar = () => {
    const[toggle,settoggle] = useState(false);

  return (
    <div className="pb-6 mb-16 md:mb-0 z-10 fixed flex p-6 justify-between items-center text-white bg-black w-full h-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif hover:text-gray-300 duration-700">Suraj </h1>
      </div>

      <ul className="hidden md:flex text-xl">
        {arr.map(({ id, child ,href,download}) => (
          <li key={id} className="mr-8 cursor-pointer text-white font-medium hover:scale-110 duration-200 hover:text-yellow-600">
           <a href={href}
             download={download}
             target='_blank'
             rel="noreferrer"
           >

           {child}
           </a>
          </li>
        ))
        }
      </ul>
      
      <div className=" md:hidden">

        {toggle ?
         <RiCloseLine className="absolute top-6 right-3" onClick={()=>settoggle(false)}  size={30}/>
          :<RiMenu3Line className="absolute top-6 right-3" onClick={()=>settoggle(true)} size={30}/>
        }
        <div className="flex flex-col justify-center  absolute top-10 right-10 bg-gray-500  w-40">
        {toggle && linkes.map(({id,child,href,download})=>(
          <a className="my-2 px-4 ml-8 " 
           href={href} 
          download={download}
          target='_blank'
          rel="noreferrer"
          >
            {child}
           
          </a>

        ))

        }
        </div>
        
      </div>
      
    </div>
  );
};

export default Navbar;
