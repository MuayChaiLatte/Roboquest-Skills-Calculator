import React from 'react';

export interface PerkProps {
  perkName: string,
  perkDescription: string,
  isPerkSelected: Boolean,
  onPerkClick: React.MouseEventHandler
}


export function Perk({perkName, perkDescription, isPerkSelected, onPerkClick}: PerkProps) {

  return (
    <div className="Perk">
      <p>{perkName}</p>
      <p>{perkDescription}</p>
      <button onClick={onPerkClick}>Select</button>
      <p>{isPerkSelected && 'Perk Selected'}</p>
    </div>
  );
}

