import React from 'react';
import {useState} from 'react';
import CharacterSummary from './CharacterSummary';
import Skill from './Skill';


function SkillTree() {
    const totalNumberOfSkillsAvailableToClass = 1
    const [skillsSelected, setSkillsSelected] = useState(Array(totalNumberOfSkillsAvailableToClass).fill(false))

    function handleSkillClick() {
        const nextSkillsSelected = skillsSelected.slice()
        nextSkillsSelected[0] = !nextSkillsSelected[0]
        setSkillsSelected(nextSkillsSelected)
    }

    return (
        <div>
            <CharacterSummary characterName='Guardian'/>
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