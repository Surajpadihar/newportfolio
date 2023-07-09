import React from 'react'
import "./style.scss"
import Section from '../shared/section'
import Showcase from './showcase'

const Portfolio = () => {
  return (
    <Section id="portfolio" title="Check out my Projects" background="light"> 
      <div className="portfolio-content-wrapper">
        <Showcase/>
      </div>
    </Section>
  )
}

export default Portfolio
