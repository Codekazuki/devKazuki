import { recentCompany } from "../assets/data";
import Card from "../components/Card";
import Project from "./Project";

const Experience = () => {
  const experienceChart = recentCompany.map((item) => {
    const { id, name, role, role2, image } = item;
    return (
      <section key={id}>
        <Card name={name} role={role} role2={role2} image={image} />
      </section>
    );
  });
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Experiences </h1>
      <div className='card-list'>{experienceChart}</div>
      <Project />
    </section>
  );
};

export default Experience;
