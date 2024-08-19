import React from 'react';
import { render, screen } from '@testing-library/react';
import {Perk, PerkProps} from './Perk';
import userEvent from '@testing-library/user-event';

// Making test data - onPerkClick is a void function as this is a callback function affecting state in Perk's parent component that toggles the value of isPerkSelected passed to Perk
const mockPerkProps: PerkProps = {
    perkName: 'Stim Bubble',
    perkDescription: 'While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.',
    isPerkSelected: false,
    onPerkClick: () => {}
}

test("Perk renders with the correct description", () => {
    
    // Render Component
    render(<Perk {...mockPerkProps} />);

    // Grab elements the Component should have rendered
    const nameElement = screen.getByText(mockPerkProps.perkName);
    const descriptionElement = screen.getByText(mockPerkProps.perkDescription);
    
    // Assertion: correct elements exist and display correct information
    expect(nameElement).toBeInTheDocument
    expect(descriptionElement).toBeInTheDocument
})