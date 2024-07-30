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

    // Grab element containing skill text based on if it matches "placeholder skill", ignoring case
    const element = screen.getByText(mockSkillAvailableToThisClass.description);
    
    // Assertion: element exists and contains correct text
    expect(element).toBeInTheDocument
})