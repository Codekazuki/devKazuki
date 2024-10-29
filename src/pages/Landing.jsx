import image from "../assets/hello.svg";
import MySkill from "../components/MySkill";
const intro =
  "a software engineer crafting tech solutions with precision and an edtech advocate driven to innovate in education. Explore how I bring both disciplines together on my journey.";
const name = "Welcome! I’m Ayodele,";

const Landing = () => {
  return (
    <>
      <div style={{ margin: "2rem 0" }}>
        <section style={{ height: "75dvh" }} className='hero'>
          <div className='hero-center'>
            <div className='hero-title'>
              <h1> Two Passions, One Purpose</h1>
              <h3>
                <span>{name}</span>
                {intro}
              </h3>
            </div>
            <div className='img-container'>
              <img className='img' src={image} alt='' />
            </div>
          </div>
        </section>
      </div>
      <MySkill />
    </>
  );
};

export default Landing;
