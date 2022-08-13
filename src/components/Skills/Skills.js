import React from 'react'
import { skills } from '../../portfolio'
import uniqid from 'uniqid'

export default function Skills() {
  return (
    <div className='container'>
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
