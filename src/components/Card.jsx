const Card = ({ name, image, role, role2, projectName }) => {
  return (
    <div className='card'>
      <div className='card-details'>
        <div className='card-logo'>
          <img src={image} alt='image broken' />
        </div>
        {name && <h3> Company:{name}</h3>}
        {projectName && <h3> Project:{projectName}</h3>}
        {role && <h3>Role:{role}</h3>}
        {role2 && <h3>Role:{role2}</h3>}
      </div>
    </div>
  );
};

export default Card;
