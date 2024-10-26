import { recentCompany } from "../assets/data";
import Card from "../components/Card";

const Experience = () => {
  const experienceChart = recentCompany.map((item) => {
    const { id, name, role, role2, image } = item;
    return (
      <section key={id}>
        <Card name={name} role={role} role2={role2} image={image} />
      </section>
    );
  });
  return <div>{experienceChart}</div>;
};

export default Experience;
