import React from 'react'
import Section from '../shared/section'
import "./style.scss";
const About = () => {
  return (
   <Section id="about" background="light" title="About Me">
    <div className="about-content">
        <p>Hey there! I'm Suraj padihar, and I'm thrilled to introduce myself as a frontend web developer. Over the course of my journey, I have had the opportunity to create a variety of projects that revolve around the captivating world of HTML, CSS, JavaScript, and ReactJS. 
        </p>
        <p>Apart from my passion for frontend development, I have also developed a knack for problem-solving. It's incredibly satisfying to dive into challenging puzzles and algorithms, and I'm proud to say that I've solved over 700 problems across different platforms like LeetCode, GeeksforGeeks, and InterviewBit. This continuous pursuit of sharpening my problem-solving skills has not only expanded my knowledge but also equipped me with a strong analytical mindset.</p>
    </div>
   </Section>
  )
}

export default About
