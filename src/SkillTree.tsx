import React from 'react';
import {useState} from 'react';
import CharacterSummary from './CharacterSummary';
import Skill from './Skill';

interface ClassSkill {
    skillName: string,
    skillDescription: string
}

interface CharacterClassDataProps {
    characterClassName: string,
    allCharacterClassSkills: ClassSkill[]
}

function SkillTree({characterClassName, allCharacterClassSkills} : CharacterClassDataProps) {
    const totalNumberOfSkillsAvailableToClass = 1
    const [skillsSelected, setSkillsSelected] = useState(Array(totalNumberOfSkillsAvailableToClass).fill(false))
    const [characterLevel, setCharacterLevel] = useState(1)


    function handleSkillClick() {
        const nextSkillsSelected = skillsSelected.slice();
        nextSkillsSelected[0] = !nextSkillsSelected[0];
        setSkillsSelected(nextSkillsSelected);
        nextSkillsSelected[0] ? setCharacterLevel(characterLevel + 1) : setCharacterLevel(characterLevel - 1);
    }

    return (
        <div>
            <CharacterSummary characterName='Guardian' characterLevel={characterLevel}/>
            <Skill 
            name='Stim Bubble' 
            description='While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.'
            isSkillSelected={skillsSelected[0]}
            onSkillClick={handleSkillClick}
            />
        </div>
    )
}

export default SkillTree;