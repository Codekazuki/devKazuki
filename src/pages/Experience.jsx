import prunedge from "../assets/prunedge.png";
import goMyCode from "../assets/gomycode.png";
import pacific from "../assets/pacific.png";

const Experience = () => {
  return (
    <section>
      <div>
        <img src={prunedge} alt='' height='96px' width='96px' />
        <p>Software Intern</p>
        <p>Software Engieer</p>
      </div>
      <div>
        <img
          src={goMyCode}
          alt=''
          height='72px'
          style={{ backgroundColor: "black" }}
        />
        <p>Web Development Facilitator</p>
      </div>
      <div>
        <img src={pacific} alt='' height='96px' width='96px' />
        <p>Software Engineer</p>
      </div>
      <div>
        <img src={pacific} alt='' height='96px' width='96px' />
        <p>Web Development Facilitator</p>
      </div>
    </section>
  );
};

export default Experience;
