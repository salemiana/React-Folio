import React from 'react'
import { contact } from '../../portfolio'

export default function Contact() {
  return (
    <div className='container'>
        <h2 className='text-center'> 
        Contact Me
        </h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button'>
            email me
          </span>
        </a>
    </div>
   
  )
}
