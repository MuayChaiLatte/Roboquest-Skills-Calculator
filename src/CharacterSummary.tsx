import React from 'react';

interface CharacterSummaryProps {
  characterName: string,
  characterLevel: number
}

function CharacterSummary({characterName, characterLevel}: CharacterSummaryProps) {
  return (
    <div className="CharacterSummary">
      <p>{characterName}</p>
      <p>Level: {characterLevel}</p>
    </div>
  );
}

export default CharacterSummary;