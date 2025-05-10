import { useState } from 'react'
import emailjs from '@emailjs/browser';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconContainer from '../components/IconContainer';

import.meta.env.VITE_EMAIL_INIT_PUBLIC_KEY
import.meta.env.VITE_EMAIL_SERVICE_KEY
import.meta.env.VITE_EMAIL_TEMPLATE_KEY

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';

    if (!message.trim()) newErrors.message = 'Message is required';

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  function sendMail() {
    emailjs.init(VITE_EMAIL_INIT_PUBLIC_KEY); // Merret nga dashboardi -> account -> public key
    emailjs.send(
      VITE_EMAIL_SERVICE_KEY, // Merret nga dashboardi -> service id
      VITE_EMAIL_TEMPLATE_KEY, // Merret nga dashboardi -> templates -> settings -> template id
      {
        to_email: email,
        subject: `Hi`,
        message: `Hellooo`
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      setEmail('');
      setName('');
      setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    sendMail();
  };

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-screen px-[9%] pt-8 pb-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">Get in Touch</h1>
        <div className="w-full max-w-lg bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] transform hover:shadow-[0_0_15px_#7cf03d] transition-all duration-300 animate-fadeIn">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleNameChange}
                className="w-full p-3 bg-gray-800 border border-[var(--main-color)] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleEmailChange}
                className="w-full p-3 bg-gray-800 border border-[var(--main-color)] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={handleMessageChange}
                className="w-full p-3 bg-gray-800 border border-[var(--main-color)] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full py-3 bg-[var(--main-color)] text-black font-semibold rounded-lg hover:bg-transparent hover:text-[var(--main-color)] hover:border-[var(--main-color)] border-2 border-[var(--main-color)] transition-all duration-300"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status === 'success' && (
            <p className="text-[var(--main-color)] text-center mt-4 animate-fadeIn">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p class Name="text-red-400 text-center mt-4 animate-fadeIn">Failed to send message. Please try again.</p>
          )}
        </div>

        <div className="mt-8 flex space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <IconContainer link='https://www.facebook.com/profile.php?id=100078417577734' children={<FaFacebookF />} />
          <IconContainer link='https://www.linkedin.com/in/regi-mele-74ba54138/' children={<FaLinkedinIn />} />
          <IconContainer link='https://github.com/RegiMele' children={<FaGithub />} />
        </div>
      </section>
    </div>
  );
}

export default Contact