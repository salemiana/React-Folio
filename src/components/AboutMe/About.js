
 import React from 'react'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'

const About = () => {
  const { name, role, description, resume, contactLink } = about
  

  return (
    <div className='about center'>
        <h1>
        Hi, I am <span className='about-name'>{name}.</span>
        </h1>
    </div>
  )
}


export default About;



// import React from "react";
// import coverImage from '../../assets/cover/cover-image.jpg';

// const About = () => {
//   return (
 
//       <div className="my-2">
//         <p> I am a full stack developer </p>
//         <img
//         src={coverImage}
//         className="my-2"
//         style={{ width: "100%" }}
//         alt="cover"
//       />
//       <p className="content">
//         I am Salem, a full stack developer who is passionate about creating apps and simplifying technnology for users.
//       </p>
//       </div>
//     //</section>
//   );
// };

// export default About;
