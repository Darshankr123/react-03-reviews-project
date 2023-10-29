import React from "react";

const List = ({ name, job, image, text }) => {
  
  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>{job}</h4>
      <p>{text}</p>
    </div>
  );
};

export default List;
