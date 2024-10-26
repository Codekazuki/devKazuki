const Card = ({ name, image, role, role2 }) => {
  return (
    <div className='card'>
      <div>
        <img src={image} alt='' width='96px' />
      </div>
      <div>
        <h1>{name}</h1>
        <h3>{role}</h3>
        <h3>{role2}</h3>
      </div>
    </div>
  );
};

export default Card;
