import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import confetti from 'canvas-confetti';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_imc9jhr',
        'template_taarc56',
        form.current,
        'user_G4NPFbYZ6YZ_3aPtO'
      )
      .then(
        (response) => {
          alert('Email sent successfully');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send email', error);
          alert('The official is notified!');
        }
      );
  };

   const triggerConfetti = () => {
    confetti({
      particleCount: 100, // Number of confetti particles
      spread: 70, // Spread of the particles
      origin: { y: 0.7 }, // Starting position (from the top)
    });
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
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      </div>
    </section>
  )
}

export default Contact