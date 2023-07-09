import React from "react";
import "./style.scss";
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import CTA from "../../shared/calltoaction";


const arr = [
    {
        id:1,
         child : (
            <>
            <FaLinkedin size={35}/>
           
            </>
         ),
         href:"https://www.linkedin.com/in/suraj-padihar-430ab8215/",
         style : "rounded-tr-md"
         
    },
    {
        id:2,
         child : (
            <>
             <FaGithub size={35}/> 
            </>
         ),
         href:"https://github.com/Surajpadihar",
          
         
    },
    {
        id:3,
         child : (
            <>
              <SiLeetcode size={35}/>
            </>
         ),
         href:"https://leetcode.com",
         download:true,
         style : "rounded-br-md"
         
    },
    {
        id:4,
         child : (
            <>
              <HiOutlineMail size={35}/>
            </>
         ),
         href:"mailto:surajpadihar3232@gmail.com",
          
         
        },
    // {
    //     id:4,
    //      child : (
    //         <>
    //           <BsFillPersonLinesFill size={35}/>
    //         </>
    //      ),
    //      href:"/SUraj.pdf",
    //      download:true,
    //      style : "rounded-br-md"
         
    // },
  ]

const Navbar = () => {
    return (
        <div className="top-navigation-bar">
            <div className="navbar-left">

            {arr.map(({ id, child ,href,download}) => (
                    <li key={id} className="nav-item">
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
            </div>
            <div className="navigation">
                <div className="navigation-item">Skills</div>
                <div className="navigation-item">Portfolio</div>
                <div className="navigation-item">Blogs & Article</div>
                <CTA text ="contact me" nav="nav"/>
            </div>
        </div>
    );
};

export default Navbar;
