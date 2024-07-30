import React from 'react';
import { render, screen } from '@testing-library/react';
import Skill from './Skill';

// Making test data
const mockSkillAvailableToThisClass: { name: string, description: string } = {
    name: 'Stim Bubble',
    description: 'While Bastion is active, increases weapons damage by 30%, firerate by 30% and movement speed by 18%.'
}

test("Skill renders with the correct description", () => {
    
    // Render Component
    render(<Skill name={mockSkillAvailableToThisClass.name} description={mockSkillAvailableToThisClass.description} />);

    // Grab elements the Component should have rendered
    const nameElement = screen.getByText(mockSkillAvailableToThisClass.name);
    const descriptionElement = screen.getByText(mockSkillAvailableToThisClass.description);
    
    // Assertion: correct elements exist and display correct information
    expect(nameElement).toBeInTheDocument
    expect(descriptionElement).toBeInTheDocument
})