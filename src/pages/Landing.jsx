import image from "../assets/hello.svg";
const intro =
  "Welcome! I’m Ayodele, a software engineer crafting tech solutions with precision and an edtech advocate driven to innovate in education. Explore how I bring both disciplines together on my journey.";

const Landing = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1> Two Passions, One Purpose</h1>
          <h3>{intro}</h3>
        </div>
        <div className='img-container'>
          <img className='img' src={image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Landing;
