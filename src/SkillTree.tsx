import React from 'react';
import {useState} from 'react';
import CharacterSummary from './CharacterSummary';
import Skill from './Skill';


function SkillTree() {
    return (
        <div>
            <CharacterSummary characterName='Guardian'/>
            <Skill name='Stim Bubble' description='While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.'/>
        </div>
    )
}

export default SkillTree;