const intro =
  " I am Self-motivated Edtech professional and Web Developer with over a decade of teaching experience. Passionate about working on multiple projects and mentorship programmes, demonstrating a high level of commitment and dedication to education and technology.";
const keyQual = "Key Qualifications";
const point1 =
  " Teaching Experience: Over a decade years of experience in educating students and professionals.";
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
    <div className='about'>
      <h3>About Me</h3>
      <h3>{intro}</h3>
      <h2>{keyQual}:</h2>
      <ul>
        {/* add undraw images */}
        <li>{point1}</li>
        <li>{point2}</li>
        <li>{point3}</li>
        <li>{point4}</li>
        <li>{point5}</li>
      </ul>
    </div>
  );
};

export default About;
