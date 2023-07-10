import React from 'react'
import Section from '../shared/section'
import ContactInfo from './contact-info'
import Form from './Form'
import "./style.scss"
const Contact = () => {
  return (
    <Section id="contact" title="Any questions ? Feel free to contact me" background="light">
       <div className="contact-content-wrapper">
         <ContactInfo/>
         <Form/>
       </div>
    </Section>
  )
}

export default Contact
