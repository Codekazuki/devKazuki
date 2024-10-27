import image from "../assets/hello.svg";
const intro =
  " I am Self-motivated Edtech professional and Web Developer with over a decade of teaching experience. Passionate about working on multiple projects and mentorship programmes, demonstrating a high level of commitment and dedication to education and technology.";
const keyQual = "Key Qualifications";
const prePoint1 = "Teaching Experience:";
const point1 =
  "  Over a decade years of experience in educating students and professionals.";
const point2 =
  "Web Development Expertise: Proficient in various web development languages, frameworks, and tools, with a track record of delivering high-quality projects.";
const point3 =
  "   Mentorship: Experienced in guiding and mentoring individuals, fostering growth and development in their web development careers. ";
const point4 =
  " Deadline-Oriented: Hard-working with a penchant for meeting deadlines,ensuring timely completion of projects and tasks.";
const point5 =
  " Passionate andDedicated: Committed to promoting best practices in web development and providing diverse learning opportunities for students and clients.";

const About = () => {
  return (
    <section className='about'>
      <h3>About Me</h3>
      <h3>{intro}</h3>
      <h2>{keyQual}:</h2>

      {/* add undraw images */}
      <section className='hero'>
        <div className='hero-center'>
          <div className='hero-title'>
            <h2 className='pre-point'>{prePoint1}</h2>
            <h3>{point1}</h3>
          </div>
          <div className='img-container'>
            <img className='img' src={image} alt='' />
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-center'>
          <div className='img-container'>
            <img className='img' src={image} alt='' />
          </div>
          <div className='hero-title'>
            <h2 className='pre-point'>{prePoint1}</h2>
            <h3>{point1}</h3>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-center'>
          <div className='img-container'>
            <img className='img' src={image} alt='' />
          </div>
          <div className='hero-title'>
            <h2 className='pre-point'>{prePoint1}</h2>
            <h3>{point1}</h3>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-center'>
          <div className='img-container'>
            <img className='img' src={image} alt='' />
          </div>
          <div className='hero-title'>
            <h2 className='pre-point'>{prePoint1}</h2>
            <h3>{point1}</h3>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-center'>
          <div className='img-container'>
            <img className='img' src={image} alt='' />
          </div>
          <div className='hero-title'>
            <h2 className='pre-point'>{prePoint1}</h2>
            <h3>{point1}</h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
