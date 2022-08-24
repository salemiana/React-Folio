import GitHubIcon  from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css'

function Footer(){
  return (
      <footer className = "text-center text-lg-start bg-light text-muted d-flex justify-content-center">
              <div className = "footer-icon m-2">
                  <a href = "https://github.com/salemiana">< GitHubIcon /></a>
              </div>
              <div className = "footer-icon m-2">
                  <a href = "https://www.linkedin.com/in/valerie-aleida-lopez/"><LinkedInIcon/></a>
              </div>
              {/* <div className = "footer-icon m-2">
                  <a href = "mailto:salem.zerezghi2@gmail.com"><FaEnvelope size={30}/></a>
              </div>npm start
              <div className = "footer-icon m-2">
                  <a href = "https://valerie-a-lopez.wixsite.com/home"><FaWix size={30}/></a>
              </div> */}
      </footer>
  );
}
// }
// const Footer = () => (
// //   <footer className='footer'>
// //     <a
// //       href='https://github.com/salemiana/react-folio'
// //       className='link footer-link'
// //     >
// //
// //     </a>
// //   </footer>
// // )

// // export default Footer

// <footer className="FooterItems">
//         <div>
//         {/* <a href="https://github.com/salemiana/react-folio">
//           <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
//         </a>
//          <a href="https://www.facebook.com/">
//           <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
//          </a>
//         <a href="https://twitter.com/">
//           <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
//         </a>
//         <a href="https://www.instagram.com/">
//           <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
//         </a>
//         <a href="https://www.youtube.com/">
//           <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
//         </a> */}

//         <i className="fa-brands fa-linkedin"></i>
//         </div>

//       </footer>
//     );
  


export default Footer;