import React from 'react'
import { skills } from '../../portfolio'
import uniqid from 'uniqid'
import './skills.css'

export default function Skills() {
  return (
    <div className='container-skills'>
        <h2 className='skills-title'> 
        Skills
        </h2>
        <ul className='skills-list'>
          {skills.map((skills) => (
            <li key={uniqid()} className='skills-list-item btn btn--plain'> {skills} </li>
          ))}
        </ul>
    </div>
  )
}
