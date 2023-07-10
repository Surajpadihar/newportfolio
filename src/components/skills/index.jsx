import React from 'react'
import "./style.scss"
import Section from '../shared/section'
// import techicon from '../../images/tech-icons.png'
import CTA from '../shared/calltoaction'
import {AiOutlineCloudDownload} from "react-icons/ai"
import html from '../../assets/html.png';
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import reactimg from '../../assets/react.png'
import github from '../../assets/github.png'
import tailwind from '../../assets/tailwind.png'
import cpp from '../../assets/c-plus-plus.png'
import c from '../../assets/portfolio/c language.jpeg'

const tech =[
    {
        id:1,
        src:html,
        title:"HTML",
        style:"shadow-orange-500 px-3"
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
        style:"shadow-sky-500 "
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
        style:"shadow-blue-500 "
    },
    {
        id:8,
        src:c,
        title:"C",
        style:"shadow-blue-500"
    },
    

]

const DownloadCv =()=>{
    fetch('SUraj.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
     
}
const Skills = () => {
  return (
    <div>
      <Section background="dark" id="skills">
          <div className="skills-content-wrapper">
            <div className="left-col">
                <div className="left-section">
                {tech.map(({id,src,title,style})=>(

                <div key={id} className={`inside shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                    <img className='mx-auto' src={src} alt="error" />
                     <p className='mt-4'>{title}</p>
                 </div>
                ))

               }
                  
                </div>
                
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>i'm proficient in HTML,CSS,JavaScript and Reactjs i have also done C and C++ , I have mastered data structure and algorithms as well.<br/> 
                i  also have a some knowladge of python and Java.
                </p>
                <CTA  text="Download CV" icon={<AiOutlineCloudDownload/>} action={DownloadCv} ></CTA>
            </div>
          </div>
      </Section>
    </div>
  )
}

export default Skills

