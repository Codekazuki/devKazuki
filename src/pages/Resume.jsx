import resume from "../assets/resume.pdf";
import { FaRegFileAlt } from "react-icons/fa";
const Resume = () => {
  return (
    <div className='resume-div'>
      <h2 className='resume-text'>
        Click the button to view and download my resume
      </h2>
      <a rel='noopener noreferrer' href={resume} target='_blank'>
        <button type='button' className=' resume-button '>
          My Resume
          <span style={{ padding: " 0 auto", fontSize: "2.2rem" }}>
            <FaRegFileAlt />
          </span>
        </button>
      </a>
    </div>
  );
};

export default Resume;
