import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../assets/hello.svg";
import MySkill from "../components/MySkill";
const intro =
  "a software engineer crafting tech solutions with precision and an edtech advocate driven to innovate in education. Explore how I bring both disciplines together on my journey.";
const name = "Welcome! I’m Ayodele,";

const Landing = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -100, scale: 1.2 },
      { opacity: 1, y: 0, scale: 1, duration: 2, ease: "bounce.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "bounce.out", delay: 0.5 }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" }
    );
  }, []);
  return (
    <>
      <div>
        <section style={{ height: "75dvh" }} className='hero'>
          <div className='hero-center'>
            <div className='hero-title'>
              <h1 ref={titleRef} className='hero-start'>
                Two Passions, One Purpose
              </h1>
              <h3 ref={textRef}>
                <span>{name}</span>
                {intro}
              </h3>
            </div>
            <div className='img-container'>
              <img ref={imageRef} className='img' src={image} alt='' />
            </div>
          </div>
        </section>
      </div>
      <MySkill />
    </>
  );
};

export default Landing;
