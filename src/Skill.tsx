import React from 'react';
import {useState} from 'react';

interface SkillProps {
  name: string,
  description: string,
  isSkillSelected: Boolean,
  onSkillClick: React.MouseEventHandler
}


function Skill({name, description, isSkillSelected, onSkillClick}: SkillProps) {
  
  return (
    <div className="Skill">
      <p>{name}</p>
      <p>{description}</p>
      <button onClick={onSkillClick}>Select</button>
      <p>{isSkillSelected && 'Skill Selected'}</p>
    </div>
  );
}

export default Skill;
