import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterSummary from './CharacterSummary';

// Making test data
const mockCharacterSummaryProps: { characterName: string, characterLevel: number } = {
    characterName: 'Guardian',
    characterLevel: 1
}

test("CharacterSummary renders correctly", () => {
    
    // Render Component
    render(<CharacterSummary characterName={mockCharacterSummaryProps.characterName} characterLevel={mockCharacterSummaryProps.characterLevel} />);

    // Grab elements the Component should have rendered
    const characterNameElement = screen.getByText(mockCharacterSummaryProps.characterName);
    const characterLevelElement = screen.getByText(mockCharacterSummaryProps.characterLevel);
    
    // Assertion: correct elements exist and display correct information
    expect(characterNameElement).toBeInTheDocument
    expect(characterLevelElement).toBeInTheDocument
})