import React from 'react'
import uniquid from 'uniqid'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'
//import { projects } from '../portfolio'

const PrContainer = ({ projects }) => (
    <div className='projects'>
        <h3>{projects.name}</h3> 

        <p className='project-desc'>{projects.description}</p>
    {projects.stack && (
      <ul className='project-stack'>
        {projects.stack.map((item) => (
          <li key={uniquid()} className='project-stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {projects.sourceCode && (
      <a
        href={projects.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        {/* <GitHubIcon /> */}
      </a>
    )}

    {projects.links && (
      <a
        href={projects.links}
        aria-label='link preview'
        className='link link--icon'
      >
        {/* <LaunchIcon /> */}
      </a>
    )}
  </div>
)

export default PrContainer
