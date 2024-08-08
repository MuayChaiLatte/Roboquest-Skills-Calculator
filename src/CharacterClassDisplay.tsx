import React from 'react';
import {useState} from 'react';
import CharacterClassStats from './CharacterClassStats';
import Perk from './Perk';

interface ClassPerk {
    perkName: string,
    perkDescription: string
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

    return (
        <div>
            <CharacterClassStats characterClassName='Guardian' characterClassLevel={characterClassLevel}/>
            <Perk 
            perkName='Stim Bubble' 
            perkDescription='While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.'
            isPerkSelected={perksSelected[0]}
            onPerkClick={handlePerkClick}
            />
        </div>
    )
}

