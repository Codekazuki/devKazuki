import { recentProjects } from "../assets/data";
import Card from "../components/Card";

const Project = () => {
  const experienceChart = recentProjects.map((item) => {
    const { id, ProjectName, image } = item;
    return (
      <section key={id}>
        <Card name={ProjectName} image={image} />
      </section>
    );
  });
  return (
    <section>
      <h1>Projects</h1>
      <div className='card-list'>{experienceChart}</div>
    </section>
  );
};

export default Project;
