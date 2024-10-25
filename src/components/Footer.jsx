import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer'>
      <h5>agbowurotoyin8@gmail.com</h5>
      <ul className='social-icons'>
        <li>
          <a className='twitter' href='https://x.com/Coachkazuki'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className='linkedin'
            href='https://www.linkedin.com/in/ayodele-agbowuro-74000358/'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className='github'
            target='_blank'
            href='https://github.com/Codekazuki'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className='whatsapp'
            href='https://wa.me/2348069477780
'
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
      <p>
        Copyright &copy; 2024 Made by
        <a href='https://github.com/Codekazuki'> Ayodele </a>
      </p>
    </div>
  );
};

export default Footer;
