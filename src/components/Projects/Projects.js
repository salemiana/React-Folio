import React from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import PrContainer from '../PrContainer/PrContainer'

const Projects = () => {
  if (!projects.length) return null
  return (
    <div className='pr-container center'>
        <h2 className='pr-title center'> 
        Projects
        </h2>

        <div className='pr-grid'>
          {projects.map((projects) => (
          <PrContainer key={uniqid()} projects={projects} />
          ))}
        </div>
    </div>
  )
}

export default Projects