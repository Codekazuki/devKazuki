import teaching from "../assets/teaching.svg";
import deadline from "../assets/deadline.svg";
import devguy from "../assets/dev-guy.svg";
import mentor from "../assets/mentor.svg";
import webdev from "../assets/web-dev.svg";
import dedication from "../assets/dedication.svg";
const intro =
  " I am Self-motivated Edtech professional and Web Developer with over a decade of teaching experience. Passionate about working on multiple projects and mentorship programmes, demonstrating a high level of commitment and dedication to education and technology.";
const keyQual = "Key Qualifications";
const prePoint1 = "Teaching Experience";
const point1 =
  "  Over a decade years of experience in educating students and professionals.";
const prePoint2 = "Web Development Expertise ";
const point2 =
  "Proficient in various web development languages, frameworks, and tools, with a track record of delivering high-quality projects.";
const prePoint3 = "Mentorship";
const point3 =
  "    Experienced in guiding and mentoring individuals, fostering growth and development in their web development careers. ";
const prePoint4 = " Deadline-Oriented";
const point4 =
  " Hard-working with a penchant for meeting deadlines,ensuring timely completion of projects and tasks.";
const prePoint5 = "Passionate and Dedicated";
const point5 =
  "  Committed to promoting best practices in web development and providing diverse learning opportunities for students and clients.";

const About = () => {
  return (
    <section className='about'>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>About Me</h1>
      <section className='hero'>
        <div className='hero-center'>
          <div className='hero-title'>
            <h3>{intro}</h3>
          </div>
          <div className='img-container'>
            <img className='img' src={devguy} alt='' />
          </div>
        </div>
      </section>
      <h1 style={{ textAlign: "center" }}>{keyQual}</h1>

      {/* add undraw images */}
      <section className='hero'>
        <div className='hero-center'>
          <div className='hero-title'>
            <h1 className='pre-point'>{prePoint1}</h1>
            <h3>{point1}</h3>
          </div>
          <div className='img-container'>
            <img className='img' src={teaching} alt='' />
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-centerb'>
          <div className='img-container'>
            <img className='img' src={webdev} alt='' />
          </div>
          <div className='hero-title'>
            <h1 className='pre-point'>{prePoint2}</h1>
            <h3>{point2}</h3>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-center'>
          <div className='hero-title'>
            <h1 className='pre-point'>{prePoint3}</h1>
            <h3>{point3}</h3>
          </div>
          <div className='img-container'>
            <img className='img' src={mentor} alt='' />
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-centerb'>
          <div className='img-container'>
            <img className='img' src={deadline} alt='' />
          </div>
          <div className='hero-title'>
            <h1 className='pre-point'>{prePoint4}</h1>
            <h3>{point4}</h3>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-center'>
          <div className='hero-title'>
            <h1 className='pre-point'>{prePoint5}</h1>
            <h3>{point5}</h3>
          </div>
          <div className='img-container'>
            <img className='img' src={dedication} alt='' />
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
