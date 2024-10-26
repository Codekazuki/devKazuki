const Card = ({ name, image, role, role2 }) => {
  return (
    <div className='card'>
      <div className='card-details'>
        <h3> Company:{name}</h3>
        <h3>Role:{role}</h3>
        {role2 && <h3>Role:{role2}</h3>}
      </div>
      <div className='card-logo'>
        <img src={image} alt='' width='96px' />
      </div>
    </div>
  );
};

export default Card;
