const MySkill = () => {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "React.js"] },
    {
      category: "Frameworks",
      items: ["Tailwind CSS", "Bootstrap", "Material UI"],
    },
    {
      category: "Productivity Tools",
      items: ["Slack", "Jira", "ClickUp", "Microsoft Teams"],
    },
    { category: "Hosting Platforms", items: ["Vercel", "Netlify", "Heroku"] },
    { category: "Version Control", items: ["GitHub", "GitLab", "Bitbucket"] },
    {
      category: "Content Management Systems",
      items: ["Contentful", "DatoCMS", "Strapi", "Sanity"],
    },
  ];

  return (
    <div className='my-skill-container'>
      <h2 className='my-skill-title'>My Skills</h2>
      <ul className='my-skill-list'>
        {skills.map((skillSet) => (
          <li key={skillSet.category} className='my-skill-category'>
            <h3 className='my-skill-category-title'>{skillSet.category}</h3>
            <ul className='skill-items'>
              {skillSet.items.map((skill, index) => (
                <li key={index} className='my-skill-item'>
                  <span className='skill-dot'></span>
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySkill;
