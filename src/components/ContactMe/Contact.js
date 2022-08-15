import React from 'react'
import { contact } from '../../portfolio'
import './style.css'

export default function Contact() {
  return (
    <div className='container'>
        <h2 className='contact-title'> 
        Contact Me
        </h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            email me
          </span>
        </a>
    </div>
   
  )
}
