import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CharacterClassDisplay, CharacterClassDisplayProps } from './CharacterClassDisplay';


const mockCharacterClassDisplayProps: CharacterClassDisplayProps = {
  characterClassName: "Guardian",
  allCharacterClassPerks: [
      {
          perkName: 'Stim Bubble',
          perkDescription: 'While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.',
          id: 'GUAPRI1',
          isPerkSelected: false
      },
      {
          perkName: 'Safe Space',
          perkDescription: 'Reduces Bastion cooldown by 10%. While Bastion is active, repairs 5% of your scratch damage every 1s.',
          id: 'GUAPRI2',
          isPerkSelected: false
      }
  ]
}


function App() {
  return (
    <div className="App">
      <CharacterClassDisplay {...mockCharacterClassDisplayProps} />
    </div>
  );
}

export default App;
