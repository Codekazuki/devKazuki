import image from "../assets/hello.svg";

const Landing = () => {
  return (
    <div>
      <div>
        <h1>Hi, I&apos;m Ayodele</h1>
        <p>a software engineer and edtech pro</p>
      </div>
      <img className='img' src={image} alt='' />
    </div>
  );
};

export default Landing;
