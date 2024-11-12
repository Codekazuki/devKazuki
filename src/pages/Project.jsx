import { recentProjects } from "../assets/data";
import Card from "../components/Card";

const Project = () => {
  const experienceChart = recentProjects.map((item) => {
    const { id, projectName, image } = item;
    return (
      <section key={id}>
        <Card projectName={projectName} image={image} />
      </section>
    );
  });
  return (
    <section>
      <h1 style={{ textAlign: "center", padding: "1rem" }}> My Projects</h1>
      <div className='card-list'>{experienceChart}</div>
    </section>
  );
};

export default Project;
