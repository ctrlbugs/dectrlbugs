import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_19df1kn',
        'template_a55d47q',
        form.current,
        '5jVHKhVESimcTGE7B'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent successfully', {
            position: toast.POSITION.TOP_CENTER,
          });
          form.current.reset();
  
          // Trigger confetti when email is sent successfully
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 },
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send email: ' + error.text, {
            position: toast.POSITION.TOP_CENTER,
          });
          toast('The official is notified!', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch 📧</h5>
      <h2>Talk To Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Contact@ctrlbugs.me</h5>
            <a href="mailto:contact@ctrlbugs.me" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>ctrlbugs</h5>
            <a href="https://m.me/ctrlbugs" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2349067942645</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349067942645" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact