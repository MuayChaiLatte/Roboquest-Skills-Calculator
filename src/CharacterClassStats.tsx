import React from 'react';

interface CharacterClassStatsProps {
  characterClassName: string,
  characterClassLevel: number
}

function CharacterClassStats({characterClassName, characterClassLevel}: CharacterClassStatsProps) {
  return (
    <div className="CharacterClassStats">
      <p>{characterClassName}</p>
      <p>Level: {characterClassLevel}</p>
    </div>
  );
}

export default CharacterClassStats;