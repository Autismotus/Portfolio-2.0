import './Contact.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h13x1mi', 'template_rodvm1h', form.current, '-u0SqMfw9bv1H0Ox8')
      .then(() => {
        alert('Great success!')
        window.location.reload(false)
      }, () => {
          alert('Failed to send the message, please try again')
      });
  };

  return (
    <div className="contact-form">
       <div className="text-zone">
          <h1>Contact me</h1>
          <p>
          Nulla facilisi. Curabitur ullamcorper interdum diam, eu gravida nunc mattis non. Nullam tincidunt dolor eget eros lacinia facilisis. Fusce eget fermentum neque. Donec id malesuada purus. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            <div className="email-icon">
            <FontAwesomeIcon  icon={faEnvelope} color="4d4d4e" />
            <br></br>
            <a class="e-btn" href = "mailto: isakthorstrom@gmail.com">Send Email directly here:</a>
            </div>
            </div>
          </div>
  );
};
export default Contact