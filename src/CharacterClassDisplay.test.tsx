import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterClassDisplay, CharacterClassDisplayProps } from './CharacterClassDisplay';
import userEvent from '@testing-library/user-event';

// Making test data
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

test("Selecting each available Perk consecutively increases characterClassLevel correctly by 1 each time", async () => {
    
    const user = userEvent.setup();

    // Render Component
    render(<CharacterClassDisplay {...mockCharacterClassDisplayProps} />);

    // Grab all buttons to be clicked
    const buttons = screen.getAllByText('Select', {selector: 'button'});
    const characterClassLevel = screen.getByText(/Level: /);

    // Click every button once
    for (let i=0; i < buttons.length; i++) {
        await user.click(buttons[i]);
        expect(characterClassLevel).toHaveTextContent(`Level: ${i+2}`);
    }

})

test("Each Perk increments characterLevel when selected then decrements characterLevel when deselected", async () => {
    
    const user = userEvent.setup();

    // Render Component
    render(<CharacterClassDisplay {...mockCharacterClassDisplayProps} />);

    // Grab all buttons to be clicked
    const buttons = screen.getAllByText('Select', {selector: 'button'});
    const characterClassLevel = screen.getByText(/Level: /);

    // Click each button twice before clicking the next button
    for (let i=0; i < buttons.length; i++) {
        await user.click(buttons[i]);
        expect(characterClassLevel).toHaveTextContent(`Level: 2`);
        await user.click(buttons[i]);
        expect(characterClassLevel).toHaveTextContent(`Level: 1`);
    }

})
