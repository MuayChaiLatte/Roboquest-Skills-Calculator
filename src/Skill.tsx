import React from 'react';

interface skillProperties {
  name: string,
  description: string 
}


function Skill({name, description}: skillProperties) {
  return (
    <div className="Skill">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default Skill;
