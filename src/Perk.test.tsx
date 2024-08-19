import React from 'react';
import { render, screen } from '@testing-library/react';
import {Perk, PerkProps} from './Perk';
import userEvent from '@testing-library/user-event';

// Making test data
const mockPerkAvailableToThisClass: { name: string, description: string } = {
    name: 'Stim Bubble',
    description: 'While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.'
}

test("Perk renders with the correct description", () => {
    
    // Render Component
    render(<Perk name={mockPerkAvailableToThisClass.name} description={mockPerkAvailableToThisClass.description} />);

    // Grab elements the Component should have rendered
    const nameElement = screen.getByText(mockPerkAvailableToThisClass.name);
    const descriptionElement = screen.getByText(mockPerkAvailableToThisClass.description);
    
    // Assertion: correct elements exist and display correct information
    expect(nameElement).toBeInTheDocument
    expect(descriptionElement).toBeInTheDocument
})

test("Toggle Selected Flag text visible", async () => {
    render(<Perk name={mockPerkAvailableToThisClass.name} description={mockPerkAvailableToThisClass.description} />);
    await userEvent.click(screen.getByText(/perk selected/i));
    expect(screen.getByText(/perk selected/i)).toBeInTheDocument();
})