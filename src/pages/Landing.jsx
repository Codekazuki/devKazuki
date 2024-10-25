import image from "../assets/hello.svg";

const Landing = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Hi, I&apos;m Ayodele</h1>
          <p>a software engineer and edtech pro</p>
        </div>
        <div className='img-container'>
          <img className='img' src={image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Landing;
