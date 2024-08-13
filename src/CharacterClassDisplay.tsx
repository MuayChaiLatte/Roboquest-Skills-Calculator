import React from 'react';
import {useState} from 'react';
import CharacterClassStats from './CharacterClassStats';
import Perk from './Perk';

export interface ClassPerk {
    perkName: string,
    perkDescription: string,
    id: string
}

export interface CharacterClassDisplayProps {
    characterClassName: string,
    allCharacterClassPerks: ClassPerk[]
}

export function CharacterClassDisplay({characterClassName, allCharacterClassPerks} : CharacterClassDisplayProps) {
    const totalNumberOfPerksAvailableToClass = 1
    const [perksSelected, setPerksSelected] = useState(Array(totalNumberOfPerksAvailableToClass).fill(false))
    const [characterClassLevel, setCharacterClassLevel] = useState(1)


    function handlePerkClick() {
        const nextPerksSelected = perksSelected.slice();
        nextPerksSelected[0] = !nextPerksSelected[0];
        setPerksSelected(nextPerksSelected);
        nextPerksSelected[0] ? setCharacterClassLevel(characterClassLevel + 1) : setCharacterClassLevel(characterClassLevel - 1);
    }

    const perkList = allCharacterClassPerks.map((classPerk, index) =>
        <li key={classPerk.id}>
          <Perk 
            perkName={classPerk.perkName}
            perkDescription={classPerk.perkDescription}
            isPerkSelected={perksSelected[index]}
            onPerkClick={handlePerkClick}
           />
        </li>
      )

    return (
        <div>
            <CharacterClassStats characterClassName='Guardian' characterClassLevel={characterClassLevel}/>
            <ul>
          {perkList}
            </ul>
        </div>
    )
}

