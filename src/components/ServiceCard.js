import React from 'react';

const ServiceCard = (props) => {
  return (
    <div>
      <h3>{props.serviceChild.title}</h3>
      <p>{props.serviceChild.description}</p>
    </div>
  );
}


export default ServiceCard;


