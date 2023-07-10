import React, { useState } from "react";
import "./style.scss";
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import CTA from "../../shared/calltoaction";
import { scrollToSection } from "../../utills/helper";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const arr = [
    {
        id:1,
         child : (
            <>
            <FaLinkedin  size={30}/>
           
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
              <SiLeetcode size={30}/>
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
              <HiOutlineMail size={30}/>
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
    const [mobileManu,setmobileManu] = useState(false);
    
    // const handler=(section)=>{
    //     setmobileManu(!mobileManu);
    //     scrollToSection(section);
    // }
    const commanFunc1 = ()=>{
        scrollToSection("skills");
        setmobileManu(false);
    }
    const commanFunc2 = ()=>{
        scrollToSection("portfolio");
        setmobileManu(false);
    }
    const commanFunc3 = ()=>{
        scrollToSection("about");
        setmobileManu(false);
    }
    const commanFunc4 = ()=>{
        scrollToSection("contact");
        setmobileManu(false);
    }
    
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
             
            <div className={`navigation ${mobileManu?"active":""}`}>
                
                <div onClick={commanFunc1} className="navigation-item">Skills</div>
                <div onClick={commanFunc2} className="navigation-item">Portfolio</div>
                <div onClick={commanFunc3} className="navigation-item">About</div>
                <CTA action={commanFunc4} text ="contact me" nav="nav"/>
            </div>
            <div className="mobile-manu" onClick={()=>setmobileManu(!mobileManu)}>
                 {mobileManu ? <IoMdClose size={25} color="white"/>
                   : <CgMenuRight size={25} color="white" />
                 }
            </div>
        </div>
    );
};

export default Navbar;
