import React from 'react';

interface SkillProps {
  name: string,
  description: string 
}


function Skill({name, description}: SkillProps) {
  return (
    <div className="Skill">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default Skill;
