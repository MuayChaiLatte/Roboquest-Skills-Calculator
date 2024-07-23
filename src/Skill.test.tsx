import React from 'react';
import { render, screen } from '@testing-library/react';
import Skill from './Skill';

test("Skill renders successfully", () => {
    
    // Render Component
    render(<Skill/>);

    // Grab element containing skill text based on if it matches "placeholder skill", ignoring case
    const element = screen.getByText(/placeholder skill/i);
    
    // Assertion: element exists and contains correct text
    expect(element).toBeInTheDocument
})