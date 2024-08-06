import React from 'react';
import {useState} from 'react';


interface CharacterSummaryProps {
  characterName: string,
}

function CharacterSummary({characterName}: CharacterSummaryProps) {
  const [characterLevel, setCharacterLevel] = useState(1)
  return (
    <div className="CharacterSummary">
      <p>{characterName}</p>
      <p>Level: {characterLevel}</p>
      <button onClick={() => {setCharacterLevel(characterLevel+1)}}>Level Up</button>
    </div>
  );
}

export default CharacterSummary;