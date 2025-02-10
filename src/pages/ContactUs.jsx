import { FaHeadset } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2e65rr7", "template_u6q2uf6", form.current, {
        publicKey: "Sigp5F6mDHLs1JGP7",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("message sent to Ayodele");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("message NOT sent to Ayo");
        }
      );
  };
  return (
    <>
      <div className='contact'>
        <div>
          <img className='img2' src='/contact.svg' alt='' />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h1>
            <span>
              <FaHeadset />
            </span>
            Get In <span>Touch</span>
          </h1>
          <div className='input-box'>
            <label htmlFor='name'>Full Name</label>
            <input
              name='from_name'
              className='field'
              type='text'
              id='name'
              required
              placeholder='Input your name'
            />
          </div>
          <div className='input-box'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='from_email'
              className='field'
              type='email'
              required
              placeholder='Input your email'
            />
          </div>
          <div className='input-box'>
            <label htmlFor='interest'>What are you interested in?</label> <br />
            <select name='interest' className='field-interest' id='interest'>
              <option value='webdev'>Web Development</option>
              <option value='training'>Training</option>
              <option value='others'>Others</option>
            </select>
          </div>

          <div className='input-box'>
            <label htmlFor='message'>Message</label>
            <textarea
              className='field message'
              name='message'
              id='message'
              required
              placeholder='your message'
            ></textarea>
          </div>
          <button className='btn-submit' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
