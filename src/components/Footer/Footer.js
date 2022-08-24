import './style.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
//   <footer className='footer'>
//     <a
//       href='https://github.com/salemiana/react-folio'
//       className='link footer-link'
//     >
//       Created By Salem
//     </a>
//   </footer>
// )

// export default Footer

<footer className="FooterItems">
        <div>
        {/* <a href="https://github.com/salemiana/react-folio">
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
         <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
         </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
        </a>
        <a href="https://www.youtube.com/">
          <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
        </a> */}

        <i className="fa-brands fa-linkedin"></i>
        </div>

      </footer>
    );
  


export default Footer;