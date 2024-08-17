import React from 'react';
import {useState} from 'react';
import CharacterClassStats from './CharacterClassStats';
import Perk from './Perk';

export interface ClassPerk {
    perkName: string,
    perkDescription: string,
    id: string,
    isPerkSelected: boolean
}


export interface CharacterClassDisplayProps {
    characterClassName: string,
    allCharacterClassPerks: ClassPerk[]
}

export function CharacterClassDisplay({characterClassName, allCharacterClassPerks} : CharacterClassDisplayProps) {
    const [perksSelected, setPerksSelected] = useState<ClassPerk[]>(allCharacterClassPerks)
    const [characterClassLevel, setCharacterClassLevel] = useState(1)


    function handlePerkClick (classPerkIndex : number) {
        const nextPerksSelected = perksSelected.slice();
        nextPerksSelected[classPerkIndex].isPerkSelected = !nextPerksSelected[classPerkIndex].isPerkSelected;
        setPerksSelected(nextPerksSelected);
        nextPerksSelected[classPerkIndex].isPerkSelected ? setCharacterClassLevel(characterClassLevel + 1) : setCharacterClassLevel(characterClassLevel - 1);
    }

    const perkList = allCharacterClassPerks.map((classPerk, index) =>
        <li key={classPerk.id}>
          <Perk 
            perkName={classPerk.perkName}
            perkDescription={classPerk.perkDescription}
            isPerkSelected={classPerk.isPerkSelected}
            onPerkClick={() => handlePerkClick(index)}
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

