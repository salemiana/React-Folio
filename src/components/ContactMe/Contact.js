// import React, { useState }  from 'react'
// // import { contact } from '../../portfolio'
// import './style.css'
// import { validateEmail } from '../../utils/helpers';

// function ContactForm() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   const sendEmail = (e) => {
//     e.preventDefault()
    
//     const name = form.current[0].value;
//     const email = form.current[1].value;
//     const message = form.current[2].value;
// if(name && email && message){
//     emailjs
//       .sendForm(
//         `${process.env.REACT_APP_SERVICEID}`,
//         'template_toitm7j',
//         form.current,
//         `${process.env.REACT_APP_USERTOKEN}`
//       )
//       .then(
//         () => {
//           window.location.reload(false)
//         },
//         (err) => {
//           alert('Failed to send the message, please try again')
//           console.log(err)
//         }
//       )
//     } else{ alert('Please fill out entire form');}
     
//   }

//   return (
//     <section>
//       <h1 data-testid="h1tag">Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button data-testid="button" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default ContactForm;


import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting.../under development')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm