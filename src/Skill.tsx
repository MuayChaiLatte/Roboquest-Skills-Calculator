import React from 'react';
import {useState} from 'react';

interface SkillProps {
  name: string,
  description: string 
}


function Skill({name, description}: SkillProps) {
  const [toggleSelected, setToggleSelected] = useState(false)
  
  return (
    <div className="Skill">
      <p>{name}</p>
      <p>{description}</p>
      <p>{toggleSelected && 'Skill Selected'}</p>
    </div>
  );
}

export default Skill;
