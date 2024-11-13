import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-mail'>
        <a
          href='mailto:agbowurotoyin8@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Send me an email
        </a>

        <p>
          Copyright &copy; 2024 Made by
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/Codekazuki'
          >
            {" "}
            Ayodele{" "}
          </a>
        </p>
      </div>
      <ul className='social-icons'>
        <li>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='twitter'
            href='https://x.com/Coachkazuki'
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='linkedin'
            href='https://www.linkedin.com/in/ayodele-agbowuro-74000358/'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='github'
            href='https://github.com/Codekazuki'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='whatsapp'
            href='https://wa.me/2348069477780
'
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
